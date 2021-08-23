<template>
    <section>
        <WorkersList
            @onSelectionChanged="onSelectionChanged($event)"
            :address="nameAndAddress[1] || ''"
            :workers="workers || []"
        />
    </section>
    <section id="focus-worker-stats">
        <ErrorBox v-if="error" :errorContext="error.message" />
        <div v-else>
            <InfoBanner
                :title="nameAndAddress[0]"
                comment="Currently looking at Worker"
                :placeholder="!selectedWorker"
            />
            <MiningStatistics :stats="selectedWorker || null"/>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Worker } from '@/apis/interfaces'
import { fetchWorkers } from '@/apis/EthermineApi'
import MiningStatistics from '@/views/home/details/MiningStatistics.vue'
import WorkersList from '@/views/home/details/WorkersList.vue'
import InfoBanner from '@/components/generics/InfoBanner.vue'
import ErrorBox from '@/components/generics/ErrorBox.vue'

export default defineComponent({
    components: {
        MiningStatistics,
        WorkersList,
        InfoBanner,
        ErrorBox
    },
    props: {
        nameAndAddress: {
            type: Object as () => [string, string],
            required: true
        }
    },
    data () {
        const workers: Worker[] = []
        const error: Error = null as unknown as Error
        const selectedWorker: Worker = null as unknown as Worker

        return { selectedWorker, workers, error }
    },
    mounted () {
        const [name, address] = this.nameAndAddress
        if (address && name) {
            this.fetchData(address, name)
        }
    },
    watch: {
        nameAndAddress: {
            handler (nameAndAddress) {
                const [name, address] = nameAndAddress
                this.fetchData(address, name)
            }
        }
    },
    methods: {
        onSelectionChanged: function (worker: Worker) {
            const content = document.getElementById('focus-worker-stats')
            if (content) content.scrollIntoView()
            this.selectedWorker = worker
        },
        fetchData: function (address: string, name: string) : void {
            // reset stats data
            this.selectedWorker = null as unknown as Worker
            this.error = null as unknown as Error

            // fetch data from ethermine.org
            fetchWorkers(address)
                .then(workers => {
                    this.workers = workers
                    const selected = workers.filter(w => w.worker === name)
                    this.selectedWorker = selected[0]
                })
                .catch((err: Error) => { this.error = err })
        }
    }
})
</script>
