import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import '@/assets/js/jquery.min.js'
import '@/assets/js/bootstrap.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/main.css'
import '@/assets/css/autocomplete.css'
import '@/assets/css/pacifico.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.use(VueRouter)

Vue.use(VModal)

Vue.config.productionTip = false

import Home from '@/components/Home.vue'
import Create_event from '@/components/Create_event.vue'
import Dashboard from '@/components/Dashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/create_event', component: Create_event },
  { path: '/dashboard', component: Dashboard },

]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
