<template>
  <div>
    <h2>auth</h2>
    <input v-model="email" type="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <button @click="submitForm()">Submit</button>
  </div>
  <p v-text="message"></p>
  <div v-if="errorLog">
    <user-not-found/>
  </div>
</template>
<script>
import axios from 'axios'
import UserNotFound from './UserNotFound.vue';
export default {
data() {
  return {
  name: '',
  email: '',
  message: '',
  errorLog: false
  }
},
components: {
  UserNotFound
},
methods: {
submitForm() {
  this.errorLog = false
  const formData = {
    email: this.email,
    password: this.password
  }
  axios.post('http://localhost:8084/auth/signin', formData)
    .then(response => {
      this.errorLog = false
      this.message = 'success!'
      console.log(response)
      localStorage.setItem('token_user', response.data.token)
      localStorage.setItem('user_id',response.data.id)
      this.$router.push('/user')
    })
    .catch(response => {
      this.errorLog = true
      console.log(response)
    }
    )
}
}
}

</script>