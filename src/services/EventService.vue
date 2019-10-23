<script>
import client from '@/util/client';

export default {
  create (event, id) {
    return client.post('/api/users/' + id + '/events', event);
  },
  getEvent (id) {
    return client.get('/api/users/' + id + '/events/');
  },
  getEvents (event, id){
    return client.get('/api/users/' + id  + '/events', event);
  }
}

</script>