<template>
    <div id="newsPage">

        <div class="container mt-5">

            <div class="container-fluid glass custom-bar pt-2 ps-5 pe-5 pb-2 text-color">


                <nav class="nav justify-content-end">

                    <a class="nav-link" aria-current="page" @click="createNewsPage">Create News</a>

                </nav>


                <div class="row justify-content-center gap-5 mt-2">  <!-- Unutar ovog row-a se dodaju cardovi -->

                    <div v-for="news in newsList" :key="news.id" class="card bg-transparent col-4 custom-border text-center">

                        <div class="card-body">

                            <h5 class="card-title" @click="singleNewsPage(news.id)">{{ news.title }}</h5>

                            <p class="card-text mt-3">{{ authorsMap[news.id] }}</p>

                            <p class="card-text mt-3 mb-4">{{ news.createdAt }}</p>

                            <a class="card-link" @click="updateNewsPage(news.id)">Update</a>

                            <a class="card-link" @click="deleteNews(news.id)">Delete</a>

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

                        <li class="page-item" :class="{ disabled: !newsList || newsList.length < 10 }">
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
    name: "NewsPage",
    data() {
        return {
            newsList: [],
            currentPage: 1,
            authorsMap:{}
        }
    },
    created() {
        this.fetchNews(this.currentPage);
    },
    methods: {
        fetchNews(page) {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/news/page/${page}`, config)
            .then(response => {
                if(response.data.length === 0 && this.currentPage > 1){
                    this.currentPage--;
                    this.fetchNews(this.currentPage);
                } else {
                    this.newsList = response.data;
                }
                
                const userRequests = this.newsList.map(news => {
                    return this.$axios.get(`http://localhost:8081/api/users/getUser/${news.userId}`, config)
                    .then(response => response.data.firstName + ' ' + response.data.lastName)
                    .catch(error => {
                        console.error(error);
                    });
                });

                Promise.all(userRequests)
                .then(usersNames => {
                    usersNames.forEach((userName, index) => {
                        const news = this.newsList[index];
                        if (userName) {
                            this.$set(this.authorsMap, news.id, userName);
                        }
                    });
                })
                .catch(error => {
                    console.error(error);
                });
            })
            .catch(error => {console.error(error);});
        },
        decreasePage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.fetchNews(this.currentPage);
            }
        },
        increasePage(){
            this.currentPage++;
            this.fetchNews(this.currentPage);
        },
        createNewsPage(){
            this.$router.push('/createNews');
        },
        updateNewsPage(id){
            this.$router.push({ 
                path: '/updateNews',
                query: { id: id }
            }); 
        },
        deleteNews(id){
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.delete(`http://localhost:8081/api/news/${id}`, config)
            .then(() => {
                this.fetchNews(this.currentPage);
            })
            .catch(error =>{console.log(error);})
        },
        singleNewsPage(id) {
            // const url = `${window.location.protocol}//${window.location.host}/singleNewsPage?id=' + ${id}}`;
            // window.open(url, '_blank');
            this.$router.push({ 
                path: '/singleNewsPage',
                query: { id: id }
            });
        }
    }
}
</script>

<style scoped>
.text-color {
    color: #f7f7f7;
}

.custom-border {
    border: 1.5px solid rgba(255, 255, 255, 0.18) !important;
}

.card-max-width {
    max-width: 500px;
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