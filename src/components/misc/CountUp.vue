<template>
	<span/>
</template>

<script>
/* eslint-disable */
import { CountUp } from 'countup.js'

export default {
    props: {
        duration: {
            type: Number,
            default: 1
        },
        value: {
            type: Number,
            required: true
        },
        options: {
            type: Object,
            default: () => { return {} }
        }
    },
    data () { // eslint-disable-line
        return { instance: null }
    },
    mounted () { // eslint-disable-line
        this.create()
    },
    watch: {
        value: {
            handler (value) {
                if (this.instance) this.instance.update(value)
            }
        },
        options: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            handler (options) {
                this.create()
            }
        }
    },
    methods: {
        create: function () {
            const options = this.options
            if (options.duration === undefined) { options.duration = 1 }

            this.instance = new CountUp(
                this.$el,
                this.value,
                options
            )

            if (!this.instance.error) { this.instance.start() }
        }
    }
}
</script>
