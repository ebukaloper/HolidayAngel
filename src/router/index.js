import Vue from 'vue'
import Router from 'vue-router'

// App
import Landing from '../app/landing/index.vue'

// Pages
import Error from '../pages/error/index.vue'


Vue.use(Router)


const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			alias: '/landing',
			name: 'landing',
			component: Landing,
		},
		{
			path: '*',
			name: 'error',
			component: Error,
		}
	]
})


export default router