<template>
  <div>
    <nav class="nav">
      <section role="navigation" aria-label="Main navigation">
        <ul class="nav-wrap">
          <li class="nav-logo">
            <router-link to="/">
              <h1 class="nav-logo-text">Event-O-Mate</h1>
            </router-link>
          </li>
          <li class="nav-menu-navigation">
            <menu-nav-links
              :isAuthenticated="isAuthenticated"
              @show-profile="show('profile')"
              @show-register="show('register')"
              @show-login="show('login')"
            />
          </li>
          <li class="nav-hamburger">
            <button class="nav-hamburger-button" @click="show('nav')">
              <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" width="36">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </li>
        </ul>
      </section>

      <!-- card background overlay;  -->
      <transition name="fade">
        <div class="nav-card-bg" v-show="cardShown" @click="closeCards()"></div>
      </transition>

      <transition name="slide-from-top-small">
        <section class="nav-dropdown-navigation" @click="hide('nav')" v-show="cards.nav">
          <menu-nav-links
            :dropdown="true"
            :isAuthenticated="isAuthenticated"
            @show-profile="show('profile')"
            @show-register="show('register')"
            @show-login="show('login')"
          />
        </section>
      </transition>
    </nav>

    <transition name="slide-from-top">
      <login-card
        v-show="cards.login"
        @cancel="hide('login')"
        @success="
          hide('login')
          login()
        "
        @redirected-to-register="
          hide('login')
          show('register')
        "
      />
    </transition>

    <transition name="slide-from-top">
      <register-card
        v-show="cards.register"
        @cancel="hide('register')"
        @success="
          hide('register')
          login()
        "
      />
    </transition>

    <transition name="fade">
      <profile-card v-show="cards.profile" />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import LoginCard from '@/components/cards/LoginCard.vue'
import RegisterCard from '@/components/cards/RegisterCard.vue'
import ProfileCard from '@/components/cards/ProfileCard.vue'
import MenuNavLinks from '@/components/MenuNavLinks.vue'

export default Vue.extend({
  name: 'Menu',
  components: {
    LoginCard,
    RegisterCard,
    ProfileCard,
    MenuNavLinks,
  },
  data() {
    return {
      isAuthenticated: false,
      profileVisibility: false,
      cards: {
        profile: false,
        login: false,
        register: false,
        nav: false,
      },
    }
  },
  methods: {
    hide(name) {
      this.cards[name] = false
    },
    show(name) {
      this.closeCards()
      this.cards[name] = true
      const doc = document.getElementById(name + '-focus')
      if (doc) this.$nextTick(() => doc.focus())
    },
    closeCards() {
      Object.keys(this.cards).forEach(x => (this.cards[x] = false))
    },
    login() {
      // TODO - impl login
      this.isAuthenticated = true
    },
    logout() {
      // TODO - impl logout
      this.isAuthenticated = false
    },
  },
  computed: {
    cardShown() {
      return Object.values(this.cards).some(x => x === true)
    },
  },
})
</script>

<style scoped lang="scss">
$nav: (
  base: text-large bg-black-transparent-66,
  wrap: flex flex-mid h-1-1 ph-2 pv-0p75,
  logo: mr-auto white-space-pre,
  logo-text: title-medium font-pacifico,
  menu-navigation: display-none m_display-initial,
  dropdown-navigation: m_display-none absolute w-1-1 bg-black-transparent-66,
  hamburger: m_display-none,
  hamburger-button: flex flex-mid,
  card: relative,
  card-bg: fixed center w-viewport h-viewport bg-black-transparent-20,
);

.nav {
  @include extendMap($nav);
}
</style>
