<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue';
import headerGlobal from './components/header-global/headerGlobal.vue';
import router from './router';
import { AuthStore } from './stores/Auth';

const authStore = AuthStore()

if (!authStore.isAuth) {
  router.push({ path: '/Authorization' })
}

</script>

<template>
  <div class="wrapper">
    <headerGlobal />
    <main class="main" >
      <RouterView  />  
    </main>
  </div>
 
</template>

<style lang="scss">

</style>
