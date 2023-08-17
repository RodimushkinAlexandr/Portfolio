import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import ToDo from '../views/ToDoView.vue'
import Auth from '@/views/Auth.vue'
import Cost from '@/views/Cost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MoviesView
    },
    {
      path: '/Cost',
      name: 'Cost',
      component: Cost
    },
    {
      path: '/Authorization',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/ToDo',
      name: 'ToDo',
      component: ToDo
    }
  ]
})

export default router
