import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Contact from '@/components/Contact.vue'
import About from '@/components/About.vue'
import ComingSoon from '@/components/ComingSoon.vue'
import TodoApp from '@/components/features/TodoApp.vue'
import Pomodoro from '@/components/features/Pomodoro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todos',
    name: 'TodoApp',
    component: TodoApp
  },
  {
    path: '/pomodoro',
    name: 'Pomodoro',
    component: Pomodoro
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router