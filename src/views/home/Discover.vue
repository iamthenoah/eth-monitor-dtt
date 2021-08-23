<template>
    <div class="content">
        <PathRoot :paths="$route.fullPath.split('/').filter(p => p)"/>
        <section class="random-worker-container">
            <div v-if="workerWithAddress !== null">
                <div :class="[isPending && 'disabled']">
                    <WorkerDetailsWidget :worker="workerWithAddress[0]" :address="workerWithAddress[1]"/>
                </div>
            </div>
            <LoadingSquare v-else/>
            <div class="flex-container">
                <button class="btn default-color-bg large" @click="fetchRandomWorker()">
                    <span class="material-icons">cached</span>
                    Cycle Worker
                </button>
                <button class="btn outline large">
                    <router-link to="/miners" class="default-color">Checkout Miners</router-link>
                    <span class="material-icons default-color">navigate_next</span>
                </button>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Miner, Worker } from '@/apis/interfaces'
import { fetchWorkers } from '@/apis/EthermineApi'
import { getRandomAddresses } from '@/apis/FakeAuthApi'
import WorkerDetailsWidget from '@/components/generics/WorkerDetailsWidget.vue'
import LoadingSquare from '@/components/misc/loaders/LoadingSquare.vue'
import PathRoot from '@/components/generics/PathRoot.vue'

export default defineComponent({
    components: {
        WorkerDetailsWidget,
        LoadingSquare,
        PathRoot
    },
    data () {
        const workerWithAddress: [Worker, string] = null as unknown as [Worker, string]
        return { workerWithAddress, isPending: false }
    },
    mounted () {
        this.fetchRandomWorker()
    },
    methods: {
        fetchRandomWorker: function () : void {
            let address = ''
            this.isPending = true

            // use random ETH addresses if not authed
            if (this.$store.getters.isAuthenticated) {
                const miners: Miner[] = this.$store.getters.User.miners
                if (miners[0].workers) address = miners[0].workers[0].worker
                else address = getRandomAddresses(1)[0]
            } else {
                address = getRandomAddresses(1)[0]
            }

            fetchWorkers(address).then(workers => {
                if (workers.length !== 0) {
                    this.workerWithAddress = [workers[0], address]
                }
            }).finally(() => { this.isPending = false })
        }
    }
})
</script>

<style scoped>

    .random-worker-container {
        display: grid;
        justify-content: center;
        grid-template-rows: 400px auto;
        grid-template-columns: auto;
        align-items: center;
    }

</style>
