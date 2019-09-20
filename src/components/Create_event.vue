<template>
      <!-- CREATE EVENT FORM -->
  <div class="container" id="create-event">
    <div class="row">

      <div class="col-md-6 offset-md-3">
          <h1 class="text-center">Create new event</h1>
          <form role="form" class="text-left" name="createEventForm">
              <div class="form-group">
                  <label class="control-label" for="inputLabel1">Event name*</label>
                  
                  <span messages="createEventForm.eventTitle.$error" if="createEventForm.eventTitle.$touched">
                    <span message="required" class="event-errors" role="alert" v-show="false">
                      Please fill in required fields!
                    </span>
                  </span>

                  <input name="eventTitle" type="text" class="form-control" id="inputLabel1" data-com.agilebits.onepassword.user-edited="yes" model="event.title" required>
              </div>
              <div class="row">
                  <div class="col-md-6 dropdown">
                    
                    <a class="dropdown-toggle" id="dropdownStart" role="button" data-toggle="dropdown" data-target="#">
                      <div id="dropdown form-group dropdown-start-parent">
                        <label>Start time*</label>

                        <span messages="createEventForm.startTime.$error" if="createEventForm.startTime.$touched">
                          <span message="required" class="event-errors" role="alert" v-show="false">
                            Fill in required field!
                          </span>
                        </span>
                        

                      <VueCtkDateTimePicker :no-value-to-custom-elem="(true|false)">
                          <input name="startTime" type="text" id="inputLabel2" class="form-control" required>
                      </VueCtkDateTimePicker>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6 dropdown">
                    <a class="dropdown-toggle" id="dropdownEnd" role="button" data-toggle="dropdown" data-target="#">
                      <div class="input-group">
                        <label class="control-label" for="inputLabel1">End time*</label>

                        <span messages="createEventForm.endTime.$error" if="createEventForm.endTime.$touched">
                          <span message="required" class="event-errors" role="alert" v-show="false">
                            Fill in required field!
                          </span>
                        </span>

                      <VueCtkDateTimePicker :no-value-to-custom-elem="(true|false)">
                          <input name="endTime" type="text" id="inputLabel2" class="form-control" required>
                      </VueCtkDateTimePicker>
                      </div>
                    </a>
                  </div>
              </div>
              <div class="form-group">
                  <label class="control-label" for="inputLabel1">Location*</label>

                  <span messages="createEventForm.location.$error" if="createEventForm.location.$touched">
                    <span message="required" class="event-errors" role="alert" v-show="false">
                      Please fill in required fields!
                    </span>
                  </span>

                  <input src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0RHeKaRM5yXF0nPc2Er4vOEYUPcbtpTE&libraries=places" name="location" type="text" class="form-control" id="inputLabel1" data-com.agilebits.onepassword.user-edited="yes" g-places-autocomplete model="event.location" required>
              </div>
              <div class="form-group">
                  <label class="control-label" for="textareaLabel1">Description</label>
                  <textarea class="form-control" id="textareaLabel1" model="event.description"></textarea>
              </div>

              <div class="details-wrapper event-section" repeat="section in event.sections" id="myDIV" v-show="false">
                <button type="button" class="remove-section-btn close" aria-label="Close">
                  <span aria-hidden="true" @click="onCancel">&times;</span>
                </button>
                
                <div class="container" show="section.type == 'comments'">
                  <div class="row">
                    <div class="col-md-2"><img src="img/user-placeholder.png" class="snt-comment-profile-img" v-show="false"></div>
                    <div class="snt-comment-content col-md-10" v-show="false">
                      <textarea placeholder="Write a comment ..."></textarea>
                    </div>
                  </div>
                  <div class="row" v-show="false">
                    <div class="col-md-12" v-show="false">
                      <a class="snt-submit-comment btn btn-xs btn-primary disabled">Submit</a>
                    </div>
                  </div>  
                </div>

                <div class="container" v-show="false">
                  <div class="row">
                    <div class="col-md-12">
                      <p>Image Gallery section will be added soon!</p>
                    </div>
                  </div>
                </div>

                <div class="container" v-show="false">
                  <div class="row">
                    <div class="col-md-12">
                      <p>Facebook Invitations section will be added soon!</p>
                    </div>
                  </div>
                </div>

                <ul class="widgets-list" v-show="true">
                  <li class="comment-widget-icon" @click="event.selectWidget('comments')"></li>
                  <li class="photos-widget-icon" @click="event.selectWidget('img-gallery')" ></li>
                  <li class="fb-invitations-widget-icon" @click="event.selectWidget('fb-invitations')" ><div class="fb-icon-bg"></div></li>
                </ul>

              </div>
              
              <button type="button" class="btn btn-add-section"  @click="myFunction()">+ Add new Section</button>
              <button type="button" class="btn btn-publish" @click="event.createEvent()"> Publish event </button>
          </form>
        </div><!-- END COL -->

      </div><!-- END ROW -->
  </div>
</template>
<script>

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  components:{
    VueCtkDateTimePicker,
    VueGoogleAutocomplete,
  },
  data(){
    return {
      location,
    }
  },
  methods: {
    onCancel() {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
        }
      },
    myFunction() {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
        }
      },
    OtherFunction(){
      
    }
  }
}

</script>