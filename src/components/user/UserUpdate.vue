<template>
  <NavBarUser></NavBarUser>
  <div>
    <input v-model="name" type="name" placeholder=""/>
    <input v-model="phonenumber" type="phonenumber" placeholder="Номер телефона" />
    <input v-model="email" type="email" placeholder="Почта" />
    <input v-model="password" type="text" placeholder="Пароль" />
    <button @click="submitForm()">Submit</button>
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
      password: this.data.password
    };
  },
  components: {
    ErrorComponent,
  },
  methods: {
    async submitForm() {
      const user_id = localStorage.getItem("user_id");
      const formData = {
        id: Number(user_id),
        name: this.name,
        phonenumber: this.phonenumber,
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      axios
        .post("http://localhost:8084/users/update", formData)
        .then((response) => {
          console.log(response);
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
