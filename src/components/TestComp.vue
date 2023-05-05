<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
    <router-link to="/home">Home</router-link>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue!'
      }
    }
  }
  </script>
  
  <style>
  h1 {
    color: blue;
  }
  </style>
  