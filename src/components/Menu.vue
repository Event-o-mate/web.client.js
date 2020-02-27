<template>
  <nav class="nav">
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
        <button @click="show('nav')">ham</button>
      </li>
    </ul>

    <transition name="fade">
      <div class="nav-card-bg" v-show="cardShown" @click="closeCards()"></div>
    </transition>

    <transition name="slide-from-top-small">
      <section
        class="nav-dropdown-navigation"
        @click="hide('nav')"
        v-show="cards.nav"
      >
        <menu-nav-links
          :isAuthenticated="isAuthenticated"
          @show-profile="show('profile')"
          @show-register="show('register')"
          @show-login="show('login')"
        />
      </section>
    </transition>

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
        @cancel="hide('login')"
        @success="
          hide('login')
          login()
        "
      />
    </transition>

    <transition name="fade">
      <profile-card v-show="cards.profile" />
    </transition>
  </nav>
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
  card: relative,
  card-bg: fixed center w-viewport h-viewport bg-black-transparent-20,
);

.nav {
  @include extendMap($nav);
}
</style>
