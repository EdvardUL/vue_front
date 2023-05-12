<template>
    <div>
      <h2>auth</h2>
      <input v-model="email" type="email" placeholder="email">
      <input v-model="password" type="password" placeholder="password">
      <button @click="submitForm()">Submit</button>
    </div>
    <p v-text="message"></p>
    <a href="http://localhost:8082/db/InnowiseTaxi/logs">mongo logs</a>|
    <a href="http://localhost:3000/d/FDB061FMz/gin-application-metrics?orgId=1&refresh=5s">metrics</a>
  </template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
    name: '',
    email: '',
    message: ''
    }
  },
  methods: {
  submitForm() {
    const formData = {
      email: this.email,
      password: this.password
    }
    axios.post('http://localhost:8083/auth/signin', formData)
      .then(response => {
        console.log(response.data)
        this.message = 'success!'
        localStorage.setItem('token', response.data)
      })
      .catch(error => {
        console.log(error)
        this.message = 'error!'
      })
  }
  }
}

</script>