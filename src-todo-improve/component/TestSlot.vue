<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="checked"/>-->
      <slot name="first"></slot>
    </label>
    <span>
          <!--<span>已完成{{computeSize}} / 全部{{items.length}}</span>-->
      <slot name="second"></slot>
    </span>
    <!--<button class="btn btn-danger" v-show="computeSize" @click="deleteAll">清除已完成任务</button>-->
    <slot name="third"></slot>
  </div>
</template>

<script>
  export default {
    name: 'TestSlot',
    props:{
      items:Array,
      deleteAll:Function,
      selectAll:Function
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
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
