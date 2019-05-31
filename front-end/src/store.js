import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    formulaireDuSeum: [
            {
                msg: "aujourd'hui ou demain",
                value: false
            },
            {
                msg: "mais enfin tu veux quoi ?",
                value: false
            },
            {
                msg: "caf, pôle emploi, urssaf, blablabla",
                value: false
            }
        ]
    }

export default new Vuex.Store({
    state,
    mutations: {},
    actions: {}
})
