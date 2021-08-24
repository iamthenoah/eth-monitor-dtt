<template>
    <div class="content">
        <PathRoot :paths="$route.fullPath.split('/').filter(p => p)"/>
        <section>
            <SectionTitle title="ETH Addresses" icon="home"/>
            <div class="flex-container" :class="[!isDataLoaded && 'disabled']">
                <MinerWidget
                    v-for="(address, index) in miningAddresses"
                    :key="address + index"
                    :address="address"
                    @click="selectedMiningAddress(address)"
                />
            </div>
        </section>
        <section id="focus-miner-stats">
            <router-view @dataLoaded="onDataLoaded($event)" :address="selectedAddress"></router-view>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Miner } from '@/apis/interfaces'
import { getRandomAddresses } from '@/apis/FakeAuthApi'
import SectionTitle from '@/components/generics/SectionTitle.vue'
import MinerWidget from '@/components/generics/MinerWidget.vue'
import PathRoot from '@/components/generics/PathRoot.vue'

export default defineComponent({
    components: {
        SectionTitle,
        MinerWidget,
        PathRoot
    },
    data () {
        const miningAddresses: string[] = []

        return {
            miningAddresses,
            selectedAddress: '',
            isDataLoaded: true
        }
    },
    mounted () {
        // use random ETH addresses if not authed
        if (this.$store.getters.isAuthenticated) {
            const miners: Miner[] = this.$store.getters.User.miners
            miners.forEach(m => this.miningAddresses.push(m.address))
        } else {
            this.miningAddresses = getRandomAddresses()
        }

        let { address } = this.$route.params
        if (Array.isArray(address)) address = address[0]

        // ensure that route always has a :address param set
        if (!address) {
            this.$router.push('/miners/' + this.miningAddresses[0])
            this.selectedAddress = this.miningAddresses[0]
        } else {
            this.selectedAddress = Array.isArray(address) ? address[0] : address
        }
    },
    methods: {
        onDataLoaded: function (loaded: boolean) : void {
            this.isDataLoaded = loaded
            this.scrollToContent()
        },
        selectedMiningAddress: function (address: string) : void {
            this.selectedAddress = address
            this.isDataLoaded = false
            this.scrollToContent()
        },
        scrollToContent: function () : void {
            const content = document.getElementById('focus-miner-stats')
            if (content) content.scrollIntoView()
        }
    }
})
</script>
