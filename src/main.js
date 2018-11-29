// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/stroeModules'
//引入Vuex
import vx from 'vuex'
//引入resource模块
import vr from 'vue-resource'
Vue.use(vr);

Vue.use(vx);
//实例化Vuex
//注意Store开头要大写
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animated)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  template: '<App/>',
  components: { App }
})
