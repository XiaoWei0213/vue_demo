<template>
  <div>
    <ul>
      <li v-for="(msg) in msgs" :key="msg.id">
        <a href="/xxx">{{msg.title}}</a>
      </li>
    </ul>
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
    }
  }
</script>

<style scoped>

</style>
