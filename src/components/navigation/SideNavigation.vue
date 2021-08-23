<template>
    <aside id="side-navigation" class="bg-secondary closed">
        <Logo />
        <div>
            <menu-button
                route="/miners"
                text="Miners"
                icon="inventory"
                :selected="isCurrent('Miners')"
                @click="toggleSideMenu(false)"
            ></menu-button>
            <menu-button
                route="/workers"
                text="Workers"
                icon="storage"
                :selected="isCurrent('Workers')"
                @click="toggleSideMenu(false)"
            ></menu-button>
            <menu-button
                route="/discover"
                text="Discover"
                icon="explore"
                :selected="isCurrent('Discover')"
                @click="toggleSideMenu(false)"
            >
                <Badge text="Random Worker" color="red"/>
            </menu-button>
        </div>
        <div>
            <menu-button
                v-if="isAuthenticated"
                route="/account"
                text="Account"
                icon="account_circle"
                :selected="isCurrent('Preferences') || isCurrent('Profile')"
                @click="toggleSideMenu(false)"
            ></menu-button>
            <menu-button
                v-else
                route="/authenticate"
                text="Login"
                icon="login"
                :selected="isCurrent('Preferences') || isCurrent('Profile')"
                @click="toggleSideMenu(false)"
            ></menu-button>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuButton from '@/components/buttons/MenuButton.vue'
import Badge from '@/components/generics/Badge.vue'
import Logo from '@/components/generics/Logo.vue'

export default defineComponent({
    components: {
        MenuButton,
        Badge,
        Logo
    },
    created () {
        // rest side menu on load to be closed
        this.$store.dispatch('TOGGLE_MENU_OPENED', true)
    },
    methods: {
        isCurrent: function (path: string) { return this.$route.name === path }
    }
})
</script>

<style scoped>

    aside {
        z-index: 10;
        position: fixed;
        top: 0; left: 0;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        justify-content: space-evenly;
        transition: width 200ms ease-out;
        overflow: hidden;
    }

    .opened { width: 300px; }
    .closed { width: 80px; }

    @media only screen and (max-width: 600px) {
        .opened { width: 100%; }
        .closed { width: 0; }
    }

</style>
