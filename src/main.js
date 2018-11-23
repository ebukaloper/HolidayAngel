import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store/index' 
import VuePictureSwipe from 'vue-picture-swipe';

Vue.component('vue-picture-swipe', VuePictureSwipe);

Vue.config.productionTip = false

new Vue({
  router,
	store,
  render: h => h(App),
}).$mount('#app')
