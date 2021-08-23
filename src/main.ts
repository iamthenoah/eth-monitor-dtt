import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import global from './mixin/global'

createApp(App).mixin(global).use(store).use(router).mount('#app')
