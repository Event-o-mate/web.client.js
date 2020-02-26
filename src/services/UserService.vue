<script>
import client from '@/util/client'

export default {
  login(user) {
    console.log(user)
    return client.post('/api/authenticate/login', user)
  },

  register(user) {
    return client.post('/api/authenticate/register', user)
  },

  getMe() {
    // getMe (params) {
    return client.get('/api/account')
  },

  getUsers() {
    // getUsers(params) {
    return client.get('/api/users')
  },

  getUser(login) {
    return client.get('/api/users/' + login)
  },

  addUser(user) {
    return client.post('/api/users', user)
  },

  updateUser(user) {
    return client.put('/api/users', user)
  },

  deleteUser(login) {
    return client.delete('/api/users/' + login)
  },
}
</script>
