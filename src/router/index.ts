import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Biographie from '../views/Biographie.vue';
import Projet from '../views/Projet.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
