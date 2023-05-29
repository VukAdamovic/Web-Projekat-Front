<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LoginPage/> -->
    <!-- <HomePage/> -->
    <SingleNewsPage/>
    <!-- <NewsPage/> -->
    <!-- <CreateNewsPage/> -->
    <!-- <CategoriesPage/> -->
    <!-- <CreateCategoryPage/> -->
  </div>
</template>

<script>
// import LoginPage from './components/LoginPage.vue'
// import HomePage from './components/HomePage.vue'
import SingleNewsPage from './components/news/SingleNewsPage.vue'
// import NewsPage from './components/news/NewsPage.vue'
// import CreateNewsPage from './components/news/CreateNewsPage.vue'
// import CategoriesPage from './components/category/CategoriesPage.vue';
// import CreateCategoryPage from './components/category/CreateCategoryPage.vue';

export default {
  name: 'App',
  components: {
    // LoginPage,
    // HomePage
    SingleNewsPage
    // NewsPage
    // CreateNewsPage
    // CategoriesPage
    // CreateCategoryPage
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
