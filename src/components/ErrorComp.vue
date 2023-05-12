<template>
    <div>
      <div class="error-container" v-if="error">
        <h1>Error {{ error.response.status }}</h1>
        <p>{{ error.response.data }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['error']
  };
  </script>

<style>
.error-container {
  background-color: rgba(255, 0, 0, 0.5); /* Red half-transparent background */
  padding: 20px;
}
</style>