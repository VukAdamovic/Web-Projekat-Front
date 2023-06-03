<template>
    <div id="createUserPage">

        <div class="container mt-2">

            <div class="container-fluid p-5 row justify-content-center">

                <form class="p-5 col glass card-form text-center custom-bar">

                    <h4>New User</h4>

                    <div class="input-group mt-4 mb-3">
                    <input type="text" aria-label="First name" class="form-control" placeholder="First Name" v-model="firstName">
                    <input type="text" aria-label="Last name" class="form-control" placeholder="Last Name" v-model="lastName">
                    </div>

                    <div class="mb-3">

                        <label for="exampleInputEmail1" class="form-label text-center">Email</label>

                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@example.com"  v-model="email">

                    </div>

                    <div class="mb-3">

                        <label for="exampleInputPassword1" class="form-label">Role Type</label>
                        <select v-model="selectedRoleId" class="form-select" id="category">
                            <option :value="null" selected disabled>Select role type</option>
                            <option :value="1">Admin</option>
                            <option :value="2">Content Creator</option>
                        </select>

                    </div>

                    <div class="mb-3">

                    <label for="exampleInputPassword1" class="form-label">Password</label>

                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********" v-model="password">

                    </div>

                    <div class="mb-3">

                    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>

                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="********" v-model="confirmationPassword">

                    </div>

                    <button type="submit" class="btn btn-primary mt-4 mb-4" @click = "createUser">Create</button>

                    <p class="error-message text-danger fw-bold">{{ myError }}</p> <!-- Prikazivanje poruke greške -->

                </form>

            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: "CreateUserPage",
  data () {
    return {
        firstName:'',
        lastName:'',
        email:'',
        selectedRoleId: null,
        password:'',
        confirmationPassword:'',
        myError:''
    }
  },
  methods: {
    createUser(event){
        event.preventDefault();
        if(this.firstName ==='' || this.lastName === '' || this.email === '' || this.selectedRoleId === null || this.password === '' || this.confirmationPassword === ''){
            this.myError = 'Fields are required';
            return;
        }

        if(this.password != this.confirmationPassword){
            this.myError = 'Password must be matches with confirmation password';
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        };

        const requestBody = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            roleId : this.selectedRoleId,
            hashedPassword: this.password,
            confirmPassword : this.confirmationPassword
        };

        this.$axios.post('http://localhost:8081/api/users', requestBody, config)
        .then(() => {
            this.$router.push('/users')
        })
        .catch(() => {
            this.myError = 'User with that email already exists'
        })
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