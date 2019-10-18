<template>
  <!-- text create your event-->
  <div class="snt-container container-fluid" id="">
    <div class="snt-content-container container ng-scope">
    <div class="row">
      <div class="col-12">
    <div  class="snt-headline-text">
        <h1 style="font-size: 3.5rem;"> Create your event in only one step!</h1>
    </div>
 <!-- Rotating BG -->
    <div class="row">
		<div class="snt-rotating-bg-container">
			<object class="snt-rotating-bg" type="image/svg+xml" data="img/rotoBg.svg">
				Your browser does not support SVG
			</object>	
		</div>
    <!--  PLANET -->

    <div class="planet-robot col-md-4 offset-md-4" style="text-align: center;">
        <object class="planet" type="image/svg+xml" data="/img/planet.svg" width="300" height="300" >
          Your browser does not support SVG
        </object>

        <object class="robot" type="image/svg+xml" data="img/robot.svg" width="300" height="300" >
          Your browser does not support SVG
        </object>
      <!--  PLANET COUNT NUMBER -->
       <div class="snt-event-counter">
         <span>0</span>
       </div>
       </div>
       </div>
      
       <div class="text-center">
       <a class="btn snt-home-create-btn" href="#/create_event">Create Event</a>
    </div>
    </div>
    </div>
</div>
        </div>
</template>
<script>


export default {
}
</script>
<style scoped>

</style>


