<template>
    <ErrorBox errorMessage="404 Not Found." errorContext="The page you have requested does not exist..."/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ErrorBox from '@/components/generics/ErrorBox.vue'

export default defineComponent({
    components: { ErrorBox }
})
</script>
