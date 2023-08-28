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
      component: Main,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
    }
    },
    {
      path: '/Cost',
      name: 'Cost',
      component: Cost,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
    }
    },
    {
      path: '/Authorization',
      name: 'Auth',
      component: Auth,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
    }
    },
    {
      path: '/ToDo',
      name: 'ToDo',
      component: ToDo,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
    }
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
    }
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
    }
    },
    {
      path: '/Movies',
      name: 'Movies',
      component: Movies,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight',
    }
    }
  ]
})

export default router
