<template>
      <!-- CREATE EVENT FORM -->
  <div class="container" id="create-event">
    <div class="row">
      <div class="snt-rotating-bg-container">
            <object class="snt-rotating-bg" type="image/svg+xml" data="img/rotoBg.svg">
              Your browser does not support SVG
            </object>	
          </div>
      <div class="col-md-6 offset-md-3">
          <h1 class="text-center">Create new event</h1>
          <form role="form" class="text-left" name="createEventForm">
            
              <div class="form-group">
                  <label class="control-label" for="inputLabel1">Event name*</label>
                  <validation-provider style="color: red;" rules="required" v-slot="{ errors }"> 
                  <span style="float: right;"> {{ errors[0] }}</span>
                  <input v-model="model.tittle" name="eventTitle" type="text" class="form-control" id="inputLabel1" required>
                  </validation-provider>
              </div>

              <div class="row">
                  <div class="col-md-6 dropdown">
                    <a class="dropdown-toggle" id="dropdownStart" role="button" data-toggle="dropdown" data-target="#">
                      <div id="dropdown form-group dropdown-start-parent">
                        <label>Start time*</label>
                        <validation-provider style="color: red;" rules="required" v-slot="{ errors }"> 
                        <span style="float: right;"> {{ errors[0] }}</span>
                        <flat-pickr name="startTime" type="text" id="inputLabel1" class="form-control flatpickr-input flatpickr-mobile" v-model="model.startTime" :config="config" placeholder="" ></flat-pickr>
                        </validation-provider>
                      </div>
                    </a>
                  </div>

                  <div class="col-md-6 dropdown">
                    <a class="dropdown-toggle" id="dropdownEnd" role="button" data-toggle="dropdown" data-target="#">
                        <label class="control-label" for="inputLabel1">End time*</label>
                        <validation-provider style="color: red;" rules="required" v-slot="{ errors }"> 
                        <span style="float: right;"> {{ errors[0] }}</span>
                        <flat-pickr name="endTime" type="text" id="inputLabel1" class="form-control flatpickr-input flatpickr-mobile" v-model="model.endTime" :config="config" placeholder=""></flat-pickr>
                        </validation-provider>
                    </a>
                  </div>
              </div>

              <div class="form-group">
                  <label class="control-label" for="textareaLabel1">Location*</label>
                    <validation-provider ref="provider" name="currentPlace" style="color: red;" rules="required|location" v-slot="{ errors }"> 
                    <span style="float: right;"> {{ errors[0] }}</span>
                    <gmap-autocomplete class="form-control" placeholder="" @place_changed="setAddress" @input="setAddress" ></gmap-autocomplete>
                    </validation-provider>
              </div>

              <div class="form-group">
                  <label class="control-label" for="textareaLabel1">Description</label>
                    <validation-provider style="color: red;" rules="required" v-slot="{ errors }"> 
                    <span style="float: right;"> {{ errors[0] }}</span>
                    <textarea v-model="model.description" class="form-control" id="textareaLabel1"></textarea>
                    </validation-provider>
              </div>
              </form>
              <span v-for="index in addCounter" :key="index">
                <button class="remove-section-btn close" aria-label="Close" @click="handleRemove()">&times;</button>
                    <description-form 
                  :v-show="showAddModal"  
                  @cancelDescription="afterDescription('cancel')"
                  @successDescription="afterDescription('success')" />
              </span>
              
              <button type="button" class="btn btn-add-section"  @click="handleAdd()">+ Add new Section</button>
              <button type="button" class="btn btn-publish" @click="submit()" href="Dashboard"> Publish event </button>
        </div><!-- END COL -->

      </div><!-- END ROW -->
  </div>
</template>
<script>

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/dark.css';
import DescriptionForm from '@/components/Description.vue'
import { ValidationProvider } from 'vee-validate';
import EventService from '@/services/EventService.vue'

export default {
  components:{      
    flatPickr,
    DescriptionForm,
    ValidationProvider,
    EventService
  },
  data(){
    return {
      model: {
        tittle: '',
        address: '',
        startTime: '',
        endTime: '',
        lat: '',
        lng: '',
        description: ''
      },
      errors: [],
      description: '',
      isEmpty: false,
      searchTerm: '',
      place: null,
      places: [],
      currentPlace: null,
      showAddModal: false,
      addCounter: 0,
      config: {
        wrap: true,
        altInput: false,
        enableTime: true,
        disableMobile: true,
        dateFormat: "d-m-Y H:i",
      },
    }
  },

  methods: {
    handleInput (value) {
    this.model.address = value;
  },
    setAddress(address) {
      if(!(address instanceof InputEvent)) {
        this.model.address = address.name;
        console.log(this.$route.params.id_token)

        this.$refs.provider.reset()
        router.push({ path: "/dashboard"})
        router.push({ name: "dashboard"})
      } else {
        this.$refs.provider.applyResult({
          errors: ['Please fill in this field.'],
          valid: false,
          failedRules: {}
        });
      }
    },
    handleAdd() {
      this.addCounter++;
    },
    afterDescription () {
      this.showAddModal = false;
    },
    handleRemove() {
          this.addCounter--;
    },
    submit() {
      const event = { 
        tittle: this.model.tittle,
        address: this.model.address,
        startTime: this.model.startTime,
        endTime: this.model.endTime,
        lat: this.model.lat,
        lng: this.model.lng,
        description: this.model.description
      }
      console.log(this.$store.getters["getToken"]);
      EventService.create(event, this.$store.getters["getToken"]).then((r) => {
          console.log(r);
          let token = this.$store.getters.getToken
          console.log(token)
          this.$router.push({ path: '/dashboard' })
          this.$router.push({ name: 'dashboard' })
        }).catch(error => {

        });
    },
  },
}

</script>
<style>
</style>