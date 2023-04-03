import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'User',
      path: '/user',
      component: () => import('@/layouts/BlankLayout'),
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/User/Login')
        }
      ]
    }
  ]
})

export default router
