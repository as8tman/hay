import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false

import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import commonJs from '@/assets/js/common.js';
// Vue.use(commonJs);

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
