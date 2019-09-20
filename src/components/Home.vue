<template>
  <!-- text create your event-->
  <div class="container" id="landing">
    <div  class="text-create-your-event">
        <h1>Create your event in only one step!</h1>
    </div>
 <!-- Rotating BG -->
		<div class="snt-rotating-bg-container">
			<object class="snt-rotating-bg" type="image/svg+xml" data="img/rotoBg.svg">
				Your browser does not support SVG
			</object>	
		</div>
    <!--  PLANET -->

    <div class="planet-robot col-md-3 offset-md-4">
        <object type="image/svg+xml" data="/img/planet.svg" width="300" height="300" >
          Your browser does not support SVG
        </object>

        <object class="robot" type="image/svg+xml" data="img/robot.svg" width="300" height="300" >
          Your browser does not support SVG
        </object>

       

      <!--  PLANET COUNT NUMBER -->
       <div class="planet-counter">
         <span>0</span>
       </div>

       <a class="btn snt-home-create-btn" href="#/create_event">Create Event</a>
    </div>
  </div>
</template>
<script>

export default {
}
</script>
<style scoped>

</style>


