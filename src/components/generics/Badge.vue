<template>
    <div class="badge-container" :class="[color + '-color-bg']">
        <span v-if="icon" class="material-icons">{{ icon }}</span>
        <p :class="[placeholder && 'placeholder']">{{ text }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        icon: String,
        text: {
            type: [String, Number],
            default: '_________'
        },
        color: String,
        placeholder: Boolean
    }
})
</script>

<style lang="scss" scoped>

    .badge-container {
        position: relative;
        display: flex;
        padding: 1px 10px;
        border-radius: 7px;
        width: fit-content;
        gap: 7.5px;
        align-items: center;
        white-space: nowrap;

        span, p {
            font-size: 12px;
            color: white;
        }
    }

    .increased-width {
        width: 50px !important;
    }

</style>
