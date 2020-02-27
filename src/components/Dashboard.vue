<template>
  <div class="dashboard">
    <div>
      <h3 class="dashboard-card-title">My Created Events</h3>
      <ul class="dashboard-list">
        <li v-for="event in Events" v-bind:key="event">
          <h4>
            <a class="dashboard-list-item-title" href="#/event/event.id">model.title</a>
          </h4>
          <div class="dashboard-list-item-content">
            <p>
              <img src="img/time.png" />model.start_date | date : 'dd MMMM
              yyyy HH:mm'
            </p>
            <p>
              <img src="img/location.png" />model.address
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="dashboard-card-title">My RSVP'd Events</h3>
      <ul class="dashboard-list">
        <li repeat="event in dashboard.attendingEvents">
          <h4>
            <a class="dashboard-list-item-title" href="#/event/event.id">model.title</a>
          </h4>
          <div class="dashboard-list-item-content">
            <p class="dashboard-list-item-field">
              <img src="img/time.png" />model.start_date | date : 'dd MMMM
              yyyy HH:mm'
            </p>
            <p class="dashboard-list-item-field">
              <img src="img/location.png" />model.address
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    // CreateEvent,
    // EventService,
  },
  data() {
    return {
      propsToSearch: ['title', 'startTime', 'endTime', 'address'],
      tableColumns: [
        {
          prop: 'title',
          label: 'Title',
          minWidth: 120,
          sortable: true,
        },
        {
          prop: 'startTime',
          label: 'Start Time',
          minWidth: 120,
          sortable: true,
        },
        {
          prop: 'endTime',
          label: 'End Time',
          minWidth: 120,
          sortable: true,
        },
        {
          prop: 'address',
          label: 'Address',
          minWidth: 120,
          sortable: true,
        },
      ],
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    getEvents() {
      // console.log(this.$store.getters['getToken'])
      // EventService.getEvents(event, this.$store.getters['getToken'])
      //   .then(() => {
      // console.log(r)
      // console.log(events)
      // let token = this.$store.getters.getToken
      // console.log(token)
      // })
      // .catch(() => {})
    },
  },
}
</script>

<style scoped lang="scss">
$dashboard-styles: (
  base: container-large grid gtc-1 m_gtc-1-1 gtr-auto grid-gap-1,
  card: w-1-1,
  card-title: title-small bold,
  list: mt-1 grid gtc-1 gtr-auto grid-gap-1,
  list-item-title: ph-1 pv-0p5 w-1-1 block bg-black box,
  list-item-content: pb-1 ph-1 bg-black-transparent-50,
  list-item-field: pt-1 grid gtc-a-1 grid-gap-1 flex-mid,
);

.dashboard {
  @include extendMap($dashboard-styles);
}
</style>
