<template>
    <section>
        <LogoTitle title="Sign In." />
        <section>
            <p>{{ message }}</p>
        </section>
    </section>
    <section>
        <div class="space"><label>Email</label></div>
        <input class="space" type="text" placeholder="name@domain.com" v-model="form.email">
        <div class="space"><label>Password</label></div>
        <div class="space input-icon-right">
            <input :type="viewPassword ? 'text' : 'password'" placeholder="password" v-model="form.password">
            <span @click="viewPassword = !viewPassword" class="material-icons ui-icon">{{ viewPassword ? 'visibility' : 'visibility_off' }}</span>
        </div>
        <a class="default-color cursor">forgot password?</a>
    </section>
    <section>
        <button @click="login()" class="btn default-color-bg large">Sign In</button>
        <section>
            <p>Don't have an account yet? <router-link to="/authenticate/register"><a class="default-color cursor" @click="$emit('closeError')">Sign up</a></router-link>.</p>
        </section>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoTitle from '@/components/generics/LogoTitle.vue'

export default defineComponent({
    emits: ['submit', 'success', 'error', 'closeError'],
    components: {
        LogoTitle
    },
    data () {
        return {
            viewPassword: false,
            form: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        message: function () {
            const m = this.$route.query.m || this.$route.query.message
            return m || 'Login to view your GPU & ETH stats.'
        }
    },
    methods: {
        login: async function () : Promise<void> {
            this.$emit('submit', true)
            await this.$store.dispatch('LOGIN', this.form)
                .then(() => this.$emit('success'))
                .catch((err: Error) => this.$emit('error', err))
        }
    }
})
</script>
