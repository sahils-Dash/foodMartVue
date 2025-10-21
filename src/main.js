import { createApp } from 'vue'
import App from './App.vue'
import router from './components/routes'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
