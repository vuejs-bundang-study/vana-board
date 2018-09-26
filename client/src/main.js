// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'Vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App'
import store from './store/index'
import router from './router/index'
import axios from 'axios'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: h => h(App)
})
