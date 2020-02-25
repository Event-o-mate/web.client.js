<template>
  <div class="rotating-bg">
    <object
      class="rotating-bg-animation"
      type="image/svg+xml"
      data="img/rotoBg.svg"
    >Your browser does not support SVG</object>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'RotatingBg',
})
</script>

<style scoped lang="scss">
.rotating-bg {
  @include extendList(w-1-1 display-initial fixed center z--10);
}

.rotating-bg-animation {
  -webkit-animation: rotateBg 300s linear infinite; /* Safari 4+ */
  -moz-animation: rotateBg 300s linear infinite; /* Fx 5+ */
  -o-animation: rotateBg 300s linear infinite; /* Opera 12+ */
  animation: rotateBg 300s linear infinite; /* IE 10+, Fx 29+ */
}
</style>
