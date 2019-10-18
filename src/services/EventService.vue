<script>
import client from '@/util/client';

export default {
  create (event, id) {
    return client.post('/api/users/' + id + '/events', event);
  },
  getEvent (id) {
    return client.get('/api/users/' + r.data.id + '/events/' + id);
  },
  getEvents (event){
    return client.get('/api/users/' + this.$store.getters.getToken + '/events', event);
  }
}

</script>