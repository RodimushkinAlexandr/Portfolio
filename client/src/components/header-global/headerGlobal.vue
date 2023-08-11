<script setup lang="ts">
import { ref } from 'vue';
import headerDesktop from './headerPhoneAndDesktop/headerDesktop.vue'
import headerPhone from './headerPhoneAndDesktop/headerPhone.vue'


const desktop = ref(true)

</script>

<template>
    <headerDesktop v-if="desktop"/>
    <headerPhone v-else />
</template>

<style>
    
</style>