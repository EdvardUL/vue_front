<template>
    <div>
      <input v-model="name" type="name" placeholder="Имя">
      <input v-model="phonenumber" type="phonenumber" placeholder="Номер телефона">
      <input v-model="email" type="email" placeholder="Почта">
      <input v-model="rating" type="rating" placeholder="Рейтинг">
      <button @click="submitForm()">Отправить</button>
    </div>
    <div v-if="error">
      <error-component :error="error" />
    </div>
  </template>

<script>
import axios from 'axios'
import ErrorComponent from './../ErrorComp.vue';
export default {
    props:{
        ID: Number
    },
  data() {
    return {
    name: '',
    phonenumber: '',
    email: '',
    message: '',
    rating:''
    }
  },
  components: {
    ErrorComponent
  },
  methods: {
  submitForm() {
    const formData = {
      ID: Number(this.ID),
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