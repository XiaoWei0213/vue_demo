import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}
const mutations = {
  //增加函数
  incre(state){
    state.count ++
  },
  //减少函数
  decre(state){
    state.count --
  }
}
const actions = {
  increment({commit}){
    //提交mutation
    commit('incre')
  },
  decrement({commit}){
    commit('decre')
  },
  incrementIf({commit,state}){
    if(state.count%2===1){
      commit('incre')
    }
  },
  incrementAsync({commit}){
    setTimeout(()=>{
      commit('incre')
    },1000)
  }
}
const getters = {
  EvenOrOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state, //状态对象
  mutations,  //包含多个更新state函数的对象
  actions,  //包含多个对应事件回调函数的对象
  getters  //包含多个getter计算属性函数的对象
})
