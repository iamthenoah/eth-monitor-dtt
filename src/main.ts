import { createApp } from 'vue'
import { store } from './store'
import global from './mixin/global'
import router from './router'
import App from './App.vue'

createApp(App).mixin(global).use(store).use(router).mount('#app')
