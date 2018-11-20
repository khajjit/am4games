<template>
  <div id="app">
    <div class="content">
      <div class="content-inside">
        <Header />
        <router-view></router-view>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    HelloWorld
  }
}
</script>

<style>
* {
  margin: 0 auto;
}
html, body {
  height: 100%;
}
#app {
  height: 100%;
  width: 1600px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  min-height: 100%;
}
.content-inside {
  padding-bottom: 440px;
}
</style>
