<template>
    <div>
    <ul>
      <li v-for="data in items" :key="data.ID">
        <p>
        Name: {{ data.Name }}
        PhoneNumber: {{ data.PhoneNumber }}
        Email: {{ data.Email }}
        TaxiType: {{ data.TaxiType }}
        Rating: {{ data.Rating }}
        <button @click="deleteItem(data.ID)">Delete</button>
        <button @click="activateUpdateComponent()">Update</button>
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
  import upddriver from './UpdateDriver.vue';
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
    'my-component': upddriver,
    ErrorComponent
  },
  methods: {
  activateUpdateComponent() {
      this.isActive = !this.isActive;
  },
  deleteItem(reqID) {
    const formData = {
      ID: reqID,
    }
    axios.post('http://localhost:8083/admin/dlt/driver', formData)
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
    axios.get('http://localhost:8083/admin/alldrivers')
      .then(response => {
        console.log(response.data)
        this.items = response.data;
      })
      .catch(error => {
        this.error = error
      });
    }

  }
  </script>