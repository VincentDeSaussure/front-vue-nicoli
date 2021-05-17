import Vue from 'vue'
// @ts-ignore
import PrismicVue from '@prismicio/vue'
// @ts-ignore
import router from './router'
// @ts-ignore
import linkResolver from './prismic/link-resolver'
// @ts-ignore
import htmlSerializer from './prismic/html-serializer'
import App from '@/App.vue'

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  // @ts-ignore
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
