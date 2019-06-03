import Vue from 'vue'
import Vuex from 'vuex'
import { formulaireDuSeumService } from './services/formulaire-du-seum-service.js'

Vue.use(Vuex)

const state = {
    formulaireDuSeum: [],
    successSubmit: false,
    successAddSeum: false
}

const mutations = {
    SAVE_FORMULAIRE_DU_SEUM(state, seums) {
        state.formulaireDuSeum = seums
    },
    SUCCESS_ADD(state) {
        state.successAddSeum = true
    },
    SUCCESS_SUBMIT(state) {
        state.successSubmit = true
    }
}

const actions = {
    fetchSeums({commit}) {
        return formulaireDuSeumService.fetchListeDeSeum()
            .then( listeDeSeums => {
                commit(mutations.SAVE_FORMULAIRE_DU_SEUM(state, listeDeSeums))
            })
    },
    addSeum({commit}, {newEntree}) {
        return formulaireDuSeumService.addSeum(newEntree)
            .then(() => {
            commit(mutations.SUCCESS_ADD(state))
        })
    },
    submitFormulaireDuSeum(
            { commit },
            { formulaireSeumSubmitted }
        ) {
        return formulaireDuSeumService.submitFormulaireDuSeum(formulaireSeumSubmitted)
            .then(() => {
                commit(mutations.SUCCESS_SUBMIT(state))
        })
    }

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
