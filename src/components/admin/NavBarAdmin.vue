<template>
    <nav>
      <ul>
        <li><router-link to="/order-taxi">Order taxi</router-link></li>
        <li><router-link to="/user">Profile</router-link></li>
        <li v-if="isAuthenticated"><a href="#" @click="logout">Logout</a></li>
        <li v-else><router-link to="/user-auth">Login</router-link></li>
        <li><router-link to="/admin-info">Info</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false, // Set the initial authentication status
      };
    },
    methods: {
      logout() {
        // Perform logout logic
        // Set isAuthenticated to false and navigate to the login page
        this.isAuthenticated = false;
        localStorage.removeItem("token_admin");
        this.$router.push("/user-auth");
      },
    },
    created() {
      const token = localStorage.getItem("token_admin");
      if (token != "") {
        this.isAuthenticated = true;
      }
    },
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #808080;
    padding: 10px;

  }
  
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }
  
  li {
    margin: 0 10px;
  }
  
  a {
    text-decoration: none;
    color: #3b3b3b;
  }
  
  a:hover {
    color: #000000;
  }
  </style>
  