<template>
  <div>
    <p>click {{/*$store.state.count*/ count}} times ,count is {{EvenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIf">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'

  export default {
    name: 'App',
    //优化版
    computed:{
      ...mapState(['count']),
      ...mapActions(['EvenOrOdd'])
    },
    //原始版
    /*computed:{
      EvenOrOdd() {
        return this.$store.getters.EvenOrOdd  //模板不需要写this
      }
    },*/
    //优化版
    methods:{
      ...mapActions(['increment','decrement','incrementIf','incrementAsync'])
    }
    //原始版
    /*methods:{
      increment(){
        //通知vuex去增加
        this.$store.dispatch('increment')
      },
      decrement(){
        //通知vuex去减少
        this.$store.dispatch('decrement')
      },
      incrementIf(){
        this.$store.dispatch('incrementIf')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    }*/
  }
</script>

<style scoped>

</style>

