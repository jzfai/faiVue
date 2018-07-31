import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import cart_store from './cart_store';//引入某个store对象

export default new vuex.Store({
  modules: {
    cartStore: cart_store
  }
})
