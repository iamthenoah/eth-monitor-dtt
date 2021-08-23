<template>
    <div class="container screen rounded stat-container">
        <div :class="{ 'stat' : hasSlots }" class="widget-info">
            <div v-show="hasSlots">
                <slot></slot>
            </div>
            <div>
                <p class="space comment" :class="{ 'placeholder' : placeholder }">{{ text }}</p>
                <h1>
                    <CountUp v-if="isNumber" :value="value" :options="options" />
                    <div :class="{ 'placeholder' : placeholder }" v-else>{{ value }}</div>
                </h1>
            </div>
        </div>
        <div class="center widget-icon">
            <div :class="color + '-color'">
                <span class="icon-large material-icons" :class="{ 'placeholder' : placeholder }">{{ icon }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import CountUp from '@/components/misc/CountUp.vue'

export default defineComponent({
    components: {
        CountUp
    },
    props: {
        icon: {
            type: String,
            default: 'check_box_outline_blank'
        },
        color: String,
        value: {
            type: [String, Number],
            default: '____'
        },
        options: Object,
        text: {
            type: String,
            default: '__________'
        },
        placeholder: Boolean
    },
    computed: {
        isNumber: function () { return typeof this.value === 'number' },
        hasSlots: function () { return this.$slots.default && this.$slots.default()[0].props !== null }
    }
})
</script>

<style scoped>

    .stat-container {
        position: relative;
        justify-content: space-between;
        align-items: center;
        display: flex;
        gap: 10px;
        height: 150px;
        min-width: 300px;
        flex: 1 1 0;
    }

    .stat {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        gap: 15px;
    }

    .icon-large {
        font-size: 40px;
    }

</style>
