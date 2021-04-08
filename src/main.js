import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import './assets/js/bootstrap.bundle.min'
import router from './router'
const feather = require('feather-icons')

createApp(App).use(router).mount('#app')
