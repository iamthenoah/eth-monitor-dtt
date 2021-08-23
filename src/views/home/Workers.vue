<template>
    <div class="content">
        <PathRoot :paths="$route.fullPath.split('/').filter(p => p)" id="top-of-page"/>
        <div v-if="!getNameAndAddress">
            <section class="center">
                <LoadingSquare />
            </section>
        </div>
        <div v-else>
            <router-view :nameAndAddress="getNameAndAddress"></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Miner } from '@/apis/interfaces'
import { fetchWorkers } from '@/apis/EthermineApi'
import { getRandomAddresses } from '@/apis/FakeAuthApi'
import LoadingSquare from '@/components/misc/loaders/LoadingSquare.vue'
import PathRoot from '@/components/generics/PathRoot.vue'

export default defineComponent({
    components: {
        LoadingSquare,
        PathRoot
    },
    mounted () {
        let { address, name } = this.$route.params
        if (Array.isArray(address)) address = address[0]
        if (Array.isArray(name)) name = name[0]

        if (!address || !name) {
            // use random ETH addresses if not authed
            let firstAddress = ''

            if (this.$store.getters.isAuthenticated) {
                const miners: Miner[] = this.$store.getters.User.miners
                if (miners[0].workers) firstAddress = miners[0].workers[0].worker
                else firstAddress = getRandomAddresses(1)[0]
            } else {
                firstAddress = getRandomAddresses(1)[0]
            }

            // redirect route from `/workers` to `/workers/:address/:name`
            this.getWorkerNameAndRedirect(firstAddress)
        }

        // ensure page is scrolled to top
        const main = document.getElementById('top-of-page')
        if (main) main.scrollIntoView()
    },
    computed: {
        getNameAndAddress: function () : [string, string] | null {
            let { address, name } = this.$route.params
            if (Array.isArray(address)) address = address[0]
            if (Array.isArray(name)) name = name[0]
            return name && address ? [name, address] : null
        }
    },
    methods: {
        getWorkerNameAndRedirect: function (address: string) : void {
            // gets a valid name from the first worker from given address
            fetchWorkers(address)
                .then(workers => {
                    if (workers) {
                        const name = workers[0].worker
                        this.$router.push(`/workers/${address}/${name}`)
                    }
                })
        }
    }
})
</script>
