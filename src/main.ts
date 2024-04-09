import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import store from './store'
import 'normalize.css'
import './styles/index.scss' 
import router from './router'


import App from './App.vue'
const app  =createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)




app.mount('#app')
