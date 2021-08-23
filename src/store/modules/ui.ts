import { Commit } from 'vuex'

export type ThemeMode = 'light' | 'dark' | 'dim';
export type ThemeColor = 'blue' | 'red' | 'green' | 'orange' | 'purple' | 'salmon';

export interface UiStoreState {
    menuOpened: boolean;
    appearanceMode: ThemeMode;
    themeColor: ThemeColor;
}

const state: UiStoreState = {
    menuOpened: false,
    appearanceMode: 'light',
    themeColor: 'purple'
}

const getters = {
    isMenuOpened: (state: { menuOpened: boolean; }) : boolean => state.menuOpened,
    AppThemeMode: (state: { appearanceMode: ThemeMode; }) : ThemeMode => state.appearanceMode,
    AppThemeColor: (state: { themeColor: ThemeColor; }) : ThemeColor => state.themeColor
}

const actions = {
    TOGGLE_MENU_OPENED ({ commit }: { commit: Commit }, opened: boolean) : void {
        commit('SET_MENU_STATE', opened)
    },

    CHANGE_APP_MODE ({ commit }: { commit: Commit }, mode: ThemeMode) : void {
        commit('SET_APPEARANCE', mode)
    },

    CHANGE_APP_THEME ({ commit }: { commit: Commit }, color: ThemeColor) : void {
        commit('SET_THEME', color)
    }
}

const mutations = {
    SET_MENU_STATE (state: { menuOpened: boolean; }, val: boolean) : void {
        state.menuOpened = val
    },

    SET_APPEARANCE (state: { appearanceMode: ThemeMode; }, val: ThemeMode) : void {
        state.appearanceMode = val
    },

    SET_THEME (state: { themeColor: ThemeColor; }, val: ThemeColor) : void {
        state.themeColor = val
    }
}

export default { state, getters, actions, mutations }
