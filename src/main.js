import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueCropper from 'vue-cropper'
import 'vue-cropper/dist/index.css'

createApp(App).use(router).use(ElementPlus).use(VueCropper).mount('#app')

