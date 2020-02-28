<template>
  <ul class="nav-links-wrap" role="navigation" aria-label="Page navigation">
    <li class="nav-links-item">
      <router-link
        :id="createEventButtonDropdownId"
        to="/create_event"
        class="nav-links-link nav-links-create-event-button"
      >Create Event</router-link>
    </li>
    <li class="nav-links-item" v-if="!isAuthenticated">
      <button class="nav-links-link" @click="$emit('show-register')">Register</button>
    </li>
    <li class="nav-links-item" v-if="!isAuthenticated">
      <button class="nav-links-link" @click="$emit('show-login')">Login</button>
    </li>
    <li class="nav-links-item">
      <router-link class="nav-links-link" to="/dashboard" v-if="!isAuthenticated">Dashboard</router-link>
    </li>
    <li class="nav-links-item" v-if="!isAuthenticated">
      <button class="nav-links-link" @click="$emit('logout')">Logout</button>
    </li>
    <li class="nav-links-item" v-if="!isAuthenticated">
      <button class="nav-links-link" @click="$emit('show-profile')">Profile</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: '',
  props: ['isAuthenticated', 'dropdown'],
  computed: {
    createEventButtonDropdownId() {
      return this.dropdown ? 'nav-focus' : ''
    },
  },
}
</script>

<style scoped lang="scss">
$nav: (
  wrap: flex flex-mid flex-column m_flex-row white-space-pre font-pacifico,
  item: w-1-1,
  link: w-1-1 m_w-auto m_ml-2 block box text-center,
  create-event-button: button-orange ph-0p75 pv-0p25 text-shadow,
);

.nav-links {
  @include extendMap($nav);
}
</style>
