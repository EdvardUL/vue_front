
<template>
    <div>
      <h2>JSON Data</h2>
      <ul>
        <li v-for="data in jsonData" :key="data.id">
          <p>ID: {{ data.id }}</p>
          <p>Name: {{ data.name }}</p>
          <p>Age: {{ data.age }}</p>
        </li>
      </ul>
    </div>
    <a href="http://localhost:8082/db/InnowiseTaxi/logs">mongo logs</a>
    <a href="http://localhost:3000/d/FDB061FMz/gin-application-metrics?orgId=1&refresh=5s">metrics</a>
  </template>
<script>
export default {
  data() {
    return {
      jsonData: [
        { id: 1, name: 'John', age: 28 },
        { id: 2, name: 'Jane', age: 35 },
        { id: 3, name: 'Bob', age: 42 },
        { id: 4, name: 'Alice', age: 25 }
      ]
    }
  }
}
</script>