import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store/index' 
// import VuePictureSwipe from 'vue-picture-swipe';
import HolidayAngelPictureSwipe from './components/HolidayAngelPictureSwipe.vue';
import VueImageLoader from '@kevindesousa/vue-image-loader';

Vue.use(VueImageLoader);
Vue.component('vue-picture-swipe', HolidayAngelPictureSwipe);

Vue.config.productionTip = false

new Vue({
  router,
	store,
  render: h => h(App),
}).$mount('#app')
