import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home'
import Projet from './views/Projet'
import Biographie from "./views/Biographie";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/biographie',
      name: 'biographie',
      component: Biographie
    },
    {
      path: '/projet/:uid',
      name: 'projet',
      component: Projet
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
