<template>
    <div>
    <ul>
      <li v-for="data in items" :key="data.ID">
        <p>
        TaxiType: {{ data.TaxiType }}
        Driver: {{ data.Driver }}
        From: {{ data.From }}
        To: {{ data.To }}
        User: {{ data.User }}
        Date: {{ data.Date }}
        <button @click="deleteItem(data.ID)">Delete</button>
        <button @click="remakeItem(data.ID)">Update</button>
        </p>
      </li>
    </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.get('http://localhost:8083/admin/allorders')
      .then(response => {
        this.items = response.data;
        
      })
      .catch(error => {
        console.error(error);
      });
  }
};
  </script>