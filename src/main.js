import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './Todo2.vue'
const app=createApp(App)
app.mount('#app')
app.use(ElementPlus)
