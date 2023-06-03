<template>
    <div id="createNewsPage">
    
  
        <div class="container mt-2">
  
            <div class="container-fluid p-5 row justify-content-center">
  
            <form class="col glass card-form custom-bar text-center">
                <h4>New News</h4>
  
                <div class="mb-3 mt-3">
                    <label for="articleName" class="form-label text-center">News Title</label>
                    <input type="text" class="form-control" id="articleName" v-model="title" placeholder="Jokic the best center ever?">
                </div>
  
                <div class="mb-3">
                    <label for="description" class="form-label">Content</label>
                    <textarea class="form-control custom-height-textarea" id="description" v-model="content" placeholder="Recent years, the emergence of Nikola Jokic has sparked debates among basketball enthusiasts worldwide. Known for his unique playing style and exceptional skills, Jokic has garnered attention and raised the question: Is he the best center ever?"></textarea>
                </div>
  
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <select v-model="selectedCategoryId" class="form-select" id="category">
                        <option :value="null" selected disabled>Select category</option>
                        <option v-for="category in categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
                    </select>
                </div>
  
                <div class="mb-5">
                    <label for="tags" class="form-label">Tags</label>
                    <select multiple class="form-control" id="tags" v-model="selectedTagIds">
                        <option v-for="tag in tagList" :key="tag.id" :value="tag.id">{{ tag.keyWord }}</option>
                    </select>
                    <button class="btn btn-outline-success mt-2" @click="addSelectedTags">Add Selected Tags</button>
                </div>
  
  
                <div v-for="tag in selectedTags" :key="tag.id" class="btn btn-primary btn-sm me-2 mb-4">
                    {{ tag.keyWord }}
                    <button class="btn-close" @click="removeTag(tag)"></button>
                </div>
  
  
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="#rich life" v-model="tagName">
                    <button class="btn btn-outline-success" type="button" @click="createTag">Create Tag</button>
                </div>
  
                <button  type="submit" href='#' class="btn btn-primary mt-4 mb-4" @click="updateNews">Update</button>
  
                <p class="error-message text-danger fw-bold">{{ myError }}</p> <!-- Prikazivanje poruke greške -->
  
            </form>
  
            </div>
  
        </div>
  
    </div>
</template>

<script>
import jwtDecode from 'jwt-decode';

export default {
    name: "UpdateNewsPage",
    props: {
        id: String
    },
    data() {
        return {
            title: '',
            content: '',
            myError: '',
            categoryList: [],
            tagList: [],
            selectedCategoryId: null,
            tagName: '',
            selectedTags: [],
            previousSelectedTags: [],
            selectedTagIds: []
        }
    },
    created() {
        this.fetchAllCategories();
        this.fetchAllTags();
        this.fetchNews();
    },
    methods: {

        fetchNews() {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            };

            this.$axios
                .get(`http://localhost:8081/api/news/${this.id}`, config)
                .then(response => {
                    console.log(response.data);
                    this.title = response.data.title;
                    this.content = response.data.content;
                    this.selectedCategoryId = response.data.categoryId;
                })
                .catch(error => {
                    console.log(error);
                });

            this.$axios
                .get(`http://localhost:8081/api/news_tags/newsId/${this.id}`, config)
                .then(response => {
                    const newsTags = response.data;
                    const tagPromises = newsTags.map(tag => {
                        return this.$axios.get(`http://localhost:8081/api/tags/${tag.tagsId}`, config);
                    });

                    Promise.all(tagPromises)
                        .then(responses => {
                            this.selectedTags = responses.map(response => response.data);
                            this.previousSelectedTags = [...this.selectedTags]; // Kopiranje liste selectedTags u previousSelectedTags

                        })
                        .catch(error => {
                            console.error(error);
                        });
                })
                .catch(error => {
                    console.error(error);
                });
        },

        fetchAllCategories() {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/categories`, config)
                .then(response => {
                    this.categoryList = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchAllTags() {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.$axios.get(`http://localhost:8081/api/tags`, config)
                .then(response => {
                    this.tagList = response.data;
                    console.log(this.tagList);
                })
                .catch(error => {
                    console.error(error);
                });

        },
        createTag() {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                },
            };

            this.tagName = this.tagName.trim();

            if (this.tagName === '') {
                this.myError = 'Tag name is required'
                return;
            }

            if (this.tagName.charAt(0) !== '#') {
                this.tagName = '#' + this.tagName;
            }


            if (this.selectedTags.some(tag => tag.keyWord === this.tagName) || this.tagList.some(tag => tag.keyWord === this.tagName)) {
                this.myError = 'Tag already exists';
            } else {
                const requestBody = {
                    keyWord: this.tagName
                }

                this.$axios.post(`http://localhost:8081/api/tags`, requestBody, config)
                    .then(response => {
                        this.selectedTags.push(response.data);
                        this.tagName = '';
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
        removeTag(tag) {
            const index = this.selectedTags.indexOf(tag);
            if (index !== -1) {
                this.selectedTags.splice(index, 1);
            }
        },
        addSelectedTags(event) {
            event.preventDefault()
            const tagsToAdd = this.tagList.filter(tag => this.selectedTagIds.includes(tag.id) && !this.selectedTags.some(selectedTag => selectedTag.id === tag.id));
            this.selectedTags.push(...tagsToAdd);
        },
        updateNews(event) {
            event.preventDefault();

            if (this.title === '' || this.content === '' || this.selectedCategoryId === null) {
                this.myError = 'Fields are required';
            } else {
                const config = {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`
                    }
                };

                const jwt = localStorage.getItem('jwt');
                const decoded = jwtDecode(jwt);
                const userId = decoded.id;

                const requestBody = {
                    title: this.title,
                    content: this.content,
                    categoryId: this.selectedCategoryId
                };

                // Ažuriranje vesti
                this.$axios.put(`http://localhost:8081/api/news/${userId}`, requestBody, config)
                    .then(() => {
                        // Ažuriranje uspešno
                        const deletePromises = this.previousSelectedTags.map(tag => {
                            // Brisanje prethodnih tagova
                            return this.$axios.delete(`http://localhost:8081/api/news_tags/${this.id}/${tag.id}`, config);
                        });

                        // Čekanje da se završe sve Promise-ovi za brisanje tagova
                        Promise.all(deletePromises)
                            .then(() => {
                                // Dodavanje novih tagova
                                const postPromises = this.selectedTags.map(tag => {
                                    const requestBody = {
                                        newsId: this.id,
                                        tagsId: tag.id
                                    };
                                    return this.$axios.post("http://localhost:8081/api/news_tags", requestBody, config);
                                });

                                // Čekanje da se završe sve Promise-ovi za dodavanje tagova
                                Promise.all(postPromises)
                                    .then(() => {
                                        // Svi tagovi su ažurirani
                                        this.$router.push('/news');
                                    })
                                    .catch(error => {
                                        console.error(error);
                                    });
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    })
                    .catch(() => {
                        // Greška pri ažuriranju
                        this.myError = 'greska';
                    });
            }
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

.card-form {
    padding-top: 55px;
    padding-bottom: 55px;
    padding-left: 40px;
    padding-right: 40px;
    color: #D6D6D6;
    max-width: 500px;
}

.custom-bar {
    max-height: calc(100vh - 200px);
    /* Podesite visinu prema potrebi */
    overflow-y: auto;
}

.custom-height-textarea {
    min-height: 150px;
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