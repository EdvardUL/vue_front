<template>
  <NavBar></NavBar>
  <table class="two-colored-table">
    <thead>
      <tr>
        <th>Тип такси</th>
        <th>Отправка</th>
        <th>Прибытие</th>
        <th>Способ оплаты</th>
        <th>Дата</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
        :class="index % 2 === 0 ? 'even' : 'odd'">
        <td>{{ item.TaxiType }}</td>
        <td>{{ item.From }}</td>
        <td>{{ item.To }}</td>
        <td>{{ item.Payment }}</td>
        <td>{{ item.Date }}</td>
      </tr>
    </tbody>
  </table>
  <div v-if="error">
    <error-component :error="error" />
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./NavBarDriver.vue";
import ErrorComponent from "./../ErrorComp.vue";
export default {
  data() {
    return {
      reqID: 0,
      items: [],
      error: null,
    };
  },
  components: {
    ErrorComponent,
    NavBar,
  },
  created() {
    const token = localStorage.getItem("token_driver");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const userID = localStorage.getItem("driver_id");
    const reqId = {
      id: Number(userID),
    };
    axios
      .post("http://localhost:8085/drivers/allorders", reqId)
      .then((response) => {
        this.items = response.data;
        console.log(response);
      })
      .catch((error) => {
        this.error = error;
      });
  },
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
