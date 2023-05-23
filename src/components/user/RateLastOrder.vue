<template>
    <NavBarUser></NavBarUser>
  <div class = "container">
    <input class="input" v-model="rate" type="number" placeholder="rating">
    <button class = "auth-button" @click="submitForm()">Submit</button>
  </div>
  <div v-if="error">
    <error-component :error="error" />
  </div>
</template>

<script>
import axios from 'axios'
import ErrorComponent from './../ErrorComp.vue';
export default {
data() {
  return {
  rate: '',
  error:''
  }
},
components: {
  ErrorComponent
},
methods: {
submitForm() {
  const user_id = localStorage.getItem('user_id')
  const formData = {
    id: Number(user_id),
    rate:Number(this.rate)
  }
  console.log(formData)
  axios.post('http://localhost:8084/users/rateorder', formData)
    .then(response =>{
      console.log(response)
      location.reload()
    })
    .catch(error => {
      console.log(error)
    })
}
}
}

</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  margin-bottom: 10px;
  padding: 8px;
}
.auth-button {
  background-color: #ff0000; /* Red color */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.auth-button:hover {
  background-color: #cc0000; /* Darker red color on hover */
}

.auth-button:active {
  background-color: #990000; /* Even darker red color when clicked */
}

</style>