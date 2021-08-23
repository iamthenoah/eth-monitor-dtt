<template>
    <div class="theme-container cursor" :class="[color + '-color-bg']" @click="changeThemeColor()">
        <div v-if="appThemeColor === color" class="selected" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ThemeColor } from '@/store/modules/ui'

export default defineComponent({
    props: {
        color: {
            type: String as () => ThemeColor,
            required: true
        }
    },
    methods: {
        changeThemeColor: function () { this.$store.dispatch('CHANGE_APP_THEME', this.color) }
    }
})
</script>

<style scoped>

    .theme-container {
        position: relative;
        margin-right: 15px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        display: inline-block;
    }

    .selected {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: solid 3px white;
        border-radius: 100%;
        width: 25px;
        height: 25px;
    }

</style>
