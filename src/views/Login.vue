<template>
   <div class="login">
       <h3>Sign In</h3>
       <input v-model="email" type="text" placeholder="Email"><br/>
       <input v-model="password" type="password" placeholder="Password"><br/>
       <button @click="login">Connection</button>
       <p>
           or Sign In with Google
           <button @click="socialLogin" class="social-button">
               <img alt="Google Logo" src="../assets/google-logo256x256.png">
           </button>
       </p>
       <p>You don't have an account ? You can <router-link to="/signup"> create one</router-link>.</p>
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
            login() {
                self = this;
                // this.$router.replace('home');
                firebase.auth().signInWithEmailAndPassword(self.email, self.password).then(
                    (user) => {
                        alert('Well done. You are now connected !')
                        self.$router.replace('home')
                    },
                    (err) => {
                        alert('Oops..'+ err.message)
                    }
                );
            },
            socialLogin() {
                self = this;
                const provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider).then((result) => {
                    self.$router.replace('home')
                }).catch((err) => {
                    alert('Oops..'+ err.message)
                });
            }   
        }
    }
</script>

<style scoped>
.login {
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
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
.social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.2);
    outline: 0;
    border: 0;
}
.social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.1);
}
.social-button img {
    width: 100%;
}
</style>