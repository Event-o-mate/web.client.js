<template>
  <nav class="rf-nav">
    <ul class="rf-nav-wrap">
      <li class="rf-nav-logo">
        <router-link to="/" class="rf-nav-link">Event-O-Mate</router-link>
      </li>
      <li class="rf-nav-item">
        <router-link to="create_event" class="rf-nav-link">
          <div class="rf-nav-create-event-btn">
            <p>Create Event</p>
          </div>
        </router-link>
      </li>
      <li class="rf-nav-item" v-if="!isAuthenticated">
        <button @click="show('register')">Register</button>
      </li>
      <li class="rf-nav-item" v-if="!isAuthenticated">
        <button @click="show('login')">Login</button>
      </li>
      <li class="rf-nav-item">
        <router-link to="dashboard" class="rf-nav-link" v-if="!isAuthenticated">Dashboard</router-link>
      </li>
      <li class="rf-nav-item" v-if="!isAuthenticated" @click="logout()">
        <button>Logout</button>
      </li>
    </ul>

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
import Vue from 'vue'
// import LoginForm from '@/components/Login.vue'
// import RegisterForm from '@/components/Register.vue'
// import ProfileCard from '@/components/ProfileCard.vue'

export default Vue.extend({
  name: 'menu',
  components: {
    // LoginForm,
    // RegisterForm,
    // ProfileCard,
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
})
</script>

<style scoped lang="scss">
$nav: (
  base: text-large font-pacifico bg-black-transparent-50 pv-0p5 ph-2,
  wrap: flex flex-mid,
  logo: mr-auto title,
  item: ml-2,
  link: decoration-none decoration-none--hover,
  create-event-btn: bg-orange-300 bg-orange--hover bg-orange-500--active ph-0p75
    pv-0p25 transition transition-bg,
);

.rf-nav {
  @include extendMap($nav);
}
.rf-nav-create-event-btn {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
