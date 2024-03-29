import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueRouter from 'vue-router';

import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'
import CategoryPage from './components/CategoryPage.vue'
import TopStories from './components/TopStoriesPage.vue'


import SingleNewsPage from './components/news/SingleNewsPage.vue'
import NewsByCategoryPage from './components/news/NewsByCategoryPage.vue'
import NewsByTagsPage from './components/news/NewsByTagsPage.vue'

import CategoriesPage from './components/category/CategoriesPage.vue'
import CreateCategoryPage from './components/category/CreateCategoryPage.vue'
import UpdateCategoryPage from './components/category/UpdateCategoryPage.vue'

import NewsPage from './components/news/NewsPage.vue'
import CreateNewsPage from './components/news/CreateNewsPage.vue'
import UpdateNewsPage from './components/news/UpdateNewsPage.vue'

import UsersPage from './components/user/UsersPage.vue'
import CreateUserPage from './components/user/CreateUserPage.vue'
import UpdateUserPage from './components/user/UpdateUserPage.vue'


Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/category', component: CategoryPage },
  { path: '/topStories', component: TopStories },

  {path: '/singleNewsPage', component: SingleNewsPage, props: route => ({ id: route.query.id })},
  { path: '/newsByCategories', component: NewsByCategoryPage,  props: route => ({ id: route.query.id }) },
  { path: '/newsByTags', component: NewsByTagsPage, props: route => ({ id: route.query.id }) },

  { path: '/categories', component: CategoriesPage },
  { path: '/createCategory', component: CreateCategoryPage },
  { path: '/updateCategory', component: UpdateCategoryPage, props: route => ({ id: route.query.id }) },

  { path: '/news', component: NewsPage },
  { path: '/createNews', component: CreateNewsPage },
  { path: '/updateNews', component: UpdateNewsPage, props: route => ({ id: route.query.id }) },

  { path: '/users', component: UsersPage },
  { path: '/createUser', component: CreateUserPage },
  { path: '/updateUser', component: UpdateUserPage, props: route => ({ id: route.query.id })  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// Provera da li postoji JWT token u local storage-u
const jwt = localStorage.getItem('jwt');
if (jwt) {
  // Ako postoji JWT token, korisnika usmeri na /home
  router.push('/home');
} else {
  // Ako ne postoji JWT token, korisnika usmeri na /login
  router.push('/');
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
