<template>
    <div class="screen container rounded outline">
        <div class="worker-details-widget-container">
            <div class="flex-container">
                <div class="worker-icon-ring center bg-tertiery">
                    <span class="material-icons">engineering</span>
                </div>
                <div class="worker-info">
                    <div class="worker-title space">
                        <div class="flex-container">
                            <h3>{{ worker.worker }}</h3>
                            <p>{{ toDaySince(worker.lastSeen * 1000) }}</p>
                        </div>
                        <p class="worker-address space">{{ address }}</p>
                    </div>
                    <div class="flex-container">
                        <Badge text="Status: Online" icon="public" color="green" />
                    </div>
                    <section class="flex-container">
                        <div class="flex-container">
                            <p>Reported Hashrate</p>
                            <CountUp :value="worker.reportedHashrate / 10000000" :options="{ durations: 1.5, prefix: 'MH/s ' }" />
                        </div>
                        <div class="flex-container">
                            <p>Current Hashrate</p>
                            <CountUp :value="worker.currentHashrate / 10000000" :options="{ durations: 1.5, prefix: 'MH/s ' }" />
                        </div>
                    </section>
                    <div class="flex-container">
                        <div></div>
                        <button class="btn default-color-bg">
                            <router-link :to="`/workers/${address}/${worker.worker}`" class="default-color-bg">View More Details</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Worker } from '@/apis/interfaces'
import { timeAgo } from '@/apis/util'
import CountUp from '@/components/misc/CountUp.vue'
import Badge from '@/components/generics/Badge.vue'

export default defineComponent({
    components: {
        CountUp,
        Badge
    },
    props: {
        worker: {
            type: Object as () => Worker,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    methods: {
        toDaySince: function (timestamp: number) : string { return timeAgo(timestamp) }
    }
})
</script>

<style scoped>

    .worker-title {
        display: grid;
    }

    .worker-address {
        margin-top: 5px;
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .worker-icon-ring {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

</style>
