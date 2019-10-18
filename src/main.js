import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueFlatPickr from 'vue-flatpickr-component';
import * as VueGoogleMaps from "vue2-google-maps";
import VueJsModal from 'vue-js-modal'
import vStylish from 'v-stylish';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import store from "./store/index";

import 'flatpickr/dist/flatpickr.css';
import '@/assets/js/jquery.min.js'
import '@/assets/js/bootstrap.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/main.css'
import '@/assets/css/autocomplete.css'
import '@/assets/css/pacifico.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueFlatPickr);

Vue.use(VueRouter)

Vue.use(VueJsModal)

Vue.use(vStylish);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC20xo5vUPz42LM5lG0GOhdwjniQR7pUu0",
    libraries: "places" // necessary for places input
  }
});

extend('required', {
  ...required,
  message: 'Please fill in this field.'
});

Vue.config.productionTip = false

import Home from '@/components/Home.vue'
import Create_event from '@/components/Create_event.vue'
import Dashboard from '@/components/Dashboard.vue'
import Event from '@/components/Event.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/create_event', component: Create_event },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/event', component: Event},
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  store,
  components: {
    ValidationProvider
  },
  data: () => ({
    value: ''
  })
}).$mount('#app')