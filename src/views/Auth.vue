<template>
    <div class="auth-container bg-primary">
        <img :src="banner">
        <div>
            <div class="auth-form" :class="[submit && 'disabled']">
                <router-view
                    @submit="onSubmit($event)"
                    @error="onError($event)"
                    @success="onSuccess()"
                    @closeError="onCloseError()">
                </router-view>
                <div v-if="error" class="center red-color">{{ error }}</div>
            </div>
            <LoadingBar v-if="submit"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EthBanner from '@/assets/static/eth-banner.png'
import LoadingBar from '@/components/misc/loaders/LoadingBar.vue'

export default defineComponent({
    components: {
        LoadingBar
    },
    data () {
        return {
            banner: EthBanner,
            submit: false,
            error: ''
        }
    },
    methods: {
        onSubmit: function (submited: boolean) {
            this.submit = submited
            this.error = ''
        },
        onSuccess: function () {
            this.$router.push('/')
        },
        onError: function (error: Error) {
            this.submit = false
            this.error = error.message
        },
        onCloseError: function () {
            this.error = ''
        }
    }
})
</script>

<style scoped>

    .auth-container {
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
        justify-items: center;
        align-items: center;
    }

    .auth-form {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 150px 270px auto 0px;
        word-wrap: break-word;
        justify-content: center;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 1000px) {
        .auth-container { grid-template-columns: 1fr; }
        img { display: none; }
    }

</style>
