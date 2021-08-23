<template>
    <router-link :to="redirectTo">
        <div
            class="container screen rounded listable-item-container"
            :class="[isSelected && 'default-color-outline']"
        >
            <div class="listable-item-content-flex">
                <div class="item-icon-ring center bg-tertiery" :class="[placeholder && 'placeholder']">
                    <span class="material-icons" :class="color + '-color'">{{ icon }}</span>
                </div>
                <div>
                    <h2 :class="[placeholder && 'placeholder']">{{ title }}</h2>
                    <p class="comment">{{ comment }}</p>
                </div>
            </div>
            <div class="listable-item-content-flex">
                <slot></slot>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: '___________'
        },
        icon: String,
        comment: [String, Number],
        color: {
            type: String,
            default: 'default'
        },
        redirectTo: {
            type: String,
            default: '/'
        },
        placeholder: Boolean
    },
    computed: {
        isSelected: function () : boolean { return this.$route.fullPath === this.redirectTo }
    }
})
</script>

<style scoped>

    .listable-item-container {
        min-width: fit-content;
        margin-bottom: 15px;
        height: 95px;
    }

    .listable-item-content-flex,
    .listable-item-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }

    .item-icon-ring {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    h2 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    @media only screen and (max-width: 450px) {
        .item-icon-ring { display: none; }
    }

</style>
