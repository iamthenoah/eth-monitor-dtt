<template>
    <div
        @click="redirect(route)"
        class="menu-button-container rounded text-inverted bg-secondary-lightened-hover cursor"
        :class="[selected && 'bg-secondary-lightened']"
    >
        <div class="center text-inverted">
            <span class="material-icons">{{ icon }}</span>
        </div>
        <div>
            <div class="menu-button-text text-inverted">{{ text }}</div>
        </div>
        <div v-show="isMenuOpened" class="menu-button-additional">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        route: String,
        text: String,
        icon: String,
        selected: Boolean
    },
    methods: {
        redirect: function (path: string) { this.$router.push(path) }
    }
})
</script>

<style scoped>

    .menu-button-container {
        position: relative;
        white-space: nowrap;
        display: grid;
        grid-template-columns: 60px auto;
        width: auto;
        height: 50px;
        margin: 10px;
        border-radius: 5px;
        align-items: center;
    }

    .menu-button-additional {
        position: absolute;
        right: 0;
        margin-right: 20px;
    }

    .menu-button-text {
        position: absolute;
        transform: translateY(-50%);
        font-size: 15px;
        top: 50%;
        text-transform: capitalize;
        font-weight: 500;
        margin-left: 10px;
    }

    span {
        position: absolute;
        font-size: 18px;
    }

</style>
