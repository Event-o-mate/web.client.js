<template>
  <nav class="snt-navbar navbar navbar-expand-lg navbar-dark fixed-top ng-scope">
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand logo-event-o-mate" href="#/">Event-O-Mate</a>
    <div class="collapse navbar-toggleable-md" id="navbarSupportedContent" aria-expanded="false">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="nav-link create-event-button" href="#/create_event">Create event</a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link register-button"
            v-if="!isAuthenticated"
            @click="show('register')"
          >Register</a>
        </li>

        <li class="nav-item">
          <a class="nav-link dashboard-button" v-if="isAuthenticated" href="#/dashboard">Dashboard</a>
        </li>

        <li class="nav-item">
          <a class="nav-link login-button" v-if="!isAuthenticated" @click="show('login')">Log In</a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link logout-button"
            v-if="isAuthenticated"
            @click="logout()"
            href="/"
          >Log Out</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="isAuthenticated" @click="show('profile')">Profile</a>
        </li>
      </ul>
    </div>
    <modal name="login">
      <login-form
        @cancel="hide('login')"
        @success="hide('login'); login()"
        @redirected-to-register="hide('login'); show('register')"
      />
    </modal>

    <modal name="register">
      <register-form @cancel="hide('register')" @success="hide('register'); login()" />
    </modal>
    <modal name="profile">
      <profile-card />
    </modal>
  </nav>
</template>
<script>
import LoginForm from '@/components/Login.vue'
import RegisterForm from '@/components/Register.vue'
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  components: {
    LoginForm,
    RegisterForm,
    ProfileCard,
  },
  data() {
    return {
      // TODO luka - userValid was not used anywhere. Should it be?
      // userValid: false,
      isAuthenticated: false,
    }
  },
  methods: {
    hide(name) {
      this.$modal.hide(name)
    },
    show(name) {
      this.$modal.show(name)
    },
    login() {
      this.isAuthenticated = true
    },
    logout() {
      this.isAuthenticated = false
    },
  },
}
</script>

