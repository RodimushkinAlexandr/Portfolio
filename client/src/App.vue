<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import headerGlobal from './components/header-global/headerGlobal.vue';

const btn = ref(false)
</script>

<template>
  <div class="wrapper">
    <headerGlobal />
    <main class="main">
      <RouterView />  
    </main>
  </div>
 
</template>

<style lang="scss">

</style>
