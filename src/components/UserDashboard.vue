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
        <button @click="remakeItem(data.ID)">Update</button>
        <my-component v-if="isActive" :ID="data.ID"></my-component>
        </p>
      </li>
    </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import upduser from './UpdateUser.vue';
  export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    'my-component': upduser
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