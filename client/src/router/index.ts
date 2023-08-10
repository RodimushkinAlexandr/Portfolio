import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import ToDo from '../views/ToDoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MoviesView
    },
    {
      path: '/ToDo',
      name: 'ToDo',
      component: ToDo
    }
  ]
})

export default router
