<template>
  <div><button @click="SortByFrom()">find by taxitype</button></div>
    <div>
      <table class="two-colored-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>PhoneNumber</th>
        <th>Email</th>
        <th>TaxiType</th>
        <th>Rating</th>
        <th>-</th>
        <th>-</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
        :class="index % 2 === 0 ? 'even' : 'odd'">
        <td>{{ item.Name }}</td>
        <td>{{ item.PhoneNumber }}</td>
        <td>{{ item.Email }}</td>
        <td>{{ item.TaxiType }}</td>
        <td>{{ item.Rating }}</td>
        <td><button @click="deleteItem(item.ID)">Delete</button></td>
        <td><button @click="activateComponent()">Update</button></td>
      </tr>
    </tbody>
  </table>
    </div>
    <my-component v-if="isActive" :ID="data.ID"></my-component>
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
  SortByFrom(){
    return this.items.sort((a, b) => a.TaxiType.localeCompare(b.TaxiType));
  },
    },
  created() {
    const token = localStorage.getItem('token_admin')
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