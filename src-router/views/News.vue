<template>
  <div>
    <ul>
      <li v-for="(news,index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data(){
      return{
        newsArr:['news001','news002','news003']
      }
    }
  }
</script>

<style scoped>

</style>
