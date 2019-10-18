<script>
import client from '@/util/client';

export default {
  create (event) {
    console.log(this.$store("getToken", r.data.id))
    return client.post('/api/users/' + r.data.id + '/events', event);
  },
  getEvent (id) {
    return client.get('/api/users/' + r.data.id + '/events/' + id);
  },
  getEvents (event){
    return client.get('/api/users/' + this.$store.getters.getToken + '/events', event);
  }
}

</script>