import Vue from 'vue';
import VueFire from 'vuefire';
import App from './app';

Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
