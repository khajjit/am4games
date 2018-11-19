<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!-- <Footer /> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style>
body {
  margin: 0 auto;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
