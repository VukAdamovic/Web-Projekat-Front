<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LoginPage/> -->
    <!-- <HomePage/> -->
    <!-- <SingleNewsPage/> -->
    <!-- <CategoriesPage/> -->
    <CreateCategoryPage/>
  </div>
</template>

<script>
// import LoginPage from './components/LoginPage.vue'
// import HomePage from './components/HomePage.vue'
// import SingleNewsPage from './components/SingleNewsPage.vue'
// import CategoriesPage from './components/CategoriesPage.vue';
import CreateCategoryPage from './components/CreateCategoryPage.vue';

export default {
  name: 'App',
  components: {
    // LoginPage,
    // HomePage
    // SingleNewsPage
    // CategoriesPage
    CreateCategoryPage
}
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
