<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
  }

  /*滚动条的宽度*/
  .your-table .el-table__body-wrapper::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /*滚动条的滑块*/
  .your-table .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #a1a3a9;
    border-radius: 3px;
  }

  /*如果是整个页面的滚动条风格是一致的，直接改全局的滚动条样式也可以有效果*/
  /*滚动条的宽度*/
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /*滚动条的滑块*/
  ::-webkit-scrollbar-thumb {
    background-color: #a1a3a9;
    border-radius: 3px;
  }
</style>
