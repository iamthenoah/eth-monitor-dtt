<template>
    <div class="section-title-container">
        <div class="section-title-content">
            <span class="material-icons">{{ icon }}</span>
            <h2 class="bezels">{{ title }}</h2>
        </div>
        <div class="center">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

    .section-title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section-title-content {
        display: flex;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    h2 {
        font-weight: 500;
    }

    @media only screen and (max-width: 750px) {
        .section-title-container {
            padding-right: 25px;
            padding-left: 25px;
        }
    }

</style>
