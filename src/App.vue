<template>
  <div id="app">
    <menu-rf />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuRf from './components/Menu.rf.vue'

export default {
  name: 'app',
  components: {
    MenuRf,
  },
}
</script>

<style lang="scss">
//
</style>