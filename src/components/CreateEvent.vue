<template>
  <div class="create-event">
    <h2 class="create-event-title">Create new event</h2>

    <form name="createEventForm">
      <div class="create-event-field">
        <validation-provider rules="required" v-slot="{ errors }">
          <label class="create-event-label" for="event-name">Event name*</label>
          <p class="create-event-error">{{ errors[0] }}</p>
          <input
            v-model="model.title"
            type="text"
            class="create-event-input"
            id="event-name"
            required
          />
        </validation-provider>
      </div>

      <div class="create-event-field-small-left">
        <validation-provider rules="required" v-slot="{ errors }">
          <label class="create-event-label" for="event-start-time"
            >Start time*</label
          >
          <span class="create-event-error">{{ errors[0] }}</span>
          <flat-pickr
            name="startTime"
            type="text"
            id="event-start-time"
            class="create-event-input"
            v-model="model.startTime"
            :config="config"
            placeholder
          ></flat-pickr>
        </validation-provider>
      </div>

      <div class="create-event-field-small-right">
        <validation-provider rules="required" v-slot="{ errors }">
          <label class="create-event-label" for="event-end-time"
            >End time*</label
          >
          <span class="create-event-error">{{ errors[0] }}</span>
          <flat-pickr
            name="endTime"
            type="text"
            id="event-end-time"
            class="create-event-input"
            v-model="model.endTime"
            :config="config"
            placeholder
          ></flat-pickr>
        </validation-provider>
      </div>

      <div class="create-event-field">
        <validation-provider
          ref="provider"
          name="currentPlace"
          rules="required|location"
          v-slot="{ errors }"
        >
          <label class="create-event-label" for="event-location"
            >Location*</label
          >
          <p class="create-event-error">{{ errors[0] }}</p>
          <gmap-autocomplete
            id="event-location"
            class="create-event-input"
            placeholder
            @place_changed="setAddress"
            @input="setAddress"
          ></gmap-autocomplete>
        </validation-provider>
      </div>

      <div class="create-event-field">
        <label class="create-event-label" for="event-description"
          >Description*</label
        >
        <textarea
          v-model="model.description"
          class="create-event-input"
          id="event-description"
          required
        />
      </div>
    </form>

    <description-field
      v-for="index in addCounter"
      :key="index"
      :v-show="showAddModal"
      @cancel="afterDescription('cancel')"
      @success="afterDescription('success')"
      @remove="handleRemove()"
    />

    <button
      type="button"
      class="create-event-button-add-section"
      @click="handleAdd()"
    >
      + Add new Section
    </button>

    <button
      type="button"
      class="create-event-button-publish"
      @click="submit()"
      href="Dashboard"
    >
      Publish event
    </button>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/dark.css'
import DescriptionField from '@/components/CreateEventDescriptionField.vue'
import { ValidationProvider } from 'vee-validate'
import EventService from '@/services/EventService.vue'
// import RotatingBg from '@/components/special/RotatingBg.vue'

export default {
  components: {
    flatPickr,
    DescriptionField,
    ValidationProvider,
    // RotatingBg,
    // EventService
  },
  data() {
    return {
      model: {
        title: '',
        address: '',
        startTime: '',
        endTime: '',
        lat: '',
        lng: '',
        description: '',
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
        dateFormat: 'd-m-Y H:i',
      },
    }
  },

  methods: {
    handleInput(value) {
      this.model.address = value
    },
    setAddress(address) {
      if (!(address instanceof InputEvent)) {
        this.model.address = address
        // console.log(this.$route.params.id_token)

        this.$refs.provider.reset()
        // router.push({ path: "/dashboard"})
        // router.push({ name: "dashboard"})
      } else {
        this.$refs.provider.applyResult({
          errors: ['Please fill in this field.'],
          valid: false,
          failedRules: {},
        })
      }
    },
    handleAdd() {
      this.addCounter++
    },
    afterDescription() {
      this.showAddModal = false
    },
    handleRemove() {
      this.addCounter--
    },
    submit() {
      const event = {
        title: this.model.title,
        address: this.model.setAddress,
        startTime: this.model.startTime,
        endTime: this.model.endTime,
        lat: this.model.lat,
        lng: this.model.lng,
        description: this.model.description,
      }
      // console.log(this.$store.getters["getToken"]);
      EventService.create(event, this.$store.getters['getToken'])
        .then(() => {
          // console.log(r);
          // let token = this.$store.getters.getToken
          // console.log(token)
          this.$router.push({ path: '/dashboard' })
          this.$router.push({ name: 'dashboard' })
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
$create-event-styles: (
  base: container mt-2 ph-1 box,
  title: title bold text-center,
  field: mt-1,
  field-small: (
    extend: inline-block box w-1-1 s_w-1-2 mt-1,
    left: s_pr-0p5,
    right: s_pl-0p5,
  ),
  input: block bg-black-transparent-66 w-1-1 p-0p5 mt-0p5,
  label: text,
  error: inline float-right color-red-600,
  button: (
    extend: block w-1-1,
    add-section: color-white mt-2 pv-0p75 transition transition-bg
      bg-white-transparent-05--hover bg-white-transparent-08--active,
    publish: button-purple fillet pv-1p5 mt-3,
  ),
);

.create-event {
  @include extendMap($create-event-styles);
}

.create-event-button-add-section {
  border: dashed 2px #fff;
}
</style>
