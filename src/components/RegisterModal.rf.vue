<template>
  <modal name="register-modal" :adaptive="true" width="451" height="auto" classes="signup-modal">
    <form autocomplete="false">
      <input type="text" class="signup-input" placeholder="Name" v-model="model.name" />
      <input
        type="text"
        class="signup-input signup-input-next"
        placeholder="Email"
        v-model="model.email"
      />
      <input
        type="password"
        class="signup-input signup-input-next"
        placeholder="Password"
        v-model="model.password"
      />
    </form>
    <button class="signup-button" @click="register()">Register</button>
    <p class="signup-alert" v-if="true">Please enter all required fields.</p>
  </modal>
</template>

<script>
// import { ValidationProvider } from 'vee-validate'
import UserService from '@/services/UserService.vue'

export default {
  name: 'RegisterModal',
  components: {
    // ValidationProvider,
    // UserService,
  },
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
      },
      errors: [],
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
    register() {
      const user = {
        name: this.model.name,
        email: this.model.email,
        password: this.model.password,
      }
      UserService.register(user)
        .then(() => {
          this.$router.push('home')
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
// signup-modal.scss
</style>