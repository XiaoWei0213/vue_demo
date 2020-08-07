<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addItem="addItem"/>
        <DoList :items="items" :deleteItem="deleteItem"/>
        <Footer :items="items" :deleteAll="deleteAll" :selectAll="selectAll"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './component/Header'
  import DoList from './component/DoList'
  import Footer from './component/Footer'

  export default {
    name: 'App',
    data() {
      return {
        //从localStorage读取items
        items: JSON.parse(window.localStorage.getItem('list_key') || '[]')
      }
    },
    methods:{
      //添加任务
      addItem(item){
        this.items.unshift(item)
      },
      //删除任务
      deleteItem(index){
        this.items.splice(index,1)
      },
      //删除所有选中
      deleteAll(){
        this.items = this.items.filter(item => !item.complete)
      },
      //全选或全不选
      selectAll(check){
        this.items.forEach(item => item.complete = check)
      }
    },
    watch:{  //深度监视
      items:{
        deep:true,
        handler:function (val) {
          //最新值保存到localStorage
          window.localStorage.setItem('list_key',JSON.stringify(val))
        }
      }
    },
    components:{
      Header,DoList,Footer,
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
