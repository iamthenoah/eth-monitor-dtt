<template>
    <router-link class="miner-widget-container" :to="'/miners/' + address">
        <div class="container screen cursor rounded" :class="[isSelected && 'default-color-outline']">
            <div class="address-title-container comment">
                <span class="material-icons">alternate_email</span>
                <div>Mining Address</div>
            </div>
            <h2 class="mining-address">{{ address }}</h2>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        address: {
            type: String,
            required: true
        }
    },
    computed: {
        isSelected: function () : boolean { return this.$route.fullPath === '/miners/' + this.address }
    }
})
</script>

<style scoped>

    .miner-widget-container {
        position: relative;
        min-width: 300px;
        flex: 1 1 0;
    }

    .address-title-container {
        display: flex;
        gap: 10px;
    }

    .mining-address {
        font-size: 18px;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    h2 {
        margin-top: 10px;
    }

</style>
