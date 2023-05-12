<template>
    <div>
        Name: {{ items.name }}
        <p></p>
        PhoneNumber: {{ items.phonenumber }}
        <p></p>
        Email: {{ items.email }}
        <p></p>
        Rating: {{ items.rating }}
    </div>
    <button>Order</button>
    <button>Update</button>
    <button>Delete</button>
    <button>All orders</button>
    <button>rate</button>
    <div v-if="error">
      <error-component :error="error" />
    </div>
  </template>
  
  <script>
  import ErrorComponent from './../ErrorComp.vue';
  import axios from 'axios'
  export default {
  data() {
    return {
      items: [],
      isActive:false,
      error:null
    };
  },
  components: {
    ErrorComponent
  },
  created() {
    const token = localStorage.getItem('token')
    const user_id = localStorage.getItem('user_id')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const reqId = {
        ID:Number(user_id)
    }
    axios.post('http://localhost:8084/users/retrieve',reqId)
      .then(response => {
        console.log(response.data)
        this.items = response.data;
        console.log(this.items)

      })
      .catch(error => {
        this.error = error
      });
    }

  }
  </script>