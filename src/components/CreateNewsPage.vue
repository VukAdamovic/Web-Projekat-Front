<template>
    <div id="createNewsPage" style="height: 100vh;">
    
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

                    <ul class="navbar-nav">

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

                            <a class="nav-link text-navbar" href="#">News</a>

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

        <div class="container mt-2">

            <div class="container-fluid p-5 row justify-content-center">

            <form class="col glass card-form custom-bar text-center">
                <h4>New News</h4>

                <div class="mb-3 mt-3">
                    <label for="articleName" class="form-label text-center">News Title</label>
                    <input type="text" class="form-control" id="articleName" placeholder="Jokic the best center ever?">
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Content</label>
                    <textarea class="form-control custom-height-textarea" id="description" placeholder="Recent years, the emergence of Nikola Jokic has sparked debates among basketball enthusiasts worldwide. Known for his unique playing style and exceptional skills, Jokic has garnered attention and raised the question: Is he the best center ever?"></textarea>
                </div>

                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <select class="form-select" id="category">
                        <option selected disabled>Select category</option>
                        <option value="food">Food</option>
                        <option value="travel">Travel</option>
                        <option value="technology">Technology</option>
                        <!-- Dodajte preostale opcije kategorija -->
                    </select>
                </div>

                <div class="mb-5">
                    <label for="tags" class="form-label">Tags</label>
                    <select multiple class="form-control" id="tags">
                        <option value="1">#food</option>
                        <option value="2">#travel</option>
                        <option value="3">#technology</option>
                        <!-- Dodajte preostale opcije tagova -->
                    </select>
                </div>


                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="#rich life">
                    <button class="btn btn-outline-success" type="button">Create Tag</button>
                </div>


                <button type="submit" class="btn btn-primary mt-4">Create</button>
            </form>

            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: "CreateNewsPage"
}
</script>

<style scoped>
.custom-toggler .navbar-toggler-icon {
    filter: invert(1);
}

.padding-left-right-125px {
    padding-left: 125px;
    padding-right: 125px;
}

.text-navbar {
    color: #f7f7f7 !important;
    font-size: 17px !important;
    font-weight: 500 !important;
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

.card-form {
    padding-top: 55px;
    padding-bottom: 55px;
    padding-left: 40px;
    padding-right: 40px;
    color: #D6D6D6;
    max-width: 500px;
}

.border-navbar {
    border-bottom: 2px solid rgba(255, 255, 255, 0.18);
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