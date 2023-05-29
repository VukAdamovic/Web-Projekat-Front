<template>
    <div id="homePage" style="height: 100vh;">

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
                        <li class="nav-item text-center m-3">
                            <a class="nav-link  text-navbar" href="#">Home</a>
                        </li>
                        <li class="nav-item text-center m-3">
                            <a class="nav-link text-navbar" href="#">Top Stories</a>
                        </li>
                        <li class="nav-item text-center m-3">
                            <a class="nav-link text-navbar" href="#">Categories</a>
                        </li>
                        <li class="nav-item text-center m-3">
                            <a class="nav-link text-navbar" href="#">Users</a>
                        </li>
                        <li class="nav-item text-center m-3">
                            <a class="nav-link text-navbar" href="#">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  

        <div class="container mt-5">
            <div class="container-fluid glass custom-bar pt-3 ps-5 pe-5 pb-2">

                <div class="row justify-content-center gap-5 mt-4">   <!-- Unutar ovog row-a se dodaju cardovi -->
                    <div class="card col-2">
                        <div class="card-body">
                            <h5 class="card-title">Naslov</h5>
                            <p class="card-text">Limitiran deo teksta</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Kojoj kategoriji pripada</li>
                            <li class="list-group-item">Datum objave</li>
                        </ul>
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
    name: "HomePage"
}
</script>

<style scoped>
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
    .glass {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }

    .border-navbar {
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);
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