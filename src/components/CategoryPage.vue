<template>
  <div id="categoriesPage">    
  
      <div class="container mt-5">
  
          <div class="container-fluid glass custom-bar pt-2 ps-5 pe-5 pb-2 text-color">
  
  
  
              <nav class="nav justify-content-end">
  
                  <a class="nav-link" aria-current="page" @click="createCategoryPage">Create Category</a>
  
              </nav>
  
  
  
              <div class="row justify-content-center gap-5 mt-2" v-if = "categoryList.length > 0">
  
                  <div v-for="category in categoryList" :key="category.id"  class="card bg-transparent col-5 custom-border text-center">
  
                      <div class="card-body">
  
                          <h5 class="card-title" @click = "filterNews(category.id)">{{ category.name }}</h5>
  
                          <p class="card-text mt-3">{{ category.description }}</p>
  
                      </div>
  
                  </div>
  
              </div>
  
              <nav class="mt-5" aria-label="Page navigation example">
                  <ul class="pagination justify-content-center glass-pagination">
                      <li class="page-item" :class="{ disabled: currentPage === 1 }">
                          <a class="page-link"  aria-label="Previous" @click="decreasePage">
                              <span aria-hidden="true">&laquo;</span>
                          </a>
                      </li>

                      <li class="page-item" :class="{ disabled: !categoryList || categoryList.length < 10 }">
                          <a class="page-link" aria-label="Next" @click="increasePage">
                              <span aria-hidden="true">&raquo;</span>
                          </a>
                      </li>
                  </ul>
              </nav>
  
  
  
          </div>
  
      </div>
  
  </div>
</template>

<script>
export default {
  name: "CategoryPage",
    data(){
        return {
            categoryList: [],
            currentPage: 1,
        }
    },
    created(){
        this.fetchCategories(this.currentPage);
    },
    methods: {
        fetchCategories(page){
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/categories/page/${page}`, config)
            .then(response => {
                if(response.data.length === 0 && this.currentPage > 1){
                    this.currentPage--;
                    this.fetchCategories(this.currentPage);
                } else {
                    this.categoryList = response.data;
                }
            })
            .catch(error => {console.error(error);});
        },
        decreasePage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.fetchCategories(this.currentPage);
            }
        },
        increasePage() {
            this.currentPage++;
            this.fetchCategories(this.currentPage);
        },
        createCategoryPage() {
            this.$router.push('/createCategory');
        },
        filterNews(id){
            this.$router.push({ 
                path: '/newsByCategories',
                query: { id: id }
            }); 
        }
    }
}
</script>

<style scoped>

.custom-border {
    border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
}

.text-color {
    color: #f7f7f7;
}

.glass {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.custom-bar {
    max-height: calc(100vh - 200px);
    /* Podesite visinu prema potrebi */
    overflow-y: auto;
}

/* Stilizacija scroll bara */

.custom-bar::-webkit-scrollbar {
    width: 8px;
    /* Širina scroll bara */
    border-radius: 4px;
    /* Zaobljenost scroll bara */
}

.custom-bar::-webkit-scrollbar-track {
    background-color: transparent;
    /* Providna pozadina scroll bara */
}

.custom-bar::-webkit-scrollbar-thumb {
    border-radius: 4px;
    /* Zaobljenost thumb-a */
    background-color: rgba(255, 255, 255, 0.18);
    /* Boja thumb-a */
}

/* Stilizacija paginacije */

.pagination.glass-pagination .page-link {
    background-color: transparent;
    color: #f7f7f7;
    border: none;
    box-shadow: none;
}

.pagination.glass-pagination .page-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
}

.pagination.glass-pagination .page-item.active .page-link {
    background-color: #f7f7f7;
    color: #000;
    border-radius: 5px;
}
</style>
