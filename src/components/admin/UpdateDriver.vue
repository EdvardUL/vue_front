<template>
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
      <input
      v-model="rating"
      class="input"
      type="text"
      placeholder="Рейтинг" />
    <button class="auth-button" @click="submitForm()">Подтвердить</button>
  </div>
  <div v-if="error">
    <error-component :error="error" />
  </div>
</template>

<script>
import axios from 'axios'
import ErrorComponent from './../ErrorComp.vue';
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    name: this.data.Name,
    phonenumber: this.data.PhoneNumber,
    email: this.data.Email,
    message: '',
    rating:this.data.Rating
    }
  },
  components: {
    ErrorComponent
  },
  methods: {
  submitForm() {
    const formData = {
      ID: Number(this.data.ID),
      name: this.name,
      phonenumber:this.phonenumber,
      email: this.email,
      rating: Number(this.rating)
    }
    axios.post('http://localhost:8083/admin/upd/driver', formData)
      .then(
        location.reload()
      )
      .catch(error => {
        console.log(error)
        this.message = 'error!'
      })
  }
  }
}

</script>