<template>
    <div v-if="error">
        <ErrorBox :errorContext="error.message" :errorMessage="error.status" />
    </div>
    <div v-else>
        <section>
            <MiningStatistics :stats="miner || null"/>
        </section>
        <section>
            <WorkersList :workers="miner?.workers || []" :address="miner?.address || ''" />
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fetchMiner } from '@/apis/EthermineApi'
import { Miner } from '@/apis/interfaces'
import MiningStatistics from '@/views/home/details/MiningStatistics.vue'
import WorkersList from '@/views/home/details/WorkersList.vue'
import ErrorBox from '@/components/generics/ErrorBox.vue'

export default defineComponent({
    emits: ['dataLoaded'],
    components: {
        MiningStatistics,
        WorkersList,
        ErrorBox
    },
    props: {
        address: {
            type: String,
            required: true
        }
    },
    data () {
        const miner: Miner = null as unknown as Miner
        const error: Error = null as unknown as Error
        return { miner, error }
    },
    mounted () {
        if (this.address) this.fetchData(this.address)
        if (!this.miner) this.$emit('dataLoaded', false)
    },
    watch: {
        address: {
            handler (address) {
                this.fetchData(address)
            }
        }
    },
    methods: {
        fetchData: function (address: string) : void {
            // reset miner data
            this.miner = null as unknown as Miner
            this.error = null as unknown as Error

            // fetch data from ethermine.org
            fetchMiner(address)
                .then(miner => { this.miner = miner })
                .catch((err: Error) => { this.error = err })
                .finally(() => { this.$emit('dataLoaded', true) })
        }
    }
})
</script>
