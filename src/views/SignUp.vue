<template>
   <div class="sign-up">
       <h3>Let's create an account</h3>
       <input v-model="email" type="text" placeholder="Email"><br/>
       <input v-model="password" type="password" placeholder="Password"><br/>
       <button @click="signUp">Sign Up</button>
       <span>or go back to <router-link to="/login">Login</router-link>.</span>
   </div> 
</template>

<script>
    import firebase from "firebase";

    export default {
        name : 'Login',
        data() {
            return {
                email:'',
                password:''
            };
        },
        methods: {
            signUp() {
                self = this;
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        alert('Your account has been created !')
                        self.$router.replace("home")
                    },
                    (err) => {
                        alert('Oops...'+ err.message)
                    }
                );
            }
        }
    }
</script>

<style scoped>
.sign-up {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>