<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light border-navbar m-0">
      <div class="container-fluid justify-content-center">

        <a class="navbar-brand ps-5  text-navbar">
          <img src="../assets/logo-raf.png" alt="Logo" width="60" height="60" class="d-inline-block">
          RAF News
        </a>

        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end  padding-left-right-125px" id="navbarNav">
          <ul class="navbar-nav" >
            <li class="nav-item text-center m-3 ">
              <a class="nav-link  text-navbar" @click="homePage">Home</a>
            </li>
            <li class="nav-item text-center m-3">
              <a class="nav-link text-navbar" href="#">Top Stories</a>
            </li>
            <li class="nav-item text-center m-3">
              <a class="nav-link text-navbar" @click="categoryPage">Categories</a>
            </li>
            <li class="nav-item text-center m-3">
              <a class="nav-link text-navbar" @click="newsPage">News</a>
            </li>
            <li class="nav-item text-center m-3" v-if = "userType === 1" >
              <a class="nav-link text-navbar" @click="userPage">Users</a>
            </li>
            <li class="nav-item text-center m-3">
              <a class="nav-link text-navbar" @click="logout">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode';

export default {
  name: "MyNavbar",
  computed:{
    userType() {
      const jwt = localStorage.getItem('jwt');
      return jwtDecode(jwt).roleId;
    }
  },
  methods:{
    homePage(){
      if (this.$route.path !== '/home') {
        this.$router.push('/home');
      }
    },
    categoryPage(){
      if (this.$route.path !== '/categories') {
        this.$router.push('/categories');
      }
    },
    newsPage(){
      if (this.$route.path !== '/news') {
        this.$router.push('/news');
      }
    },
    userPage(){
      if (this.$route.path !== '/users') {
        this.$router.push('/users');
      }
    },
    logout() {
            localStorage.removeItem('jwt');
            history.pushState(null, '', '/');
            this.$router.push('/');          
    },
  }
}
</script>

<style scoped>
  .border-navbar {
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);
  }
  .custom-toggler .navbar-toggler-icon {
        filter: invert(1);
    }

    .padding-left-right-125px{
        padding-left: 125px ; 
        padding-right: 125px;
    }

    .text-navbar{
        color: #f7f7f7 !important; 
        font-size: 17px !important; 
        font-weight: 500 !important;
    }

    .custom-active {
        font-weight: 700 !important;
        text-decoration: underline !important;
    }

    .text-color {
    color: #f7f7f7;
  }
</style>