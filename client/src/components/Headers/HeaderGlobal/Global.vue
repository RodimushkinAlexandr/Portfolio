<script setup lang="ts">
import { ref } from 'vue';
import headerDesktop from './toDesktopGlobal.vue'
import headerPhone from './toPhoneGlobal.vue'
import { onUnmounted } from 'vue';

let desktopLayout = ref<boolean>(false)

const onResize = () => {
  desktopLayout.value = window.innerWidth > 700
}

window.addEventListener('resize', onResize);
onResize()
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  
})

</script>

<template>
    <headerDesktop v-if="desktopLayout"/>
    <headerPhone v-else />
</template>

<style>
    
</style>