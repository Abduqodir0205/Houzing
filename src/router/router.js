import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/myProperties.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // children:[
      //   {}
      // ]
    },
    {
      path: '/properties',
      name: 'properties',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/properties.vue')
    }
  ]
})

export default router