<template>
  <NavBarUser></NavBarUser>
  <div>
    <h2>Регистрация пользователя</h2>
    <div class="container">
      <input v-model="name" class="input" type="email" placeholder="Имя" />
      <input
        v-model="phonenumber"
        class="input"
        type="email"
        placeholder="Номер телефона" />
      <input v-model="email" class="input" type="email" placeholder="Почта" />
      <input
        v-model="password"
        class="input"
        type="password"
        placeholder="Пароль" />
      <button class="auth-button" @click="submitForm()">Зарегистрироваться</button>
    </div>
  </div>
  <p v-text="message"></p>
  <div v-if="errorLog">
    <user-not-found />
  </div>
</template>
<script>
import axios from "axios";
import UserNotFound from "./UserNotFound.vue";
import NavBarUser from "./NavBarUser.vue";
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
    NavBarUser,
    UserNotFound,
  },
  methods: {
    submitForm() {
      this.errorLog = false;
      const formData = {
        name: this.name,
        phonenumber: this.phonenumber,
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:8084/auth/signup", formData)
        .then((response) => {
          this.errorLog = false;
          console.log(response);
          this.$router.push("/user-auth");
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
