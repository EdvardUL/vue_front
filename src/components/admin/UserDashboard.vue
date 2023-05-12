<template>
    <div>
    <ul>
      <li v-for="data in items" :key="data.ID">
        <p>
        Name: {{ data.Name }}
        PhoneNumber: {{ data.PhoneNumber }}
        Email: {{ data.Email }}
        Rating: {{ data.Rating }}
        <button @click="deleteItem(data.ID)">Delete</button>
        <button @click="activateComponent()">Update</button>
        <my-component v-if="isActive" :ID="data.ID"></my-component>
        </p>
      </li>
    </ul>
    </div>
    <div v-if="error">
      <error-component :error="error" />
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import upduser from './UpdateUser.vue';
  import ErrorComponent from './../ErrorComp.vue';
  export default {
  data() {
    return {
      items: [],
      isActive:false,
    };
  },
  components: {
    'my-component': upduser,
     ErrorComponent
  },
  methods: {
  activateComponent() {
      this.isActive = !this.isActive;
  },
  deleteItem(reqID) {
    const formData = {
      ID: reqID,
    }
    axios.post('http://localhost:8083/admin/dlt/user', formData)
      .then(
        location.reload()
      )
      .catch(error => {
        this.error = error
      })
  },
    },
  created() {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.get('http://localhost:8083/admin/allusers')
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
  </script>