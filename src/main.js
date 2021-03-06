import Vue from 'vue'
import App from './App-origin'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store    //所有组件对象都多了一个属性$store
})
