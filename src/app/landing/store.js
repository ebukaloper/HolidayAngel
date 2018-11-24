// Landings Vuex Module

import api from '../../utils/api'

const getDefaultState = () => ({
    modals: [ {addModal: false} ],
    sunnyGallery: [],
    winterGallery: []
})

const state = getDefaultState();

const mutations = {
    reset_state (state) {
        Object.assign(state, getDefaultState())
    },
    set_modals (state, payload) {
        state.modals[0].addModal = payload
    },
    set_sunnyGallery (state, payload) {
        state.sunnyGallery= payload
    },
    set_winterGallery (state, payload) {
        state.winterGallery = payload
    },
};

const actions = {
    setModals ({commit}, payload) {
        commit('set_modals', payload);
    }, 
    setSunnyGallery ({commit}, payload) {
        api.get(`/search/photos?page=1&query=maldives`, {})
        .then(res => {
            commit('set_sunnyGallery', res.data.results);
        })
        .catch(error => {
            console.log('error from store', error)
        });
    },
    setWinterGallery ({commit}, payload) {
        api.get(`/search/photos?page=4&query=skiing`, {})
        .then(res => {
            commit('set_winterGallery', res.data.results);
        })
        .catch(error => {
            console.log('error from store', error)
        });
    },   
}

const getters = {
    getModals: (state) => {
        return state.modals
    },
    getSunnyGallery: (state) => {
        return state.sunnyGallery
    },
    getWinterGallery: (state) => {
        return state.winterGallery
    },
};


export default {
    state,
    getters,
    mutations,
    actions
}