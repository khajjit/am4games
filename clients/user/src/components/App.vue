<template>
  <div id="app">
    <div class="content">
      <div class="content-inside">
        <Header />
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './_shared/Header'
import Footer from './_shared/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0 auto;
  font-family: "Open Sans";
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
