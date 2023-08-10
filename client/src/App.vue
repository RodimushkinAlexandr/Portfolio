<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';



</script>

<template>
  <div class="wrapper">
    <header>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
  </header>
  <RouterView />
  </div>
</template>

<style scoped>
  .wrapper{
    width: 100vw;
    height: 100vh;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    padding: 20px;
    margin: 20px;
    background-color: blue;
  }
</style>
