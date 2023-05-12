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
  import ErrorComponent from './../ErrorComp.vue';
  export default {
  data() {
    return {
      reqID:0,
      items: [],
      error:null
    };
  },
  components: {
    ErrorComponent
  },
  methods:{
    deleteItem(reqID) {
      console.log(reqID)
    const formData = {
      ID: reqID
    }
    console.log(formData)
    axios.post('http://localhost:8083/admin/dlt/order', formData)
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
    axios.get('http://localhost:8083/admin/allorders')
      .then(response => {
        this.items = response.data;
        
      })
      .catch(error => {
        this.error = error
      });
  }
};
  </script>