import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/index.js';

// import commonJs from '@/assets/js/common.js';
// Vue.use(commonJs);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
