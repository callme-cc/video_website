import Vue from 'vue'
import layout from "./components/layout";
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/global.css'
import Video from "video.js";
import "video.js/dist/video-js.min.css"
Vue.prototype.$video = Video

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(layout)
}).$mount('#app')
