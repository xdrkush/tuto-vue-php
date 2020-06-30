import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import router from './router/routes';

import store from './store/index';

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
