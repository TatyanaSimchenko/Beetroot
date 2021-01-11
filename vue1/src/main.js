import Vue from 'vue';
import App from './App.vue';
import './scss/style.scss';
import 'animate.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');