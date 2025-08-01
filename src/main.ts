import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Use Pinia for state management
app.use(createPinia())

// Use Vue Router for navigation
app.use(router)

// Mount the app
app.mount('#app')
