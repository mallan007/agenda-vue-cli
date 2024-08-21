
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
//import {getDataURL} from './http/index.ts'
//import Contacts from './services/Contacts.ts'
//import './operations/index.ts'

const app = createApp(App)

app.use(router)

app.mount('#app')
