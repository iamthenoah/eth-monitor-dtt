<template>
    <div id="logo-container" class="center">
        <img id="logo-image" :src="logoImage">
        <div id="logo-text" class="text-inverted">
            <strong>ETH</strong> Monitor
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoImage from '@/assets/static/logo.png'

export default defineComponent({
    data: function () {
        return {
            logoImage: LogoImage
        }
    }
})
</script>

<style scoped>

    #logo-container {
        user-select: none;
        width: 100%;
        height: 60px;
        color: white;
    }

    #logo-text {
        white-space: nowrap;
        display: none; /* initially want text logo to be hidden as the side menu is initially closed */
    }

    img {
        width: auto;
        height: 50%;
    }

    .fade-out-in {
        animation: fade-out-in alternate-reverse ease-out 300ms forwards;
    }

    @keyframes fade-out-in {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }

</style>
