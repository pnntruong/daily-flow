import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Contact from '@/components/Contact.vue'
import About from '@/components/About.vue'
import TodoApp from '@/components/features/TodoApp.vue'
import WorkSpace from '@/components/features/WorkSpace.vue'

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
    path: '/workspace',
    name: 'WorkSpace',
    component: WorkSpace
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
