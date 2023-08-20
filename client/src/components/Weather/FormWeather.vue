<script setup lang="ts">
import { WeatherStore } from '@/stores/Weather';
import InputTextValidate from '../UI/inputTextValidate.vue';

const weatherStore = WeatherStore()

const rulesCity = (value: string) => {

}

weatherStore.getWeatherMyCity()
    
</script>

<template>
    <!-- <InputTextValidate placeholder="City weather search" :value="weatherStore.queryCity"  /> -->
</template>

<style lang="">
    
</style>