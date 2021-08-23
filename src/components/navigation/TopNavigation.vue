<template>
    <nav class="top-nav-container screen bg-primary">
        <div @click="toggleSideMenu()">
            <span class="material-icons ui-icon">menu</span>
        </div>
        <div class="bezels">
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

<style lang="scss" scoped>

    .top-nav-container {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;
        padding: 10px;
    }

</style>
