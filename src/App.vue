<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <!-- <Content/> -->

    <router-link to="/main">我是Main页面</router-link>
    <router-link to="/content">我是Content页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import Content from './components/Content'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
