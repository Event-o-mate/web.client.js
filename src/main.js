import Vue from 'vue'
import App from './App.vue'
import { validationProvider } from './plugins'
import { router } from './router'
import { store } from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  components: {
    validationProvider,
  },
  data: () => ({
    value: '',
  }),
}).$mount('#app')
