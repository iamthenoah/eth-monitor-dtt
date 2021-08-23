<template>
    <section class="not-found-container center">
        <section class="not-found-container">
            <section>
                <h1>{{ errorMessage }}</h1>
                <p>{{ errorContext }}</p>
            </section>
            <div class="link-back default-color">
                <span class="material-icons">arrow_back</span>
                <router-link :to="redirectTo">
                    <div class="default-color">back to civilization</div>
                </router-link>
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        errorMessage: {
            type: String,
            default: 'An error occured...'
        },
        errorContext: {
            type: String,
            required: true
        },
        redirectTo: {
            type: String,
            default: '/discover'
        }
    }
})
</script>

<style scoped>

    .link-back {
        display: flex;
        font-size: 15px;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        width: fit-content;
    }

    h1 {
        margin-bottom: 50px;
        font-weight: 900;
        font-size: 30px;
    }

    span {
        font-size: 15px;
        margin-right: 5px;
    }

</style>
