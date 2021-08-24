<template>
    <section-title title="Workers" icon="engineering" id="focus-workers-list">
        <button v-show="workers && workers.length !== 0" class="btn outlined bg-primary" @click="sortByNextProperty()">
            Sorted by {{ getFormatedProperyText }}
        </button>
    </section-title>
    <div v-if="workers" id="workers-list">
        <div v-if="workers.length !== 0">
            <listable-item
                @click="$emit('onSelectionChanged', worker)"
                v-for="(worker, index) in workers"
                :key="worker.worker + index"
                :title="worker.worker"
                :redirectTo="`/workers/${address}/${worker.worker}`"
                :comment="'@ ' + Math.round(worker.reportedHashrate / 1000000) + ' MH/s'"
                icon="storage"
            >
                <Badge :text="worker.validShares" icon="thumb_up_alt" color="green" />
                <Badge :text="worker.staleShares" icon="thumb_down_alt" color="orange" />
                <Badge :text="worker.invalidShares" icon="warning" color="red" />
            </listable-item>
        </div>
        <section v-else>
            <h3 class="center">This Miner has no active Workers...</h3>
        </section>
    </div>
    <div v-else>
        <listable-item placeholder><Badge placeholder /><Badge placeholder /><Badge placeholder /></listable-item>
        <listable-item placeholder><Badge placeholder /><Badge placeholder /><Badge placeholder /></listable-item>
        <listable-item placeholder><Badge placeholder /><Badge placeholder /><Badge placeholder /></listable-item>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { sortBy, unCamelCaseString } from '@/apis/util'
import SectionTitle from '@/components/generics/SectionTitle.vue'
import ListableItem from '@/components/generics/ListableItem.vue'
import Badge from '@/components/generics/Badge.vue'

export default defineComponent({
    emits: ['onSelectionChanged'],
    components: {
        SectionTitle,
        ListableItem,
        Badge
    },
    props: {
        address: {
            type: String,
            required: true
        },
        workers: {
            type: Object,
            default: null
        }
    },
    data () {
        // used to dynamically set sortable worker properties from keys
        const sortableProperties: string[] = []
        return { sortableProperties, selectedPropertyIndex: 0 }
    },
    watch: {
        workers: {
            handler: function (workers) {
                // when workers finished loading, fetch keys as sortable props.
                if (workers && workers.length !== 0) this.sortableProperties = Object.keys(workers[0])
            }
        }
    },
    computed: {
        getFormatedProperyText: function () : string {
            const nextIndex = this.getNextIndex()
            const text = this.sortableProperties[nextIndex]
            return text !== undefined ? unCamelCaseString(this.sortableProperties[this.selectedPropertyIndex]) : ''
        }
    },
    methods: {
        getNextIndex: function () {
            return this.selectedPropertyIndex < this.sortableProperties.length - 1
                ? this.selectedPropertyIndex + 1 : 0
        },
        sortByNextProperty: function () {
            if (this.workers) {
                const section = document.getElementById('focus-workers-list')
                if (section) section.scrollIntoView()

                const list = document.getElementById('workers-list')
                if (list) {
                    list.classList.add('fade-out-in')
                    setTimeout(() => { list.classList.remove('fade-out-in') }, 200)
                }

                const nextIndex = this.getNextIndex()
                const property = this.sortableProperties[nextIndex]
                this.selectedPropertyIndex = nextIndex

                // gets comparator that sorts workers by given property
                const comparator = sortBy(property)

                // eslint-disable-next-line vue/no-mutating-props
                this.workers.sort(comparator)
            }
        }
    }
})
</script>

<style scoped>

    .fade-out-in {
        animation: fade-out-in alternate-reverse ease-out 200ms forwards;
    }

    @keyframes fade-out-in {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }

</style>
