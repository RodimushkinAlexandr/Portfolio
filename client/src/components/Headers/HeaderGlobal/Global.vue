<script setup lang="ts">
import { ref } from 'vue';
import headerDesktop from './toDesctopGlobal.vue'
import headerPhone from './toPhoneGlobal.vue'


const desktop = ref(true)

</script>

<template>
    <headerDesktop v-if="desktop"/>
    <headerPhone v-else />
</template>

<style>
    
</style>