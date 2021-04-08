import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard'
import Calendar from '../views/Calendar'


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
