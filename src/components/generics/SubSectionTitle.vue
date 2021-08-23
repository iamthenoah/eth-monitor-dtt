<template>
    <div class="sub-section-title-container">
        <h3>{{ title }}</h3>
        <div class="center">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

    .sub-section-title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media only screen and (max-width: 750px) {
        .sub-section-title-container {
            padding-right: 25px;
            padding-left: 25px;
        }
    }

</style>
