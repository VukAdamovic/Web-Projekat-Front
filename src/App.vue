<template>
  <div id="app">
    <MyNavbar v-if="showNavbar"/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue'

export default {
  name: 'App',
  components: {
    MyNavbar
  },
  computed: {
    showNavbar() {
      return this.$route.path !== '/';
    },
  }
}
</script>

<style>
  #app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  height: 100vh;
  }  
</style>
