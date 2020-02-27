<template>
  <section class="signup-card">
    <form autocomplete="false">
      <input
        id="register-focus"
        type="text"
        class="form-input"
        placeholder="Name"
        v-model="model.name"
      />
      <input
        type="text"
        class="form-input form-input-next"
        placeholder="Email"
        v-model="model.email"
      />
      <input
        type="password"
        class="form-input form-input-next"
        placeholder="Password"
        v-model="model.password"
      />
    </form>
    <button class="signup-button" @click="register()">Register</button>
    <p class="signup-alert" v-if="true">Please enter all required fields.</p>
  </section>
</template>

<script>
// import { ValidationProvider } from 'vee-validate'
import UserService from '@/services/UserService.vue'

export default {
  name: 'RegisterCard',
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
// signup-cards.scss
</style>
