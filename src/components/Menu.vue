<template>
  <nav class="rf-nav">
    <ul class="rf-nav-wrap">
      <li class="rf-nav-logo">
        <router-link to="/">
          <h1 class="rf-nav-logo-text">Event-O-Mate</h1>
        </router-link>
      </li>
      <li class="rf-nav-link">
        <router-link to="create_event" class="rf-nav-create-event-btn">Create Event</router-link>
      </li>
      <li class="rf-nav-link" v-if="!isAuthenticated">
        <a @click="show('register')">Register</a>
      </li>
      <li class="rf-nav-link" v-if="!isAuthenticated">
        <a @click="show('login')">Login</a>
      </li>
      <li class="rf-nav-link">
        <router-link to="dashboard" v-if="!isAuthenticated">Dashboard</router-link>
      </li>
      <li class="rf-nav-link" v-if="!isAuthenticated" @click="logout()">
        <a>Logout</a>
      </li>
      <li class="rf-nav-link" v-if="!isAuthenticated" @click="show('profile')">
        <a>Profile</a>
      </li>
    </ul>
    <div class="rf-nav-card-bg" v-show="cardBg"></div>

    <!-- <login-modal
      @cancel="hide('login-modal')"
      @success="
        hide('login-modal')
        login()
      "
    />
    <register-modal
      @cancel="hide('register-modal')"
      @success="
        hide('register-modal')
        login()
      "
    />
    <profile-modal />-->
    <login-card
      v-show="card.login"
      v-on-clickaway="hideFn('login')"
      @redirected-to-register="hide('login'); show('register')"
    />
    <register-card v-show="card.register" v-on-clickaway="hideFn('register')" />
    <profile-card v-show="card.profile" v-on-clickaway="hideFn('profile')" />
  </nav>
</template>

<script>
import Vue from 'vue'
import { mixin as clickaway } from 'vue-clickaway2'
import LoginCard from '@/components/cards/LoginCard.vue'
import RegisterCard from '@/components/cards/RegisterCard.vue'
import ProfileCard from '@/components/cards/ProfileCard.vue'

export default Vue.extend({
  name: 'Menu',
  mixins: [clickaway],
  components: {
    LoginCard,
    RegisterCard,
    ProfileCard,
  },
  data() {
    return {
      isAuthenticated: false,
      profileVisibility: false,
      card: {
        profile: false,
        login: false,
        register: false,
      },
    }
  },
  methods: {
    hide(name) {
      this.card[name] = false
    },
    hideFn(name) {
      // required because directives only take functions
      return () => this.hide(name)
    },
    show(name) {
      this.card[name] = true
    },
    login() {
      this.isAuthenticated = true
    },
    logout() {
      this.isAuthenticated = false
    },
  },
  computed: {
    cardBg() {
      return Object.values(this.card).some(x => x === true)
    },
  },
})
</script>

<style scoped lang="scss">
$nav: (
  base: text-large bg-black-transparent-66 h-75,
  wrap: flex flex-mid h-1-1 ph-2,
  logo: mr-auto,
  logo-text: title-medium font-pacifico,
  link: ml-2 font-pacifico,
  create-event-btn: button-orange ph-0p75 pv-0p25 text-shadow,
  card: relative,
  card-bg: fixed center w-viewport h-viewport bg-black-transparent-20,
);

.rf-nav {
  @include extendMap($nav);
}
</style>
