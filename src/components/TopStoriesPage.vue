<template>
  <div id="homePage" >

      <div class="container mt-5">
          <div class="container-fluid glass custom-bar pt-3 ps-5 pe-5 pb-2">

              <div class="row justify-content-center  gap-5 m-5" v-if="newsList.length > 0">

                  <div v-for="news in newsList" :key="news.id"  @click="redirectToSinglePage(news.id)" class="card col-12 col-sm-12 col-md-4 col-lg-3">
                      <div class="card-body pt-3 ps-2 pe-2">
                          <p class="card-title text-center fw-bold fs-5">{{ news.title }}</p>
                          <p class="card-text text-center">{{ news.content.substring(0, 100) }}...</p>
                      </div>
                      <div class="row justify-content-center align-items-center mb-0">
                              <p class="col text-center">
                                  {{ categoryMap[news.id]}}
                              </p>
                              <p class="col text-center">
                                  {{ news.createdAt }}
                              </p>
                          </div>
                  </div>

              </div>
          </div>
      </div>
  
  </div>
</template>

<script>
export default {
  name: "TopStoriesPage",
  data() {
        return {
            newsList: [],
            categoryMap: {}
        };
    },
    created() {
        this.fetchNews();
    },
    methods: {
        fetchNews() {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/news/topStories`, config)
            .then((response) => {

                this.newsList = response.data;
          
                const categoryRequests = this.newsList.map(news => {
                    return this.$axios.get(`http://localhost:8081/api/categories/${news.categoryId}`, config)
                    .then(response => response.data.name)
                    .catch(error => {
                        console.error(error);
                    });
                });

                Promise.all(categoryRequests)
                .then(categoryNames => {
                    categoryNames.forEach((categoryName, index) => {
                        const news = this.newsList[index];
                        if (categoryName) {
                            this.$set(this.categoryMap, news.id, categoryName);
                        }
                    });
                })
                .catch(error => {
                console.error(error);
                });
            })
            .catch((error) => {
                console.error(error);
            });
        },
        redirectToSinglePage(id) {
            this.$router.push({ 
                path: '/singleNewsPage',
                query: { id: id }
            });
        }
    }
}
</script>

<style scoped>
    .glass {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }

    .custom-bar {
        max-height: calc(100vh - 200px); /* Podesite visinu prema potrebi */
        overflow-y: auto;
    }    

    /* Stilizacija scroll bara */
    .custom-bar::-webkit-scrollbar {
        width: 8px; /* Širina scroll bara */
        border-radius: 4px; /* Zaobljenost scroll bara */
    }

    .custom-bar::-webkit-scrollbar-track {
        background-color: transparent; /* Providna pozadina scroll bara */
    }

    .custom-bar::-webkit-scrollbar-thumb {
        border-radius: 4px; /* Zaobljenost thumb-a */
        background-color: rgba(255, 255, 255, 0.18); /* Boja thumb-a */
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