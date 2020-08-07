<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addItem="addItem"/>
        <DoList :items="items" :deleteItem="deleteItem"/>
        <!--<Footer :items="items" :deleteAll="deleteAll" :selectAll="selectAll"/>-->
        <TestSlot>
          <input type="checkbox" v-model="checked" slot="first"/>
          <span slot="second">已完成{{computeSize}} / 全部{{items.length}}</span>
          <button class="btn btn-danger" v-show="computeSize" @click="deleteAll" slot="third">清除已完成任务</button>
        </TestSlot>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './component/Header'
  import DoList from './component/DoList'
  import TestSlot from './component/TestSlot'
  import StorageUtil from './util/StorageUtil'

  export default {
    name: 'App',
    data() {
      return {
        //从localStorage读取items
        items: StorageUtil.readList()
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
          //window.localStorage.setItem('list_key',JSON.stringify(val))
          StorageUtil.saveList(val)
        }
      }
    },
    components:{
      Header,DoList,TestSlot
    },
    computed:{
      computeSize(){
        return this.items.reduce((total,item) => total + (item.complete?1:0),0)
      },
      checked:{  //计算属性的特性
        get(){
          return this.computeSize === this.items.length && this.computeSize > 0
        },
        set(value){  //value是当前checkbox的最新值
          this.selectAll(value)
        }
      }
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
