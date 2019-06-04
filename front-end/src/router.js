import Vue from 'vue'
import VueRouter from 'vue-router'
import FormulaireDuSeum from "./components/FormulaireDuSeum"
import CV from "./components/CV"
import Work from "./components/Work"

Vue.use(VueRouter)

const routes = [
    { path: '/formulaire-du-seum', component: FormulaireDuSeum },
    { path: '/cv', component: CV },
    { path: '/work', component: Work }
]

export default new VueRouter({
    mode: 'history',
    routes
})
