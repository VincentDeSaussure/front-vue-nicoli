import Vue from 'vue'
import Vuex from 'vuex'
import formulaireDuSeumService from './services/formulaire-du-seum-service'

Vue.use(Vuex)

const state = {
    formulaireDuSeum: []
}

const mutations = {
    SAVE_FORMULAIRE_DU_SEUM(state, seums) {
        state.formulaireDuSeum = seums
    }
}

const actions = {
    FETCH_SEUMS({commit}) {
        //formulaireDuSeumService.fetchSeums()
        //commit("SAVE_FORMULAIRE_DU_SEUM", seums)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
