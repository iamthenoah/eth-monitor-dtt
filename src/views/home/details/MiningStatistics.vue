<template>
    <section>
        <SectionTitle title="Supervision" icon="donut_large" />
        <div v-if="stats" class="flex-container">
            <widget
                icon="hourglass_full"
                text="Uptime"
                color="orange"
                :value="toDaySince(stats.time * 1000)"
                :options="{ duration: 1.5 }"
            >
            </widget>
            <widget
                icon="history"
                text="Last Updated"
                color="green"
                :value="toDaySince(stats.lastSeen * 1000)"
                :options="{ duration: 1.5 }"
            ></widget>
        </div>
        <div v-else class="flex-container">
            <widget placeholder></widget>
            <widget placeholder></widget>
        </div>
    </section>
    <section>
        <SectionTitle title="Cumulative Hashrate" icon="tag" />
        <div v-if="stats" class="flex-container">
            <widget
                icon="signal_cellular_alt"
                text="Current Hasrate"
                color="blue"
                :value="stats.currentHashrate / 1000000"
                :options="{ prefix: 'MH/s ', duration: 1.5 }"
            ></widget>
            <widget
                icon="description"
                text="Reported Hasrate"
                color="blue"
                :value="stats.reportedHashrate / 1000000"
                :options="{ prefix: 'MH/s ', duration: 1.5 }"
            ></widget>
        </div>
        <div v-else class="flex-container">
            <widget placeholder></widget>
            <widget placeholder></widget>
        </div>
    </section>
    <section>
        <SectionTitle title="Performance" icon="speed" />
        <div v-if="stats" class="flex-container">
            <widget
                icon="thumb_up_alt"
                text="Valid Shares"
                color="green"
                :value="stats.validShares"
                :options="{ duration: 1.5 }"
            ></widget>
            <widget
                icon="thumb_down_alt"
                text="Stale Shares"
                color="orange"
                :value="stats.staleShares"
                :options="{ duration: 1.5 }"
            ></widget>
            <widget
                icon="warning"
                text="Invalid Shares"
                color="red"
                :value="stats.invalidShares"
                :options="{ duration: 1.5 }"
            ></widget>
        </div>
        <div v-else class="flex-container">
            <widget placeholder></widget>
            <widget placeholder></widget>
            <widget placeholder></widget>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { timeAgo } from '@/apis/util'
import { MiningStats } from '@/apis/interfaces'
import SectionTitle from '@/components/generics/SectionTitle.vue'
import Widget from '@/components/generics/Widget.vue'

export default defineComponent({
    components: {
        SectionTitle,
        Widget
    },
    props: {
        stats: {
            type: Object as () => MiningStats
        }
    },
    methods: {
        toDaySince: function (timestamp: number) : string { return timeAgo(timestamp) }
    }
})
</script>
