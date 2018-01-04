// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Vuex
import vx from 'vuex'
//引入resource模块
import vr from 'vue-resource'
Vue.use(vr);

Vue.use(vx);
//实例化Vuex
//注意Store开头要大写


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
