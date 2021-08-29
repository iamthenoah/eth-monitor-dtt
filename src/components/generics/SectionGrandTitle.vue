<template>
    <div class="container center">
        <h1>{{ title }}</h1>
    </div>
</template>

<script lang="ts">
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

    h1 {
        margin: 30px 0;
        font-size: 34px;
        font-weight: 700;
    }

</style>
