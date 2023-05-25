<template>
    <NavBar></NavBar>
    <div class="button-container">
      <button @click="relocateToUserDashboard()">User Dashboard</button>
      <button @click="relocateToOrderDashboard()">Order Dashboard</button>
      <button @click="relocateToDriverDashboard()">Driver Dashboard</button>
      <a href="http://localhost:8082/db/InnowiseTaxi/logs">mongo logs</a>|
      <a href="http://localhost:3000/d/FDB061FMz/gin-application-metrics?orgId=1&refresh=5s">metrics</a>
      <div v-if="error">
        <error-component :error="error" />
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "./NavBarAdmin.vue";
  import ErrorComponent from "./../ErrorComp.vue";
  import axios from "axios";
  export default {
    data() {
      return {
        items: [],
        isUpdActive: false,
        isDltActive: false,
        isRateSystemActive: false,
        error: null,
      };
    },
    components: {
      ErrorComponent,
      NavBar
    },
    methods: {
        relocateToUserDashboard() {
            this.$router.push("/user-dashboard");
      },
      relocateToOrderDashboard() {
        this.$router.push("/order-dashboard");
      },
      relocateToDriverDashboard() {
        this.$router.push("/driver-dashboard");
      },
    },
    created() {
      const token = localStorage.getItem("token_admin");
      if(token == ""){
        this.$router.push("/");
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
  };
  </script>
  
  <style scoped>
  span {
    color: #333;
  }
  
  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  