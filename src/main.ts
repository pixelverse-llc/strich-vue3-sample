import './assets/main.css'
import { StrichSDK } from "@pixelverse/strichjs-sdk";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

const licenseKey = '<your license key>';
StrichSDK.initialize(licenseKey);
