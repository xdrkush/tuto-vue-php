import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import('../layouts/MyLayout.vue'),
      children: [
        {path: '', name: 'HomePage', component: () => import('../pages/HomePage.vue')},
        {path: '/contact', name: 'ContactPage', component: () => import('../pages/ContactPage.vue')},
        {path: '/crypto', name: 'CryptoPage', component: () => import('../pages/CryptoPage.vue')}
      ]
    },
    {
      path: "*",
      component: () => import('../layouts/MyLayout.vue'),
      children: [
        {path: '', name: '404', component: () => import('../pages/HomePage.vue')}
      ]
    }
  ]
})

export default router