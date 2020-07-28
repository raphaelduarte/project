import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { LayoutPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { VBScrollspyPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Vue2Filters from 'vue2-filters'


window.$ = window.jQuery = jQuery


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(VueSidebarMenu)
Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
