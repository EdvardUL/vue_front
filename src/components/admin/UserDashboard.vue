<template>
    <div>
      <table class="two-colored-table">
    <thead>
      <tr>
        <th>Имя</th>
        <th>Номер телефона</th>
        <th>Почта</th>
        <th>Рейтинг</th>
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
        <td>{{ item.Rating }}</td>
        <td><button @click="deleteItem(item.ID)">Удалить</button></td>
        <td><button @click="activateComponent()">Обновить</button></td>
      </tr>
    </tbody>
  </table>
    </div>
    <my-component v-if="isActive" :ID="index"></my-component>
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
    const token = localStorage.getItem('token_admin')
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
  