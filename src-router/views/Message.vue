<template>
  <div>
    <ul>
      <li v-for="msg in msgs" :key="msg.id">
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
        <button @click="pushShow(msg.id)">push查看</button>
        <button @click="replaceShow(msg.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data(){
      return{
        msgs:[]
      }
    },
    mounted () {
      //模拟ajax请求获取数据
      setTimeout(()=>{
        const messages = [
          {
            id: 1,
            title: 'msg001'
          },
          {
            id: 2,
            title: 'msg002'
          },
          {
            id: 3,
            title: 'msg003'
          }
        ]
        this.msgs = messages
      },1000)
    },
    methods:{
      //编程式导航
      pushShow(id){
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style scoped>

</style>
