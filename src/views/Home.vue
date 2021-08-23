<template>
    <div class="home-container">
        <SideNavigation />
        <div class="content-wrapper">
            <TopNavigation />
            <main class="bg-tertiery">
                <router-view class="main-content"/>
                <Footer />
            </main>
            <div @click="toggleSideMenu(false)" id="shadow" class="bg-secondary" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideNavigation from '@/components/navigation/SideNavigation.vue'
import TopNavigation from '@/components/navigation/TopNavigation.vue'
import Footer from '@/components/containers/Footer.vue'

export default defineComponent({
    components: {
        SideNavigation,
        TopNavigation,
        Footer
    }
})
</script>

<style scoped>

    .home-container {
        display: flex;
        width: 100vw;
        height: 100vh;
    }

    .content-wrapper {
        display: flex;
        width: 100%;
        height: 100vh;
        flex-direction: column;

        /* padding left set to 80px to always match side nav width while closed */
        padding-left: 80px;
    }

    main {
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 20px;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        /* always for a smother scroll when scrolling element into view */
        scroll-behavior: smooth;
    }

    .main-content {
        flex: 1 1 0;
    }

    #shadow {
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 0;
        z-index: -10;
        transition: opacity 200ms ease-out;
    }

    @media only screen and (max-width: 600px) {
        /* omit side navigation completely */
        .content-wrapper { padding-left: 0; }
    }

</style>
