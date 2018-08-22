// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import VuePikaday from '@enrian/vue-pikaday';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';
import '@enrian/vue-pikaday/dist/vue-pikaday.min.css';
import 'vue-material/dist/vue-material.min.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VuePikaday);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
