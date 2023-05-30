<template>
  <div>
    <button class="delete-button" @click="showAlert">Удалить аккаунт</button>
    <div v-if="showConfirmation" class="alert">
      <p>вы уверены что хотите удалить аккаунт?</p>
      <button @click="deleteUser" class="confirm-button">Подтвердить</button>
      <button @click="cancelDelete" class="cancel-button">Закрыть</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showConfirmation: false,
    };
  },
  methods: {
    showAlert() {
      this.showConfirmation = true;
    },
    deleteUser() {
      const token = localStorage.getItem("token_user");
      const user_id = localStorage.getItem("user_id");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const formData = {
        ID: Number(user_id),
      };
      axios
        .post("http://localhost:8084/users/delete", formData)
        .then((response) => {
          console.log(response);
          localStorage.removeItem("user_id");
          localStorage.removeItem("token_user");
          this.$router.push("/user-auth");
        })
        .catch((response) => {
          this.errorLog = true;
          console.log(response);
        });
    },
    cancelDelete() {
      this.showConfirmation = false;
    },
  },
};
</script>

<style>
.delete-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.alert {
  border: 1px solid red;
  background-color: #ffdddd;
  padding: 10px;
  margin-top: 10px;
}

.confirm-button,
.cancel-button {
  margin-right: 10px;
}
</style>
