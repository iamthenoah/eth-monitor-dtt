<template>
    <nav class="top-nav-container screen bg-primary">
        <div @click="toggleSideMenu()" id="mb">
            <span class="material-icons ui-icon">menu</span>
        </div>
        <div class="input-icon-left search-bar" id="sb">
            <span class="material-icons" @click="search()">search</span>
            <input type="text" v-model="address" placeholder="ETH address...">
        </div>
        <div id="aa" class="nav-auth-actions">
            <div v-if="isAuthenticated">
                <button class="btn default-color-bg">
                    <span class="material-icons">account_circle</span>
                    <router-link to="/account" class="default-color-bg">{{ User.username }}</router-link>
                </button>
            </div>
            <div v-else>
                <router-link to="/authenticate/register" class="btn default-color-bg bezels">Register<span class="material-icons">account_circle</span></router-link>
                <router-link to="/authenticate/login" class="btn outline">Login<span class="material-icons">login</span></router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return { address: '' }
    },
    methods: {
        search: function () : void {
            if (this.address) {
                this.$router.push('/miners/' + this.address)
                this.address = ''
            }
        }
    }
})
</script>

<style scoped>

    #mb { grid-area: mb; }
    #sb { grid-area: sb; }
    #aa { grid-area: aa; }

    .top-nav-container {
        position: relative;
        padding: 10px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-areas: "mb sb aa";
        justify-content: space-between;
        align-items: center;
        gap: 25px;
    }

    .nav-auth-actions {
        float: left;
    }

    .search-bar {
        position: absolute;
        min-width: 300px;
        width: 50%;
    }

    @media only screen and (max-width: 750px) {
        .top-nav-container {
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 5px;
            grid-template-areas:
                "mb x aa"
                "sb sb sb";
        }

        .search-bar {
            position: relative;
            width: 100%;
        }
    }

</style>
