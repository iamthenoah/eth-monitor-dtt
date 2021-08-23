<template>
    <footer class="container bg-primary">
        <div class="links">
            <router-link to="/discover" class="center route-link">Discover</router-link>
            <router-link to="/miners" class="center route-link">Miners</router-link>
            <router-link to="/workers" class="center route-link">Workers</router-link>
            <router-link v-if="isAuthenticated" to="/account" class="center route-link">Account</router-link>
            <router-link v-else to="/authenticate/login?m=You clicked Login from the footer!" class="center route-link">Login</router-link>
        </div>
        <div class="center">
            <p>not (c) 2021, ETH Monitor.</p>
        </div>
    </footer>
</template>

<style scoped>

    footer {
        position: relative;
		padding-left: 15%;
		padding-right: 15%;
        height: fit-content;
        margin-top: 50px;
    }

    .links {
        width: 50%;
        margin: auto;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        gap: 25px;
    }

    .route-link {
        color: grey;
        font-weight: 600;
        text-decoration: none;
        transition: opacity 200ms ease-in;
    }

    .route-link:hover {
        opacity: 0.75;
    }

    @media only screen and (max-width: 600px) {
        .links {
            width: 100%;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: repeat(3, 1fr);
        }
    }

</style>
