<template>
    <div id="categoriesPage" style="height: 100vh;">

        <div class="container mt-5">

            <div class="container-fluid glass custom-bar pt-2 ps-5 pe-5 pb-2 text-color">

                <nav class="nav justify-content-end">

                    <a class="nav-link" aria-current="page" href="#">Create User</a>

                </nav>


                <div class="row justify-content-center gap-5 mt-2">
    
                    <div class="card bg-transparent col-4 custom-border text-center">
    
                        <div class="card-body">
    
                            <h5 class="card-title">Ime i Prezime</h5>
    
                            <p class="card-text mt-3">email</p>

                            <p class="card-text mt-3">Tip</p>

                            <button type="button" class="btn btn-outline-success  me-3">Status</button>

                            <button type="button" class="btn btn-outline-primary me-3">Update</button>
    
                            <button type="button" class="btn btn-outline-danger">Delete</button>
    
                        </div>
    
                    </div>
                        
                </div>


                <nav class="mt-5" aria-label="Page navigation example">
  
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
</template>

<script>
export default {
    name: "UsersPage"
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