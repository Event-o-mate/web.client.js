<template>
  <ul class="nav-links-wrap" role="navigation" aria-label="Page navigation">
    <li class="nav-links-item">
      <button
        :id="dropdown ? 'nav-focus' : ''"
        @click="$router.push('/create_event').catch(() => {})"
        class="nav-links-link nav-links-create-event-btn"
      >Create Event</button>
    </li>
    <li class="nav-links-item" v-if="!isAuthenticated">
      <button class="nav-links-link" @click="$emit('show-register')">Register</button>
    </li>
    <li class="nav-links-item" v-if="!isAuthenticated">
      <button class="nav-links-link" @click="$emit('show-login')">Login</button>
    </li>
    <li class="nav-links-item">
      <button
        class="nav-links-link"
        @click="$router.push('/dashboard').catch(() => {})"
        v-if="!isAuthenticated"
      >Dashboard</button>
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
}
</script>

<style scoped lang="scss">
$nav: (
  wrap: flex flex-mid flex-column m_flex-row,
  link: w-1-1 m_w-auto m_ml-2 font-pacifico white-space-pre block box
    text-center,
  item: w-1-1 m_w-auto,
  create-event-btn: button-orange ph-0p75 pv-0p25 text-shadow,
);

.nav-links {
  @include extendMap($nav);
}
</style>
