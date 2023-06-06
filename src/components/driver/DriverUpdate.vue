<template>
  <NavBarUser></NavBarUser>
  <div class="container">
    <input v-model="name" class="input" type="name" placeholder="Имя" />
    <input
      v-model="phonenumber"
      class="input"
      type="phonenumber"
      placeholder="Номер телефона" />
    <input v-model="email" class="input" type="email" placeholder="Почта" />
    <input
      v-model="password"
      class="input"
      type="text"
      placeholder="Пароль" />
    <select v-model="taxitype" class="input">
      <option value="" disabled selected>Тип такси</option>
      <option value="Econom">Эконом</option>
      <option value="Comfort">Комфорт</option>
      <option value="Business">Бизнесс</option>
    </select>
    <button class="auth-button" @click="submitForm()">Подтвердить</button>
  </div>
  <div v-if="error">
    <error-component :error="error" />
  </div>
</template>

<script>
import axios from "axios";
import ErrorComponent from "./../ErrorComp.vue";
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: this.data.name,
      phonenumber: this.data.phonenumber,
      email: this.data.email,
      message: "",
      password: "",
      taxitype: this.data.taxitype,
      error: "",
    };
  },
  components: {
    ErrorComponent,
  },
  methods: {
    submitForm() {
      const user_id = localStorage.getItem("driver_id");
      const formData = {
        id: Number(user_id),
        name: this.name,
        phonenumber: this.phonenumber,
        email: this.email,
        password: this.password,
        taxitype: this.taxitype,
      };
      console.log(formData);
      axios
        .post("http://localhost:8085/drivers/update", formData)
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch((error) => {
          console.log(error);
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
