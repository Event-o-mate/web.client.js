<template>
  <div class="container" id="event-page">
    <div class="row">
      <div class="col-md-8 offset-md-2" id="event-wrapper">
        <h1 class="text-center">model.title</h1>
        <h5 class="text-center">model.startTime | - model.endTime |</h5>

        <div id="rsvp-button-wrapper" :v-show="event.submitRsvp">
          <button
            type="button"
            :class="rsvpButtonClass"
            @click="toggleState"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave"
          >
            {{ message }}
          </button>
        </div>

        <div id="atendees-wrapper">
          <h4>People Attending this event</h4>
          <ul class="atendees-list">
            <li v-for="attendee in event.attendees" :key="attendee">
              <img gravatar-src="attendee.email" gravatar-size="100" />
              <span>attendee.name</span>
            </li>
            <!-- <p>
                <a href="#">+37 More Atendees</a>
            </p>-->
          </ul>
        </div>

        <div class="map-wrapper">
          <h5>model.address</h5>
          <gmap-map
            :center="center"
            :zoom="12"
            style="width:100%;  height: 400px;"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center = m.position"
            ></gmap-marker>
          </gmap-map>
        </div>

        <div class="details-wrapper">
          <div class="event-decription">
            <h4>Event Description</h4>
            <p>model.description</p>
          </div>
        </div>

        <div class="details-wrapper event-section snt-comment-widget">
          <div class="container">
            <div class="row">
              <div class="col-md-2">
                <img
                  gravatar-src="event.security.userEmail()"
                  gravatar-size="50"
                  width="50"
                  class="snt-comment-profile-img"
                />
              </div>
              <div class="snt-comment-content col-md-10">
                <textarea
                  ng-model="event.comment"
                  placeholder="Write a comment ..."
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <a
                  class="snt-submit-comment btn btn-xs btn-primary"
                  @click="event.addComment()"
                  >Submit</a
                >
              </div>
            </div>

            <div
              class="row"
              v-for="comment in event.eventComments"
              :key="comment"
            >
              <hr />
              <div class="col-md-2">
                <img
                  gravatar-src="comment.user.email"
                  gravatar-size="50"
                  width="50"
                  class="snt-comment-profile-img"
                />
              </div>
              <div class="col-md-10 snt-comment-preview">
                <span>comment.user.account.name</span>
                <br />
                <span>12.03.2017, 14:32</span>
                <br />
                <p>comment.content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import DescriptionField from '@/components/CreateEventDescriptionField.vue'
// import InfoWindow from '@/components/InfoWindow.vue'

export default {
  name: 'GoogleMap',
  components: {},
  data() {
    return {
      model: {
        tittle: '',
        address: '',
        startTime: '',
        endTime: '',
        lat: '',
        lng: '',
        description: '',
      },
      event: {},
      hover: false,
      location,
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      message: 'RSVP',
      isActive: false,
    }
  },
  mounted() {
    this.geolocate()
  },
  props: {
    place: {
      type: Object,
      twoWay: true,
    },
  },
  // events: {
  //   'location-picker-init'(options) {
  //     this.geocoder = new google.maps.Geocoder()
  //     this.map = new google.maps.Map(
  //       this.$els.map,
  //       Object.assign(
  //         {
  //           center: { lat: 0, lng: 0 },
  //           zoom: 3,
  //           disableDefaultUI: true,
  //         },
  //         (this.marker = { icon: '@/assets/marker.png' }),
  //         options.map,
  //       ),
  //     )
  //     this.marker = new google.maps.Marker(
  //       Object.assign(
  //         {
  //           map: this.map,
  //           position: this.map.getCenter(),
  //           draggable: true,
  //         },
  //         options.marker,
  //       ),
  //     )
  //     this.infoWindow = new google.maps.InfoWindow(
  //       Object.assign(
  //         {
  //           content: this.$refs.info.$el,
  //         },
  //         options.infoWindow,
  //       ),
  //     )
  //     this.autocomplete = new google.maps.places.Autocomplete(
  //       this.$els.input,
  //       Object.assign(
  //         {
  //           types: ['geocode'],
  //         },
  //         options.autocomplete,
  //       ),
  //     )
  //     this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
  //       this.$els.input,
  //     )
  //     // events
  //     google.maps.event.addListenerOnce(this.map, 'idle', this.openInfoWindow)
  //     this.marker.addListener('dragstart', this.closeInfoWindow)
  //     this.marker.addListener('dragend', this.geocodeLocation)
  //     this.autocomplete.addListener('place_changed', this.moveMarker)
  //   },
  // },
  methods: {
    initalStateLoader() {
      this.event = {
        currentUserAttending: '',
        attendees: '',
        name: '',
        submitRsvp: '',
        address: '',
      }
    },
    toggleState: function() {
      this.isActive = !this.isActive
      this.message = 'RSVP'
      // PointerEvent: none
    },
    mouseover: function() {
      if (this.isActive) {
        this.message = 'REVOKE'
      }
    },
    mouseleave: function() {
      if (this.isActive) {
        this.message = 'IM ATTENDING'
      }
    },
    setPlace(place) {
      this.currentPlace = place
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    },
    submitRsvp() {},
  },
  computed: {
    rsvpButtonClass() {
      return {
        btn: true,
        'btn-publish2': true,
        'is-active': this.isActive,
      }
    },
  },
}
</script>
<style>
.LocationPicker,
.LocationPicker__map {
  height: 100%;
}
.LocationPicker__autocomplete {
  padding: 7px 14px;
  margin: 10px;
  width: 30%;
  min-width: 300px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  text-overflow: ellipsis;
  border: 0;
  border-radius: 2px 0 0 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.LocationPicker > .LocationPicker__autocomplete,
.LocationPicker > .LocationPicker__info-window {
  display: none;
}
</style>
