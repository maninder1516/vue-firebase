import firebase from 'firebase';
import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import env from '@/../env.json'

Vue.config.productionTip = false;

let app = '';

// Initialize Firebase
const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId
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