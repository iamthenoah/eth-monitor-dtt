import { defineComponent } from 'vue'
import { ThemeColor, ThemeMode } from '@/store/modules/ui'
import { store } from '@/store'
import { User } from '@/apis/interfaces'

export default defineComponent({
    computed: {
        isAuthenticated: function () : boolean { return store.getters.isAuthenticated },
        isMenuOpened: function () : boolean { return !store.getters.isMenuOpened },
        appThemeColor: function () : ThemeColor { return store.getters.AppThemeColor },
        appThemeMode: function () : ThemeMode { return store.getters.AppThemeMode },
        User: function () : User { return store.getters.User }
    },
    methods: {
        toggleSideMenu: function (opened = store.getters.isMenuOpened) : void {
            const sideNav = document.getElementById('side-navigation')

            if (sideNav) {
                sideNav.classList.add(opened ? 'opened' : 'closed')
                sideNav.classList.remove(!opened ? 'opened' : 'closed')
            }

            this.toggleWindowShadow(opened)
            this.toggleLogoContainerFold(opened)
            store.dispatch('TOGGLE_MENU_OPENED', !opened)
        },
        toggleWindowShadow: function (show = store.getters.isMenuOpened) : void {
            const shadow = document.getElementById('shadow')

            if (shadow) {
                shadow.style.opacity = show ? '0.5' : '0'

                if (!show) {
                    setTimeout(() => {
                        shadow.style.zIndex = '-10'
                    }, 200)
                } else {
                    shadow.style.zIndex = '9'
                }
            }
        },
        toggleLogoContainerFold: function (extended = store.getters.isMenuOpened) : void {
            const logo = document.getElementById('logo-container')
            const image = document.getElementById('logo-image')
            const text = document.getElementById('logo-text')

            if (logo && image && text) {
                if (extended === store.getters.isMenuOpened) {
                    logo.classList.add('fade-out-in')

                    setTimeout(() => {
                        image.style.display = extended ? 'none' : 'block'
                        text.style.display = extended ? 'block' : 'none'
                    }, 150)

                    setTimeout(() => {
                        logo.classList.remove('fade-out-in')
                    }, 300)
                }
            }
        }
    }
})
