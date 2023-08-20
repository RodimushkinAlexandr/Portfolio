<script setup lang="ts">
import { RouterView } from 'vue-router'
import headerGlobal from './components/Headers/HeaderGlobal/Global.vue';
import router from './router';
import { AuthStore } from './stores/Auth';


const authStore = AuthStore()

authStore.userAuthentication()

if (!authStore.isAuth) {
  router.push({ path: '/Authorization' })
} 

// watch(authStore, () => {
//  if(authStore.isAuth) {
//     router.push({path: '/'})
//   }
// })

</script>

<template>
  <div class="wrapper">
    <headerGlobal />
    
    <main class="main">
      <RouterView  />  
    </main>
  </div>
 
</template>

<style lang="scss">
  .wrapper{
    display: flex;
  }
</style>
