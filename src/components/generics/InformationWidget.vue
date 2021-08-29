<template>
    <div class="container screen rounded outline info-widget-container">
        <div class="info-widget-wrapper">
            <span class="material-icons info-icon default-color">{{ icon }}</span>
            <div class="info-widget-content">
                <h1>{{ title }}</h1>
                <slot/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

    .info-widget-container {
        overflow: hidden;
        flex: 1 1 0;
        padding-top: 60px;
        padding-bottom: 60px;
        min-width: 400px;
    }

    .info-widget-wrapper {
        display: flex;
        gap: 25px;
    }

    .info-icon {
        font-size: 50px;
        margin: 0 10px;
    }

    .info-widget-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

</style>
