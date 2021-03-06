/* eslint-disable */

import { ComponentCustomProperties } from 'vue'
import { State } from './store'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

declare module 'vuex' {
    export function useStore(key?: string): Store<State>
}
