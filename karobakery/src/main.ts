import { createApp } from 'vue'
import App from './Home.vue'
import router from './router'
import './assets/tailwind.css'

createApp(App).use(router).mount('#app')
