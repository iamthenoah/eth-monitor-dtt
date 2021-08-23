<template>
    <div class="all screen-container rounded screen cursor" @click="changeThemeMode()" :class="{ 'default-outline' : appThemeMode === mode }">
        <img :src="require(`@/assets/static/appearances/${mode}.png`)">
        <hr>
        <div class="selection-container">
            <input type="radio" :value="name" :checked="appThemeMode === mode">
            <div>{{ name }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ThemeMode } from '@/store/modules/ui'

export default defineComponent({
    props: {
        mode: {
            type: String as () => ThemeMode,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        changeThemeMode: function () { this.$store.dispatch('CHANGE_APP_MODE', this.mode) }
    }
})
</script>

<style scoped>

    .screen-container {
        position: relative;
        overflow: hidden;
        min-width: 200px;
        display: flex;
        white-space: nowrap;
        word-wrap: nowrap;
        flex: 1 1 0;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .selection-container {
        display: flex;
        width: 100%;
        font-weight: 500;
        font-size: 14px;
        align-items: center;
    }

    input {
        height: 14px;
        margin: 10px;
        width: auto;
    }

    @media only screen and (max-width: 550px) {
        .selection-container { border-top: none; }

        .screen-container {
            min-width: 350px;
            height: 105px;
        }
    }

    @media screen and (min-width: 550px) {
        .screen-container { flex-direction: column; }
    }

</style>
