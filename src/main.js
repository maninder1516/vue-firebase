import firebase from 'firebase';
import Vue from "vue";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let app = '';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB0rSrxKlolrHRHqFefwmMtTv_pmrkPhx0",
  authDomain: "vue-firebase-tutorial-bf919.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-bf919.firebaseio.com",
  projectId: "vue-firebase-tutorial-bf919",
  storageBucket: "vue-firebase-tutorial-bf919.appspot.com",
  messagingSenderId: "710466499632"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");