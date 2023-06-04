<template>
    <div id="homePage">
    
        <div class="container mt-5">
    
            <div class="container-fluid glass custom-bar p-5 text-color">
    
                <h4 class="text-center">{{title}}</h4>
    
                <p class="mt-4">
                        {{ content }}
                </p>
    
                <div class="row justify-content-center align-items-center text-center mt-5">
    
                    <div class="col">
    
                        <p>{{ createdAt }}</p>
    
                    </div>
    
                    <div class="col">
    
                        <p>{{ author }}</p>
    
                    </div>
    
                    <div class="col text-start">
    
                        <div>
                            <button v-for="tag in tagsList" :key="tag.id" class="btn btn-outline-primary m-1" @click="filterNewsByTags(tag.id)">{{ tag.keyWord }}</button>
                        </div>
    
                    </div>
    
                </div>
    
                <!-- Forma za novi komentar -->
    
                <div class="row justify-content-center mt-4">
    
                    <form class="p-5 col card-form text-center">
    
                        <div class="mb-3">
    
                            <label for="exampleInputEmail1" class="form-label text-center">Name</label>
    
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="John Parker" v-model="commentator">
    
                        </div>
    
                        <div class="mb-3">
    
                            <label for="exampleInputPassword1" class="form-label">Comment</label>
    
                            <textarea class="form-control custom-height-textarea" id="exampleInputPassword1"  v-model="comment" placeholder="Great article! I found the content to be really insightful and well-written. It provided me with a fresh perspective on the topic. I appreciate the effort put into creating such valuable content. Keep up the good work!"></textarea>

                        </div>
    
                        <button type="submit" class="btn btn-primary mt-4 mb-4" @click="createComment">Submit</button>
    
                        <p class="error-message text-danger fw-bold">{{ myError }}</p> <!-- Prikazivanje poruke greške -->

                    </form>
    
                </div>

                <!-- Svi komentari -->
    
                <h5>All Comments</h5>
    
                <div class="row justify-content-center gap-4 mt-5">
    
                    <div v-for="comment in commentsList" :key="comment.id" class="col-12 custom-border p-4">
    
                        <h6>{{ comment.name }}</h6>
    
                        <p class="mt-3"> {{ comment.content }}</p>
    
                        <p class="text-end mt-3">{{ comment.createdAt }}</p>
    
                    </div>
    
                    <nav class="mt-5" aria-label="Page navigation example">
                        <ul class="pagination justify-content-center glass-pagination">
                            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                <a class="page-link"  aria-label="Previous" @click="decreasePage">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>

                            <li class="page-item" :class="{ disabled: !commentsList || commentsList.length < 10 }">
                                <a class="page-link" aria-label="Next" @click="increasePage">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
export default {
    name: "SingleNewsPage",
    props: {
        id: String
    },
    data() {
        return {
            title: '',
            content: '',
            createdAt: '',
            categoryId: '',
            userId: '',
            author:'',
            commentsList:[],
            currentPage: 1,
            commentator:'',
            comment:'',
            tagsList:[],
            myError: ''
        }
    },
    created() {
        this.fetchSingleNews();
        this.fetchTags();
    },
    methods: {
        fetchSingleNews() {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/news/${this.id}`, config)
            .then(newsResponse => {
                this.title = newsResponse.data.title;
                this.content = newsResponse.data.content;
                this.createdAt = newsResponse.data.createdAt;
                this.categoryId = newsResponse.data.categoryId;
                this.userId = newsResponse.data.userId;

                if (this.userId) {
                    this.$axios.get(`http://localhost:8081/api/users/getUser/${this.userId}`, config)
                        .then(authorResponse => {
                            this.author = authorResponse.data.firstName + ' ' + authorResponse.data.lastName;
                            this.fetchComments(this.currentPage);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            })
            .catch(error => {
                console.error(error);
            });
        },
        fetchComments(page) {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/comments/${this.id}/page/${page}`, config)
            .then(response => {
                if(response.data.length === 0 && this.currentPage > 1){
                    this.currentPage--;
                    this.fetchComments(this.currentPage);
                } else {
                    this.commentsList = response.data;
                }
            })
            .catch(error =>{
                console.log(error);
            })
        },
        fetchTags() {
            const config = {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            };

            this.$axios.get(`http://localhost:8081/api/news_tags/newsId/${this.id}`, config)
            .then(response => {
                if (response.data.length > 0) {
                    const promises = response.data.map(news_tags => {
                        return this.$axios.get( `http://localhost:8081/api/tags/${news_tags.tagsId}`, config);
                    });

                    Promise.all(promises)
                    .then(responses => {
                        this.tagsList = responses.map(response => response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            })
            .catch(error => {
            console.log(error);
            });
        },
        decreasePage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.fetchComments(this.currentPage);
            }
        },
        increasePage(){
            this.currentPage++;
            this.fetchComments(this.currentPage);
        },
        createComment(event){
            event.preventDefault();
            if(this.commentator === '' || this.comment === ''){
                this.myError = 'Fields are required';
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            };

            const requestBody = {
                name: this.commentator,
                content: this.comment,
                newsId: this.id
            };

            this.$axios.post(`http://localhost:8081/api/comments`,requestBody, config)
            .then(() => {
                this.myEror = '';
                this.fetchComments(this.currentPage);
            })
            .catch(error => {
                console.log(error);
            });

        },
        filterNewsByTags(id){
            this.$router.push({ 
                path: '/newsByTags',
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

/* Stilizacija forma komentara */

.card-form {
    padding-top: 55px;
    padding-bottom: 55px;
    padding-left: 40px;
    padding-right: 40px;
    color: #D6D6D6;
    max-width: 500px;
}

.custom-height-textarea {
    min-height: 150px;
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

.custom-border {
    border: 1.5px solid rgba(255, 255, 255, 0.18);
}
</style>