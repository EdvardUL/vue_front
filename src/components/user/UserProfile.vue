<template>
  <nav-bar></nav-bar>
  <div class="horizontal-container">
    <div class="user-image">
      <img src="./../../assets/profile-icon-9.png" alt="User Image" />
    </div>
    <div class="user-details">
      <div class="detail-row">
        <span class="label">Имя:</span>
        <span>{{ items.name }}</span>
      </div>
      <div class="detail-row">
        <span class="label">Номер телефона:</span>
        <span>{{ items.phonenumber }}</span>
      </div>
      <div class="detail-row">
        <span class="label">Почта:</span>
        <span>{{ items.email }}</span>
      </div>
      <div class="detail-row">
        <span class="label">Рейтинг:</span>
        <span>{{ items.rating }}</span>
      </div>
    </div>
  </div>
  <div class="button-container">
    <button @click="relocateToOrderCreation()">Заказать такси</button>
    <button @click="activateUpdateComponent()">Обновить профиль</button>
    <button @click="activateDeleteComponent()">Удалить аккаунт</button>
    <button @click="relocateToOrders()">Список заказов</button>
    <button @click="activateLastOrderRating()">Оценить последний заказ</button>
  </div>
  <div v-if="error">
      <error-component :error="error" />
    </div>
  <upd v-if="isUpdActive" :data = "items"></upd>
  <rate-order v-if="isRateSystemActive"></rate-order>
  <delete-user v-if="isDltActive"></delete-user>
</template>

<script>
import DeleteUser from "./DeleteUser.vue";
import RateOrder from "./RateLastOrder.vue";
import NavBar from "./NavBarUser.vue";
import ErrorComponent from "./../ErrorComp.vue";
import UserUpdate from "./UserUpdate.vue";
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
    NavBar,
    ErrorComponent,
    upd: UserUpdate,
    DeleteUser,
    RateOrder,
  },
  methods: {
    activateUpdateComponent() {
      this.isUpdActive = !this.isUpdActive;
      console.log(this.items)
    },
    activateDeleteComponent() {
      this.isDltActive = !this.isDltActive;
    },
    activateLastOrderRating() {
      this.isRateSystemActive = !this.isRateSystemActive;
    },
    relocateToOrders() {
      this.$router.push("/user-orders");
    },
    relocateToOrderCreation() {
      this.$router.push("/order-taxi");
    },
  },
  created() {
    const token = localStorage.getItem("token_user");
    const user_id = localStorage.getItem("user_id");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const reqId = {
      ID: Number(user_id),
    };
    console.log(reqId);
    axios
      .post("http://localhost:8084/users/retrieve", reqId)
      .then((response) => {
        console.log(response.data);
        this.items = response.data;
        console.log(this.items);
      })
      .catch((error) => {
        console.log(error);
        this.error = error;
        if (
          String(error.response.data).includes("server error token is expired")
        ) {
          this.$router.push("/user-auth");
        }
      });
  },
};
</script>

<style scoped>
.horizontal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-image {
  margin-right: 10px;
}

.user-image img {
  width: 100px;
  height: 100px;
}

.user-details {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
}

.detail-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
}

span {
  color: #333;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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
