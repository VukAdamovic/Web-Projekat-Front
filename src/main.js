import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueRouter from 'vue-router';

import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'
import SingleNewsPage from './components/news/SingleNewsPage.vue'
// import NewsPage from './components/news/NewsPage.vue'
// import CreateNewsPage from './components/news/CreateNewsPage.vue'
// import CategoriesPage from './components/category/CategoriesPage.vue'
// import CreateCategoryPage from './components/category/CreateCategoryPage.vue'
// import UsersPage from './components/user/UsersPage.vue'
// import CreateUserPage from './components/user/CreateUserPage.vue'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
  {path: '/singleNewsPage', component: SingleNewsPage, props: route => ({ id: route.query.id })}
  // other routes...
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
