<template>
    <div>
      <h1>User Profile</h1>
      <div v-if="user">
        <!-- display user profile information -->
      </div>
      <div v-else>
        <user-not-found></user-not-found>
      </div>
    </div>
  </template>
  
  <script>
  import UserNotFound from './UserNotFound.vue'
  
  export default {
    components: {
      UserNotFound
    },
    data() {
      return {
        user: null
      }
    }
  }
  </script>