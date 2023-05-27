<template>
  <NavBarUser></NavBarUser>
  <div>
    <h2>Driver Authentication</h2>
    <div class="container">
      <input v-model="email" class="input" type="email" placeholder="email" />
      <input
        v-model="password"
        class="input"
        type="password"
        placeholder="password" />
      <button class="auth-button" @click="submitForm()">Submit</button>
    </div>
  </div>
  <p v-text="message"></p>
  <div v-if="error">
    <error-component :error="error" />
  </div>
</template>
<script>
import axios from "axios";
import ErrorComponent from "./../ErrorComp.vue";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errorLog: false,
    };
  },
  components: {
    ErrorComponent,
  },
  methods: {
    submitForm() {
      this.errorLog = false;
      const formData = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:8085/auth/signin", formData)
        .then((response) => {
          this.errorLog = false;
          this.message = "success!";
          console.log(response);
          localStorage.setItem("token_driver", response.data.token);
          localStorage.setItem("driver_id", response.data.id);
          this.$router.push("/driver");
        })
        .catch((response) => {
          this.errorLog = true;
          console.log(response);
        });
    },
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  margin-bottom: 10px;
  padding: 8px;
}
.auth-button {
  background-color: #ff0000; /* Red color */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.auth-button:hover {
  background-color: #cc0000; /* Darker red color on hover */
}

.auth-button:active {
  background-color: #990000; /* Even darker red color when clicked */
}
</style>
