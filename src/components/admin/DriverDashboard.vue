<template>
  <div><button @click="SortByTaxiType()">Сортировка по типу такси</button>
  <button @click="SortByName()">Сортировка по имени</button>
  <button @click="SortByRating()">Сортировка по рейтингу</button></div>
  <div>
    <input class="input" type="text" v-model="reqname" placeholder="Имя водителя">
    <button @click="findElement">Найти</button>
    
    <div v-if="foundElement">
      <h3>Найденый водитель:</h3>
      <p>Почта: {{ foundElement.Email }}</p>
      <p>Номер телефона: {{ foundElement.PhoneNumber }}</p>
      <!-- Display other properties as needed -->
    </div>
    <div v-else>
      <p>Нет совпадиний с данным именем.</p>
    </div>
  </div>
    <div>
      <table class="two-colored-table">
    <thead>
      <tr>
        <th>Имя</th>
        <th>Номер телефона</th>
        <th>Почта</th>
        <th>Тип такси</th>
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
        <td>{{ item.TaxiType }}</td>
        <td>{{ item.Rating }}</td>
        <td><button @click="deleteItem(item.ID)">Удалить</button></td>
        <td><button @click="activateUpdateComponent(item.ID,index)">Обновить</button></td>
      </tr>
    </tbody>
  </table>
    </div>
    <upddriver v-if="isActive" :data = "item"></upddriver>
    <div v-if="error">
      <error-component :error="error" />
    </div>
  </template>
  
  <script>
  import Upddriver from './UpdateDriver.vue';
  import ErrorComponent from './../ErrorComp.vue';
  import axios from 'axios'
  export default {
  data() {
    return {
      items: [],
      item:[],
      isActive:false,
      error:null,
      list:[],
      reqname:'',
      foundElement:null,
      reqID:null,
    };
  },
  components: {
    Upddriver,
    ErrorComponent
  },
  methods: {
  activateUpdateComponent(id,index) {
    this.item = this.items[index];
    this.item.ID = id;
    this.isActive = !this.isActive;
  },
  findElement() {
    console.log(this.reqname)
      this.foundElement = this.items.find(element => element.Name === this.reqname);
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
  SortByTaxiType(){
    return this.items.sort((a, b) => a.TaxiType.localeCompare(b.TaxiType));
  },
  SortByName(){
    return this.items.sort((a, b) => a.Name.localeCompare(b.Name));
  },
  SortByRating(){
    return this.items.sort((a, b) => b.Rating - a.Rating);
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
      this.list = this.items;
    },
  }
  </script>

<style scoped>
  button {
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

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