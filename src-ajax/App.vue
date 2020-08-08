<template>
  <div id="app">
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is<a href="repoUrl">{{repoName}}</a> </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data(){
      return{
        repoUrl: '',
        repoName: ''
      }
    },
    mounted () {
      //发送ajax请求获取数据
      //1、使用vue-resource
      //2、使用axios
      const url = 'https://api.githun.com/search/repositories?q=v&sort=stars'
      axios.get(url).then(reponse => {
        const res = reponse.data
        const mostRepo = res.item[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(error => {
        alert('请求失败')
      })
    }
  }
</script>

<style scoped>

</style>
