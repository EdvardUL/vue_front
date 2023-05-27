<template>
  <div><button @click="SortByTaxiType">sort by taxi type</button></div>
  <div><button @click="SortByFrom">sort by start location</button></div>
    <div>
      <table class="two-colored-table">
    <thead>
      <tr>
        <td>id</td>
        <th>TaxiType</th>
        <th>Driver</th>
        <th>From</th>
        <th>To</th>
        <th>User</th>
        <th>Date</th>
        <th>-</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
        :class="index % 2 === 0 ? 'even' : 'odd'">
        <td>{{ item.ID }}</td>
        <td>{{ item.TaxiType }}</td>
        <td>{{ item.Driver }}</td>
        <td>{{ item.From }}</td>
        <td>{{ item.To }}</td>
        <td>{{ item.User }}</td>
        <td>{{ item.Date }}</td>
        <td><button @click="deleteItem(item.ID)">Delete</button></td>
      </tr>
    </tbody>
  </table>
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
  SortByTaxiType(){
    return this.items.sort((a, b) => a.TaxiType.localeCompare(b.TaxiType));
  },
  SortByFrom(){
    return this.items.sort((a, b) => a.From.localeCompare(b.From));
  },
  },
  created() {
    const token = localStorage.getItem('token_admin')
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

<style scoped>
.two-colored-table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}

tr.even {
  background-color: #ffffff;
}

tr.odd {
  background-color: #f9f9f9;
}
</style>