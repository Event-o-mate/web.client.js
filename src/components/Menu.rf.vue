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
        <a @click="show('register-modal')">Register</a>
      </li>
      <li class="rf-nav-link" v-if="!isAuthenticated">
        <a @click="show('login-modal')">Login</a>
      </li>
      <li class="rf-nav-link">
        <router-link to="dashboard" v-if="!isAuthenticated">Dashboard</router-link>
      </li>
      <li class="rf-nav-link" v-if="!isAuthenticated" @click="logout()">
        <a>Logout</a>
      </li>
      <li class="rf-nav-link" v-if="!isAuthenticated" @click="show('profile-modal')">
        <a>Profile</a>
      </li>
    </ul>

    <login-modal
      @cancel="hide('login-modal')"
      @success="hide('login-modal'); login()"
      @redirected-to-register="hide('login-modal'); show('register-modal')"
    />
    <register-modal @cancel="hide('register-modal')" @success="hide('register-modal'); login()" />
    <profile-modal />
  </nav>
</template>

<script>
import Vue from 'vue'
import LoginModal from '@/components/LoginModal.rf.vue'
import RegisterModal from '@/components/RegisterModal.rf.vue'
import ProfileModal from '@/components/ProfileModal.rf.vue'

export default Vue.extend({
  name: 'Menu',
  components: {
    LoginModal,
    RegisterModal,
    ProfileModal,
  },
  data() {
    return {
      isAuthenticated: false,
      modalWidth: 320,
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
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
  base: text-large bg-black-transparent-66 h-75 ph-2,
  wrap: flex flex-mid h-1-1,
  logo: mr-auto,
  logo-text: title-medium font-pacifico,
  link: ml-2 font-pacifico,
  create-event-btn: button-orange ph-0p75 pv-0p25 text-shadow,
);

.rf-nav {
  @include extendMap($nav);
}
</style>
