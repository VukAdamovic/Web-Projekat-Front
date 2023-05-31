<template>
    <div id="createCategoryPage" style="height: 100vh;">
        
        <div class="container mt-2">
    
            <div class="container-fluid p-5 row justify-content-center">
    
                <form class="p-5 col glass card-form text-center">
    
                    <h4>New Category</h4>
    
                    <div class="mb-3 mt-3">
    
                        <label for="exampleInputEmail1" class="form-label text-center">Category Name</label>
    
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sport">
    
                    </div>
    
                    <div class="mb-3">
    
                        <label for="exampleInputPassword1" class="form-label">Description</label>
    
                        <textarea class="form-control custom-height-textarea" id="exampleInputPassword1" placeholder="Stay updated with the latest sports news. Be in the know about thrilling match moments and exclusive athlete interviews. Stay connected to the world of sports."></textarea>
    
                    </div>
    
                    <button type="submit" class="btn btn-primary mt-4">Create</button>
    
                </form>
    
            </div>
    
        </div>
    
    </div>
</template>


<script>
export default {
    name: "CreateCategoryPage"
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