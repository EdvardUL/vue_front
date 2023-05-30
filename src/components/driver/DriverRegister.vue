<template>
  <NavBarDriver></NavBarDriver>
  <div>
    <h2>Регистрация Водителя</h2>
    <div class="container">
      <input v-model="name" class="input" type="email" placeholder="Имя" />
      <input
        v-model="phonenumber"
        class="input"
        type="email"
        placeholder="phonenumber" />
      <input v-model="email" class="input" type="email" placeholder="Почта" />
      <input
        v-model="password"
        class="input"
        type="password"
        placeholder="Пароль" />
      <select v-model="taxitype" class="input">
        <option value="" disabled selected>Тип такси</option>
        <option value="Econom">Эконом</option>
        <option value="Comfort">Комфорт</option>
        <option value="Business">Бизнесс</option>
      </select>
      <button class="auth-button" @click="submitForm()">Зарегистрировать</button>
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
import NavBarDriver from "./NavBarDriver.vue";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      taxitype: "",
      error: '',
    };
  },
  components: {
    ErrorComponent,
    NavBarDriver,
  },
  methods: {
    submitForm() {
      this.errorLog = false;
      const formData = {
        name: this.name,
        phonenumber: this.phonenumber,
        email: this.email,
        password: this.password,
        taxitype: this.taxitype,
      };
      axios
        .post("http://localhost:8085/auth/signup", formData)
        .then((response) => {
          this.errorLog = false;
          console.log(response);
          this.$router.push("/driver-auth");
        })
        .catch((response) => {
          this.error = response;
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
