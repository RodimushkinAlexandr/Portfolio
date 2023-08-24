<script setup lang="ts">
import ErorSearch from '@/components/UI/ErorSearch.vue';
import FormInputButton from '@/components/UI/FormInputButton.vue';
import { WeatherStore } from '@/stores/Weather';
import NoInfo from '@/components/Weather/NoInfo.vue'
import WeatherInfo from '@/components/Weather/WeatherInfo.vue';


const weatherStore = WeatherStore()
const searchCity = () => {
    weatherStore.getWeatherData(weatherStore.queryCity)
    weatherStore.queryCity = ''
}

const date = weatherStore.dateBuilder()

</script>
<template>
    <div class="weather" :class="weatherStore.weather?.weatherType.toLocaleLowerCase()">
      <div class="container">
        <FormInputButton 
            v-model:value="weatherStore.queryCity" 
            :valueButton="'Search'" 
            :placeholder="'Search City'"
            @submit="searchCity" 
            class="form__weather"/>
        <div class="pos__relativ">
        <transition-group name="list" tag="div">
            <WeatherInfo :key="1" v-if="weatherStore.weather != null" :weather="weatherStore.weather" :date="date" />
            <ErorSearch :key="2" v-else-if="weatherStore.weatherEror.length" :text="weatherStore.weatherEror" />
            <NoInfo :key="3" v-else class="noInfo pos__absolute" />
        </transition-group>
        </div>
      </div>
    </div>
</template>


    
<style lang="scss" scoped>

.weather{
    position: relative;
    min-height: 100vh;
    margin: -50px -10px 0px -10px;
    padding: 50px 10px 0px 10px;
    transition: all ease-out 1s;
    background-color: #121416;
    color: #fff;

        &.rain {
            background-color: #556679;
        }
        &.clear {
            background-color: #f3ce59;
        }
        &.dust {
            background-color: #f3ce59;
        }
        &.clouds {
            background-color: #E4E8F4;
            color: #394C60;
        }
        &.haze {
            background-color: #7B7C81;
        }
        &.snow{
            background-color: #4D8FC3;
        }
        &.windy {
            background-color: #D4DBE2;
        }
    .form__weather{
        margin-bottom: 30px;
    }
}

.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>