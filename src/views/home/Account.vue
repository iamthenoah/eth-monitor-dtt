<template>
    <div class="content">
        <PathRoot :paths="$route.fullPath.split('/').filter(p => p)"/>
        <section v-if="User">
            <div class="screen container rounded flex-container">
                <div :class="[isLoggingOut && 'disabled']" class="large">
                    <section-title title="Profile" icon="shield">
                        <button class="btn red-color-bg outline" @click="logout()">Logout</button>
                    </section-title>
                    <div class="flex-container">
                        <div class="large">
                            <div class="space"><label>Username</label></div>
                            <input type="text" :value="User.username">
                        </div>
                        <div class="large">
                            <div class="space"><label>Email</label></div>
                            <input type="text" :value="User.email">
                        </div>
                        <div class="large">
                            <div class="space"><label>Username</label></div>
                            <input type="text" :value="User.username">
                        </div>
                    </div>
                </div>
                <LoadingBar v-show="isLoggingOut"/>
            </div>
        </section>
        <section>
            <SectionTitle title="Preferences" icon="settings"/>
            <section>
                <sub-section-title title="App Theme">
                    <p>Current: <strong>{{ appThemeMode }}</strong></p>
                </sub-section-title>
                <section class="flex-container">
                    <ThemeMode name="Light Mode (Default)" mode="light" />
                    <ThemeMode name="Dim Mode" mode="dim" />
                    <ThemeMode name="Dark Mode" mode="dark" />
                </section>
            </section>
            <section>
                <sub-section-title title="App Color">
                    <p>Current: <strong>{{ appThemeColor }}</strong></p>
                </sub-section-title>
                <section>
                    <ThemeColor color="purple" />
                    <ThemeColor color="blue" />
                    <ThemeColor color="green" />
                    <ThemeColor color="orange" />
                    <ThemeColor color="salmon" />
                    <ThemeColor color="red" />
                </section>
            </section>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubSectionTitle from '@/components/generics/SubSectionTitle.vue'
import SectionTitle from '@/components/generics/SectionTitle.vue'
import LoadingBar from '@/components/misc/loaders/LoadingBar.vue'
import ThemeColor from '@/components/buttons/ThemeColor.vue'
import ThemeMode from '@/components/buttons/ThemeMode.vue'
import PathRoot from '@/components/generics/PathRoot.vue'

export default defineComponent({
    components: {
        SubSectionTitle,
        SectionTitle,
        LoadingBar,
        ThemeColor,
        ThemeMode,
        PathRoot
    },
    data () {
        return { loggingOut: false }
    },
    computed: {
        isLoggingOut: function () : boolean { return this.loggingOut }
    },
    methods: {
        logout: function () : void {
            this.loggingOut = true

            this.$store.dispatch('LOGOUT')
                .then(() => { this.$router.push('/authenticate/login?m=You have logged out.') })
                .finally(() => { this.loggingOut = false })
        }
    }
})
</script>
