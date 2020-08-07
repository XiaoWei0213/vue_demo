/*
使用localStorage存储数据的工具模块
1、函数
2、对象
*/
const LIST_KEY = 'list_key'
export default {
  saveList(todos){
    //JSON.parse(window.localStorage.getItem('list_key') || '[]')
    window.localStorage.setItem(LIST_KEY,JSON.stringify(todos))
  },
  readList(){
    return JSON.parse(window.localStorage.getItem(LIST_KEY) || '[]')
  }
}


