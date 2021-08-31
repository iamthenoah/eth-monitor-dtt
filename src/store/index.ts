import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user, { UserStoreState } from './modules/user'
import ui, { UiStoreState } from './modules/ui'

export type State = UserStoreState & UiStoreState

export const store = createStore({
    plugins: [createPersistedState()],
    modules: { user, ui }
})
