<template>

<div class="container" id="dashboard-page">
    <div class="row">

      <div class="col-md-8 offset-md-2" id="dashboard-wrapper">
        <div class="row">

          <div class="col-md-6">
          
            <ul class="event-list">
              <h3>My Created Events</h3>
              <li class="event-list-item" repeat="event in dashboard.hostingEvents">
                <h5><a style="cursor: pointer;"  href="#/event/event.id">model.title</a></h5>
                <p><img src="img/time.png">model.start_date | date : 'dd MMMM yyyy HH:mm'</p>
                <p><img src="img/location.png">model.address</p>
              </li>
            </ul>

          </div>

          <div class="col-md-6">
          
            <ul class="event-list">
              <h3>My RSVP'd Events</h3>
              <li class="event-list-item" repeat="event in dashboard.attendingEvents">
                <h5><a style="cursor: pointer;" href="#/event/event.id">model.title</a></h5>
                <p><img src="img/time.png">model.start_date | date : 'dd MMMM yyyy HH:mm' </p>
                <p><img src="img/location.png">model.address</p>
              </li>
            </ul>

          </div>
        
        </div>
      </div>

  </div>
</div>
    
</template>

<script>
import EventService from '@/services/EventService.vue'
import createEvent from '@/components/Create_event.vue'

export default {
  components: {
    createEvent,
  },
  data() {
    return {
      propsToSearch: ['tittle', 'startTime', 'endTime', 'address'],
      tableColumns: [
        {
          prop: 'tittle',
          label: 'Title',
          minWidth: 120,
          sortable: true
        },
        {
          prop: 'startTime',
          label: 'Start Time',
          minWidth: 120,
          sortable: true
        },
        {
          prop: 'endTime',
          label: 'End Time',
          minWidth: 120,
          sortable: true
        },
        {
          prop: 'address',
          label: 'Address',
          minWidth: 120,
          sortable: true
        }
      ],
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents(){
      EventService.getEvents().then((r) => {
      this.tableData = r.data;
          this.reinitializeSearch(this.propsToSearch);
        }).catch(error => {

        });
    }
  }
}
</script>