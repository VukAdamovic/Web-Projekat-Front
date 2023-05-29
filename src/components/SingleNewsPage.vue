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
    
    
        <div class="container mt-5">
    
            <div class="container-fluid glass custom-bar p-5 text-color">
    
    
    
                <h4 class="text-center">Naslov</h4>
    
    
    
                <p class="mt-4">
    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Scelerisque eu ultrices vitae auctor eu augue. Et tortor consequat id porta
    
                    nibh. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Fusce id velit ut tortor pretium. Sed viverra ipsum nunc aliquet. Et tortor at risus viverra adipiscing at in tellus. Massa ultricies mi quis hendrerit dolor
    
                    magna eget est lorem. Enim diam vulputate ut pharetra. Est ante in nibh mauris cursus mattis molestie a iaculis. Molestie ac feugiat sed lectus. Leo urna molestie at elementum. In nibh mauris cursus mattis molestie a. Viverra aliquet eget
    
                    sit amet tellus cras. Odio ut enim blandit volutpat maecenas volutpat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Magna ac placerat vestibulum lectus mauris ultrices eros in. Eget nulla facilisi
    
                    etiam dignissim diam quis. Et tortor consequat id porta nibh venenatis cras sed felis. Ornare lectus sit amet est placerat in egestas erat imperdiet. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Sit amet aliquam id
    
                    diam. Sagittis vitae et leo duis ut. Eros in cursus turpis massa tincidunt dui. A scelerisque purus semper eget duis at tellus.
    
                </p>
    
    
    
                <div class="row justify-content-center align-items-center text-center mt-5">
    
                    <div class="col">
    
                        <p>Datum kreiranja</p>
    
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
        msg: String
    }
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

.border-navbar {
    border-bottom: 2px solid rgba(255, 255, 255, 0.18);
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