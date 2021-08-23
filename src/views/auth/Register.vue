<template>
    <section>
        <LogoTitle title="Sign Up."/>
        <section>
            <p>Registering is very easy and can be done in a few simple steps...</p>
        </section>
    </section>
    <section v-if="!step1">
        <div>
            <h4>Step 1 <span style="font-size: 14px">/ 2</span>.</h4>
            <section>
                <p>Tell us your email and choose a username.</p>
            </section>
        </div>
        <section>
            <div class="space"><label>Email</label></div>
            <input type="text" placeholder="name@domain.com" v-model="form.email">
        </section>
    </section>
    <section v-else>
        <div>
            <h4>Step 2 <span style="font-size: 14px">/ 2</span>.</h4>
            <section>
                <p>Choose a password for your account.</p>
            </section>
        </div>
        <section>
            <div class="space"><label>Choose password</label></div>
            <div class="space input-icon-right">
                <input :type="viewPassword ? 'text' : 'password'" placeholder="alpha1234" v-model="form.passwords[0]">
                <span @click="viewPassword = !viewPassword" class="material-icons ui-icon">{{ viewPassword ? 'visibility' : 'visibility_off' }}</span>
            </div>
            <div class="space"><label>Repeat password</label></div>
            <input :type="viewPassword ? 'text' : 'password'" placeholder="alpha1234" v-model="form.passwords[1]">
        </section>
    </section>
    <section>
        <div v-if="!step1">
            <button @click="step1 = true" class="btn outline large" :class="[form.email.length === 0 && 'disabled']">
                Next Step<span class="material-icons">navigate_next</span>
            </button>
            <section>
                <p>Already have an account? <router-link to="/authenticate/login"><a class="default-color cursor" @click="$emit('closeError')">Sign in</a></router-link>.</p>
            </section>
        </div>
        <div v-else>
            <button @click="register()" class="btn default-color-bg large" :class="[(form.passwords[0].length === 0 || form.passwords[0] != form.passwords[1]) && 'disabled']">
                Create Account
            </button>
            <section>
                <p>Go back to <a class="default-color cursor" @click="step1 = false">step 1</a>.</p>
            </section>
        </div>
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
            step1: false,
            viewPassword: false,
            form: {
                email: '',
                passwords: ['', '']
            }
        }
    },
    methods: {
        register: async function () : Promise<void> {
            this.$emit('submit', true)
            await this.$store.dispatch('REGISTER', this.form)
                .then(() => this.$emit('success'))
                .then(() => this.$emit('success'))
                .catch((err: Error) => this.$emit('error', err))
        }
    }
})
</script>
