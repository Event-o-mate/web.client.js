import CreateEvent from '@/components/CreateEvent.vue'
import Dashboard from '@/components/Dashboard.vue'
import Event from '@/components/Event.vue'
import Home from '@/components/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/create_event', name: 'create_event', component: CreateEvent },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/event', name: 'event', component: Event },
]

export const router = new VueRouter({
  routes,
})
