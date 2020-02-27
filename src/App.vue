<template>
  <div id="app">
    <rotating-bg v-show="showBackground" />
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import RotatingBg from '@/components/special/RotatingBg.vue'

export default {
  name: 'app',
  components: {
    RotatingBg,
    Menu,
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
