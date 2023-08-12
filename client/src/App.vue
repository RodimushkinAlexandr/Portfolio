<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue';
import headerGlobal from './components/header-global/headerGlobal.vue';
import router from './router';
import { AuthStore } from './stores/Auth';
import { watch } from 'vue';

const authStore = AuthStore()
if (!authStore.isAuth) {
router.push({ path: '/Authorization' })
} 

watch(authStore, () => {
 if(authStore.isAuth) {
    router.push({path: '/'})
  }
})



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
