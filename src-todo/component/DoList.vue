<template>
  <ul class="todo-main">
    <Work v-for="(item,index) in items" :key="index" :item="item" :index="index" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
  import Work from './Work'
  export default {
    name: 'DoList',
    props:{
      items:Array,
      deleteItem:Function
    },
    components:{
      Work
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
