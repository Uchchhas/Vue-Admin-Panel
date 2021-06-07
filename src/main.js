import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'

const feather = require('feather-icons')

createApp(App).use(router).mount('#app')
