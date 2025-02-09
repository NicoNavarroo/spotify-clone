import './assets/main.css'
import createPersistedState from 'pinia-plugin-persistedstate'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(createPersistedState)
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
