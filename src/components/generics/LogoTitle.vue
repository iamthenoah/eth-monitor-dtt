<template>
    <div class="logo-title-container">
        <router-link to="/discover"><img :src="logoImage"></router-link>
        <h4>{{ title }}</h4>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoImage from '@/assets/static/logo.png'

export default defineComponent({
    data () {
        return {
            logoImage: LogoImage
        }
    },
    props: {
        title: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

    .logo-title-container {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
    }

    img {
        width: 40px;
    }

</style>
