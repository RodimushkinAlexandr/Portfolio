import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies.vue'
import ToDo from '../views/ToDoView.vue'
import Auth from '@/views/Auth.vue'
import Cost from '@/views/Cost.vue'
import Weather from '@/views/Weather.vue'
import Settings from '@/views/Settings.vue'
import Main from '@/views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
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
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/Movies',
      name: 'Movies',
      component: Movies
    }
  ]
})

export default router
