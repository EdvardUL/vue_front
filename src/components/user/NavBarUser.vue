<template>
  <nav>
    <ul>
      <li><router-link to="/order-taxi">Заказать такси</router-link></li>
      <li><router-link to="/user">Профиль</router-link></li>
      <li v-if="isAuthenticated"><a href="#" @click="logout">Выйти</a></li>
      <li v-else><router-link to="/user-auth">Войти</router-link></li>
      <li><router-link to="/user-info">Инфо</router-link></li>
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
      localStorage.removeItem("token_user");
      localStorage.removeItem("user_id");
      this.$router.push("/user-auth");
    },
  },
  created() {
    const token = localStorage.getItem("token_user");
    if (token != "") {
      this.isAuthenticated = true;
    }
  },
};
</script>

<style scoped>
nav {
  background-color: #000000;
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
  color: #858585;
}

a:hover {
  color: #ffffff;
}
</style>
