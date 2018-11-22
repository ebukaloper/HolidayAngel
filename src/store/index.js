import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import landing from '../app/landing/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		landing,
    },
	strict: debug
})
