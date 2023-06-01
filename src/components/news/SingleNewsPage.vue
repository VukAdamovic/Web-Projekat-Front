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
    
                        <p>Ime autora</p>
    
                    </div>
    
    
    
                    <div class="col">
    
                        <p>Tagovi</p>
    
                    </div>
    
    
    
                </div>
    
    
    
                <!-- Forma za novi komentar -->
    
                <div class="row justify-content-center mt-4">
    
                    <form class="p-5 col card-form text-center">
    
    
    
                        <div class="mb-3">
    
    
    
                            <label for="exampleInputEmail1" class="form-label text-center">Name</label>
    
    
    
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="John Parker">
    
    
    
                        </div>
    
    
    
                        <div class="mb-3">
    
    
    
                            <label for="exampleInputPassword1" class="form-label">Comment</label>
    
    
    
                            <textarea class="form-control custom-height-textarea" id="exampleInputPassword1" placeholder="Great article! I found the content to be really insightful and well-written. It provided me with a fresh perspective on the topic. I appreciate the effort put into creating such valuable content. Keep up the good work!"></textarea>
    
    
    
                        </div>
    
    
    
                        <button type="submit" class="btn btn-primary mt-4">Submit</button>
    
    
    
                    </form>
    
    
    
                </div>
    
    
    
    
    
                <!-- Svi komentari -->
    
                <h5>All Comments</h5>
    
    
    
                <div class="row justify-content-center gap-4 mt-5">
    
    
    
                    <div class="col-12 custom-border p-4">
    
                        <h6>Autor Komentara</h6>
    
    
    
                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Scelerisque eu ultrices vitae auctor eu augue. Et tortor
    
                            consequat id porta nibh. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Fusce id velit ut tortor pretium. Sed viverra ipsum nunc aliquet. </p>
    
    
    
                        <p class="text-end mt-3">Datum kreiranja</p>
    
                    </div>
    
    
    
                    <nav class="mt-2" aria-label="Page navigation example">
    
                        <ul class="pagination justify-content-center glass-pagination">
    
                            <li class="page-item">
    
                                <a class="page-link" href="#" aria-label="Previous">
    
                                <span aria-hidden="true">&laquo;</span>
    
                            </a>
    
                            </li>
    
                            <li class="page-item">
    
                                <a class="page-link" href="#" aria-label="Next">
    
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
    data(){
        return {
            title:'',
            content:'',
            createdAt:'',
            categoryId:'',
            userId:''
        }
    },
    created(){
        this.fetchSingleNews();
    },
    methods:{
        fetchSingleNews(){
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/news/${this.id}`, config)
            .then(response =>{

                this.title = response.data.title;
                this.content = response.data.content;
                this.createdAt = response.data.createdAt;
                this.categoryId = response.data.categoryId;
                this.userId = response.data.userId;

            })
            .catch((error) => {
                console.error(error);
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