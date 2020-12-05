<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <a href="#/button">点我显示button</a>
    <a href="#/buttondetail">按钮详细使用</a>
    <a href="#/link">文字链接</a>
    <a href="#/layout">布局</a>
    <a href="#/container">容器</a>
    <a href="#/container_demo">容器示例</a>

    <br/>
    <br/>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
