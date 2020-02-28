<template>
  <div id="app">
    <rotating-bg v-show="showBackground" />
    <Navigation />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import RotatingBg from '@/components/special/RotatingBg.vue'

export default {
  name: 'app',
  components: {
    RotatingBg,
    Navigation,
  },
  computed: {
    showBackground() {
      const showOnRoutes = ['home', 'create_event']
      return showOnRoutes.includes(this.$route.name)
    },
  },
}
</script>

<style scoped lang="scss"></style>
