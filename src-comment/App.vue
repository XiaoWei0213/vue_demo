<template>
  <div id="app">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addcomment="addcomment"/>
      <List :comments="comments" :deletecomment="deletecomment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'

  export default {
    name: 'App',
    data(){
      return{
        comments:[
          {
            name:'x',
            content:'ok'
          },
          {
            name:'y',
            content: 'no problem'
          }
        ]
      }
    },
    methods: {
      //添加评论
      addcomment(comment){
        this.comments.unshift(comment)
      },
      //删除指定评论
      deletecomment(index){
        this.comments.splice(index,1)
      }
    },
    components: {
      Add,
      List
    }
  }
</script>

<style>

</style>

