<template>
    <div v-if="error">
        <ErrorBox :errorContext="error.message" :errorMessage="error.status" />
    </div>
    <div v-else>
        <section>
            <SectionTitle title="General" icon="view_headline"/>
            <div v-if="miner" class="flex-container">
                <widget
                    icon="paid"
                    text="Unpaid Balance"
                    color="red"
                    :value="getUnpaidEthByCurrency"
                    :options="{ duration: 0.5, decimalPlaces: 3 }"
                >
                    <button class="btn outline default-color" @click="selectNextCurrency()">{{ selectedCurrency[0] }}</button>
                </widget>
                <Widget
                    icon="engineering"
                    text="Active Workers"
                    color="blue"
                    :value="miner.activeWorkers"
                    :options="{ duration: 1.5 }"
                />
            </div>
            <div v-else class="flex-container">
                <Widget placeholder />
                <Widget placeholder />
            </div>
        </section>
        <section>
            <MiningStatistics :stats="miner || null"/>
        </section>
        <section>
            <WorkersList :workers="miner?.workers" :address="miner?.address || ''" />
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Miner } from '@/apis/interfaces'
import { Currencies, Currency, fetchEthValueByCurrency, fetchMiner } from '@/apis/EthermineApi'
import MiningStatistics from '@/components/containers/MiningStatistics.vue'
import SectionTitle from '@/components/generics/SectionTitle.vue'
import WorkersList from '@/components/containers/WorkersList.vue'
import ErrorBox from '@/components/generics/ErrorBox.vue'
import Widget from '@/components/generics/Widget.vue'

export default defineComponent({
    emits: ['dataLoaded'],
    components: {
        MiningStatistics,
        SectionTitle,
        WorkersList,
        ErrorBox,
        Widget
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
        const selectedCurrency: [Currency, number] = [Currencies[0], 1]
        return { miner, error, selectedCurrency }
    },
    computed: {
        getUnpaidEthByCurrency: function () : number {
            return this.miner.unpaid ? this.selectedCurrency[1] * (this.miner.unpaid / 1000000000000000000) : 0
        }
    },
    mounted () {
        if (!this.miner) this.$emit('dataLoaded', false)
        if (this.address) this.fetchData(this.address)
    },
    watch: {
        address: {
            handler (address: string) : void {
                this.fetchData(address)
            }
        }
    },
    methods: {
        selectNextCurrency: function () {
            // get next currency
            let i = Currencies.indexOf(this.selectedCurrency[0])
            i = i === Currencies.length - 1 ? 0 : i + 1

            // fetch new value by currency
            fetchEthValueByCurrency(Currencies[i])
                .then(multiplier => { this.selectedCurrency = multiplier })
        },
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
