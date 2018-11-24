import Vue from 'vue'
import Router from 'vue-router'

// App
import Landing from '../app/landing/index.vue'

Vue.use(Router)


const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			alias: '/landing',
			name: 'landing',
			component: Landing,
		}
	]
})


export default router