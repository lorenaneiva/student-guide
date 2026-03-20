import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/servicos',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/utilidades',
    name: 'utilities',
    component: () => import('../views/UtilitiesView.vue')
  },
  {
    path: '/instrucoes',
    name: 'instructions',
    component: () => import('../views/InstructionsView.vue')
  },
  {
    path: '/entrar',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/registrar',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
