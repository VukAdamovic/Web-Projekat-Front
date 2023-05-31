<template>
    <div id="loginPage">
    
        <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">

            <div class="container-fluid p-5 row justify-content-center" > 
    
                    <form class="glass card-form p-5 col ">

                        <div class="mb-3">

                            <label for="exampleInputEmail1" class="form-label">Email address</label>

                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@example.com" v-model="email">

                        </div>

                        <div class="mb-3">

                            <label for="exampleInputPassword1" class="form-label">Password</label>

                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********" v-model="password">

                        </div>

                        <div class="text-center mb-4">
                            <button type="submit" class="btn btn-primary mt-4" @click="login">Log In</button>
                        </div>

                        <div class="text-center">
                            <p class="error-message text-danger fw-bold">{{ error }}</p> <!-- Prikazivanje poruke greške -->
                        </div>

                    </form>
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            email: '', 
            password: '',
            error: ''   
        }
    },
    methods: {
        login(event) {
            event.preventDefault();
            if (this.email === '' || this.password === '') {
                this.error = 'Fields are required';
            } else {

                const requestBody = {
                    email: this.email,
                    password: this.password
                };

                // Slanje zahteva na zadatu rutu
                this.$axios.post('http://localhost:8081/api/users/login', requestBody)
                .then(response => {
                    const jwt = response.data.jwt;

                    if(jwt){
                        localStorage.setItem('jwt', jwt);
                        history.pushState(null, '', '/home');
                        this.$router.push('/home');                    
                    }

                }) 
                .catch(() => {
                    this.error = 'Invalid credentials';
                });
            }
        }
    }
}
</script>

<style scoped>
.glass {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.card-form{
    padding-top: 55px;
    padding-bottom: 55px;
    padding-left: 40px;
    padding-right: 40px;
    color: #D6D6D6;
    max-width: 500px;
}

</style>