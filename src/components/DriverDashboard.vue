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
        <button @click="activateComponent()">Update</button>
        <my-component v-if="isActive" :ID="data.ID"></my-component>
        </p>
      </li>
    </ul>
    </div>
  </template>
  
  <script>
  import upddriver from './UpdateDriver.vue';
  import axios from 'axios'
  export default {
  data() {
    return {
      items: [],
      isActive:false
    };
  },
  components: {
    'my-component': upddriver
  },
  methods: {
  activateComponent() {
      this.isActive = !this.isActive;
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
        console.error(error);
      });
    }

  }
  </script>