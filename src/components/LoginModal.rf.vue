<template>
  <modal name="login-modal" :adaptive="true" width="451" height="auto" classes="signup-modal">
    <form autocomplete="false">
      <input type="text" class="signup-input" placeholder="Email" v-model="model.email" />
      <input
        type="password"
        class="signup-input signup-input-next"
        placeholder="Password"
        v-model="model.password"
      />
    </form>
    <button @keyup.enter.native="login()" class="signup-button button-purple" @click="login()">Login</button>
    <button
      class="signup-text-link"
      @click="$emit('redirected-to-register')"
    >Don't have an account? Register.</button>
    <p class="signup-alert" v-if="true">Please enter all required fields.</p>
  </modal>
</template>

<script>
// import { ValidationProvider } from 'vee-validate'
// import RegisterForm from '@/components/Register.vue'
import UserService from '@/services/UserService.vue'

export default {
  name: 'LoginModal',
  components: {
    // ValidationProvider,
    // RegisterForm,
    // UserService,
  },
  data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false,
      },
      errors: [],
      showRegisterModal: false,
      submitted: false,
      isValidationAllowed: false,
      searchTerm: '',
    }
  },
  computed: {
    validated() {
      return this.isValidationAllowed && !this.searchTerm
    },
  },
  methods: {
    validate() {
      this.isValidationAllowed = true
    },
    login() {
      const user = { email: this.model.email, password: this.model.password }

      UserService.login(user)
        .then(r => {
          this.$router.push('dashboard')
          this.$emit('success')
          this.$store.dispatch('setToken', r.data.id)
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss">
// signup-modal.scss
</style>
