<template>
  <nav>
    <ul>
      <li><router-link to="/order-taxi">Finish order</router-link></li>
      <li><router-link to="/driver">Profile</router-link></li>
      <li v-if="isAuthenticated"><a href="#" @click="logout">Logout</a></li>
      <li v-else><router-link to="/user-auth">Login</router-link></li>
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
      localStorage.removeItem("token_driver");
      localStorage.removeItem("driver_id");
      this.$router.push("/driver-auth");
    },
  },
  created() {
    const token = localStorage.getItem("token_driver");
    if (token != "") {
      this.isAuthenticated = true;
    }
  },
};
</script>

<style scoped>
nav {
  background-color: #c70000;
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
  color: #c0c0c0;
}

a:hover {
  color: #ffffff;
}
</style>
