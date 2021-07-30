import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

import untils from './until/until.js'

const app=createApp(App)
app.use(ElementPlus)    
app.use(router)
app.config.globalProperties.untils = untils
app.mount('#app')
