<template>
	<span/>
</template>

<script lang="ts">
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
            default: () : Record<string, unknown> => { return {} }
        }
    },
    data () { // eslint-disable-line
        const instance = null as unknown as CountUp
        return { instance }
    },
    mounted () { // eslint-disable-line
        this.create()
    },
    watch: {
        value: {
            handler (value: number | string) : void {
                if (this.instance) this.instance.update(value)
            }
        },
        options: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            handler (options: Record<string, unknown>) : void {
                this.create()
            }
        }
    },
    methods: {
        create: function () : void {
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
