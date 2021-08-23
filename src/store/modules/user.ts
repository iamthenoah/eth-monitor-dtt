import { User } from '@/apis/interfaces'
import { Commit } from 'vuex'
import { fakeLoginApiCall, fakeLogoutApiCall, fakeRegisterApiCall, RegisterPayload, UserCredentials } from '../../apis/FakeAuthApi'

export interface UserStoreState {
    user: User | Record<string, unknown>;
}

export const state: UserStoreState = { user: {} }

const getters = {
    User: (state: { user: User; }) : User => state.user,
    isAuthenticated: (state: { user: User; }) : boolean => {
        return state.user && state.user.constructor === Object && Object.keys(state.user).length !== 0
    }
}

const actions = {
    async REGISTER ({ commit }: { commit: Commit }, payload: RegisterPayload) : Promise<void> {
        const user = await fakeRegisterApiCall(payload)
        commit('SET_USER', user)

        // apply user ui settings
        commit('SET_APPEARANCE', user.preferences.theme.mode || 'light')
        commit('SET_THEME', user.preferences.theme.color || 'blue')
    },

    async LOGIN ({ commit }: { commit: Commit }, payload: UserCredentials) : Promise<void> {
        const user = await fakeLoginApiCall(payload)
        commit('SET_USER', user)

        // apply user ui settings
        commit('SET_APPEARANCE', user.preferences.theme.mode || 'light')
        commit('SET_THEME', user.preferences.theme.color || 'blue')
    },

    async LOGOUT ({ commit }: { commit: Commit }) : Promise<void> {
        // invalidate User Session
        await fakeLogoutApiCall()

        // reset ui settings
        commit('SET_APPEARANCE', 'light')
        commit('SET_THEME', 'purple')
        commit('SET_USER', null)
    }
}

const mutations = {
    SET_USER (state: { user: User; }, user: User) : void {
        state.user = user
    }
}

export default { state, getters, actions, mutations }
