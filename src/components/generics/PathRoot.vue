<template>
    <ul class="path-root">
        <li v-for="path in paths" :key="path">{{ shorten(path) }}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        paths: Array
    },
    methods: {
        shorten: function (path: string) : string {
            return path.length > 30 ? path.slice(0, 8) + '...' : path
        }
    }
})
</script>

<style scoped>

    li {
        padding-right: 10px;
        font-size: 26px;
        font-weight: 400;
        text-transform: capitalize;
    }

    li:is(:last-child) {
        font-weight: 700;
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    li:not(:last-child),
    li:not(:last-child)::after {
        content: '/';
        color: grey;
    }

    li:not(:last-child)::after {
        padding-left: 10px;
    }

    @media only screen and (max-width: 600px) {
        .path-root {
            text-align:center
        }
    }

</style>
