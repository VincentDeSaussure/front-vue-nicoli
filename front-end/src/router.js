import Vue from 'vue'
import VueRouter from 'vue-router'
import FormulaireDuSeum from "./components/FormulaireDuSeum"
import CV from "./components/CV"

Vue.use(VueRouter)

const routes = [
    { path: '/formulaire-du-seum', component: FormulaireDuSeum },
    { path: '/cv', component: CV }
]

export default new VueRouter({
    mode: 'history',
    routes
})
