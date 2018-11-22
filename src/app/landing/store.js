// Landings Vuex Module

const getDefaultState = () => ({
    modals: [ {addModal: false},  {viewModal: false}, {searchDropdown: false}],
    info: true,
    landing: []
})

const state = getDefaultState();

const mutations = {
    reset_state (state) {
        Object.assign(state, getDefaultState())
    },
    set_modals (state, payload) {
        state.modals[0].addModal = payload
    },
    set_info (state, payload) {
        state.info = payload
    },
    set_landing (state, payload) {
        state.landing = payload        
    },
};

const actions = {
    setModals ({commit}, payload) {
        commit('set_modals', payload);
    }, 
    setInfo ({commit}, payload) {
        commit('set_info', payload);
    }, 
   
}

const getters = {
    getModals: (state) => {
        return state.modals
    },
    getInfo: (state) => {
        return state.info
    },
    getLanding: (state) => {
        return state.landing
    },
};


export default {
    state,
    getters,
    mutations,
    actions
}