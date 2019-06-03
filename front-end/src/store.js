import Vue from 'vue'
import Vuex from 'vuex'
import { formulaireDuSeumService } from './services/formulaire-du-seum-service.js'

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
    fetchSeums({commit}) {
        return formulaireDuSeumService.fetchListeDeSeum()
            .then( listeDeSeums => {
                commit(mutations.SAVE_FORMULAIRE_DU_SEUM(state, listeDeSeums))
            })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
