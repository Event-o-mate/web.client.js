<template>
  <div class="rf-home">
    <h2 class="rf-home-headline">Create your event in only one step!</h2>

    <div class="rf-home-graphic">
      <object
        class="rf-home-graphic-planet"
        type="image/svg+xml"
        data="/img/planet.svg"
        width="300"
        height="300"
        >Your browser does not support SVG</object
      >
      <object
        class="rf-home-graphic-robot"
        type="image/svg+xml"
        data="img/robot.svg"
        width="300"
        height="300"
        >Your browser does not support SVG</object
      >

      <div class="rf-home-graphic-counter">0</div>
    </div>

    <router-link class="rf-home-button" to="/create_event"
      >Create Event</router-link
    >
  </div>
</template>

<script>
import Vue from 'vue'
// import RotatingBg from '@/components/special/RotatingBg.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    // RotatingBg,
  },
})
</script>

<style lang="scss" scoped>
$home-styles: (
  base: flex flex-column flex-center text-center pb-5,
  background: w-1-1 display-initial fixed center,
  headline: font-pacifico mt-2p5 title-xlarge z--5,
  graphic: (
    base: mt-4 w-600 mh-auto relative z--5,
    robot: inline-block,
    planet: inline-block,
    counter: w-100 h-50 flex flex-mid flex-center absolute text-large,
  ),
  button: block button-orange text-shadow w-450 pv-0p75 mt-6 mh-auto title
    font-pacifico,
);

.rf-home {
  @include extendMap($home-styles);
}

.rf-home-background-rotation {
  -webkit-animation: rotateBg 300s linear infinite; /* Safari 4+ */
  -moz-animation: rotateBg 300s linear infinite; /* Fx 5+ */
  -o-animation: rotateBg 300s linear infinite; /* Opera 12+ */
  animation: rotateBg 300s linear infinite; /* IE 10+, Fx 29+ */
}

.rf-home-graphic-counter {
  transform: rotate(-17deg);
  top: 57px;
  left: 50px;
}

.rf-home-graphic-robot {
  -webkit-animation: robohover 3s ease-in-out infinite; /* Safari 4+ */
  -moz-animation: robohover 3s ease-in-out infinite; /* Fx 5+ */
  -o-animation: robohover 3s ease-in-out infinite; /* Opera 12+ */
  animation: robohover 3s ease-in-out infinite; /* IE 10+, Fx 29+ */
}

@mixin setKeyframes {
  @keyframes robohover {
    @content;
  }
  @-moz-keyframes robohover {
    @content;
  }
  @-o-keyframes robohover {
    @content;
  }
}

@include setKeyframes {
  0% {
    -ms-transform: translate(0px, 0px);
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }
  50% {
    -ms-transform: translate(0px, -20px);
    -webkit-transform: translate(0px, -20px);
    transform: translate(0px, -20px);
  }
  100% {
    -ms-transform: translate(0px, 0px);
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }
}
</style>
