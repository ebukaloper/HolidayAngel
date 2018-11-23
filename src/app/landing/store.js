// Landings Vuex Module

const getDefaultState = () => ({
    modals: [ {addModal: false}],
})

const state = getDefaultState();

const mutations = {
    reset_state (state) {
        Object.assign(state, getDefaultState())
    },
    set_modals (state, payload) {
        state.modals[0].addModal = payload
    },
};

const actions = {
    setModals ({commit}, payload) {
        commit('set_modals', payload);
    },    
}

const getters = {
    getModals: (state) => {
        return state.modals
    },
};


export default {
    state,
    getters,
    mutations,
    actions
}