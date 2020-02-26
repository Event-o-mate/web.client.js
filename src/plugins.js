import { extend as ValidationExtend, ValidationProvider } from 'vee-validate'
import { required as requiredValidation } from 'vee-validate/dist/rules'
import Vue from 'vue'
import VueFlatPickr from 'vue-flatpickr-component'
import * as VueGoogleMaps from 'vue2-google-maps'

import 'flatpickr/dist/flatpickr.css'
// import '@/assets/js/jquery.min.js'
// import '@/assets/js/bootstrap.min.js'
// import '@/assets/css/bootstrap.min.css'
import '@/assets/css/main.css'
import '@/assets/css/autocomplete.css'
import '@/assets/css/pacifico.css'

Vue.use(VueFlatPickr)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC20xo5vUPz42LM5lG0GOhdwjniQR7pUu0',
    libraries: 'places', // necessary for places input
  },
})

ValidationExtend('required', {
  ...requiredValidation,
  message: 'Please fill in this field.',
})

export const validationProvider = ValidationProvider
