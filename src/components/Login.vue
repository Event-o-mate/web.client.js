<template>
  <div class="boxx">
    <div class="partition" id="partition-register">
      <div class="partition-form">
        <form autocomplete="false">
          <div class="autocomplete-fix">
            <input type="password" />
          </div>

          <div class="form-login">
            <input type="text" placeholder="Email" v-model="model.email" />
            <input type="password" placeholder="Password" v-model="model.password" />
          </div>
        </form>

        <div class="button-set">
          <button @keyup.enter.native="login()" id="goto-signin-btn" @click="login()">Login</button>
        </div>
        <p>
          <a
            class="form-login"
            @click="$emit('redirected-to-register')"
          >Don't have an account? Register.</a>
        </p>
        <p>
          <a
            class="alert-login"
            v-if="validated"
            style="color: white;"
          >An email and password need to be present.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import RegisterForm from '@/components/Register.vue'
import UserService from '@/services/UserService.vue'

export default {
  name: 'LoginForm',
  components: {
    ValidationProvider,
    RegisterForm,
    UserService,
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
      errorMsg: 'An email and password need to be present.',
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
        .catch(error => {})
    },
  },
}
</script>