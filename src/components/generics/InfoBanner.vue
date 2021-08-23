<template>
    <div class="container screen center flex-container">
        <p :class="[placeholder && 'placeholder']">{{ comment }}</p>
        <h3 :class="[placeholder && 'placeholder']">{{ title }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: '________'
        },
        comment: {
            type: String,
            default: '________________'
        },
        placeholder: Boolean
    }
})
</script>

<style scoped>

</style>
