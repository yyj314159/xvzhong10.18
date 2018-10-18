// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入iconfont
//import "./icon/iconfont.css"
//引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//引入vuex
import Vuex from 'vuex'
import store from './store/store.js'


Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(iView, {
  transfer: true,
  size: 'large'
});



Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


