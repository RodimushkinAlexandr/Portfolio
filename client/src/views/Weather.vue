<script setup lang="ts">
import ErorSearch from '@/components/UI/ErorSearch.vue';
import FormInputButton from '@/components/UI/FormInputButton.vue';
import { WeatherStore } from '@/stores/Weather';
import NoInfo from '@/components/Weather/NoInfo.vue'
import WeatherInfo from '@/components/Weather/WeatherInfo.vue';

const weatherStore = WeatherStore()

weatherStore.queryCity = ''
weatherStore.weather = null

const searchCity = () => {
    weatherStore.getWeatherData()
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
            <WeatherInfo :key="1" v-if="weatherStore.weather != null" :weather="weatherStore.weather" :main="false" :date="date" />
            <ErorSearch :key="2" v-else-if="weatherStore.weatherEror.length" :text="weatherStore.weatherEror" />
            <NoInfo :key="3" v-else class="noInfo pos__absolute" />
        </transition-group>
        </div>
      </div>
    </div>
</template>


    
<style lang="scss" scoped>

.weather{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    padding: 70px 10px 0px 74px;

        &.rain {
            background-color: #556679;
        }
        &.clear {
            background-color: #f3ce59;
            color: aliceblue;
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