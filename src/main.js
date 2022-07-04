import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueCropper from 'vue-cropper'
import 'vue-cropper/dist/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App).use(router).use(ElementPlus).use(VueCropper).use(VueAxios, axios)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount("#app")
