<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponen from '../Headers/HeaderComponent/HeaderComponen.vue';
import { WeatherStore } from '@/stores/Weather';
import WeatherInfo from '../Weather/WeatherInfo.vue';
const showComponent = ref<boolean>(true)

const weatherStore = WeatherStore()

const myCity = weatherStore.getWeatherMyCity()
weatherStore.queryCity = myCity
weatherStore.getWeatherData()

</script>

<template>
    <section class="weather" :class="weatherStore.weather?.weatherType.toLocaleLowerCase()">
        <HeaderComponen :color="'#394C60'" v-model:show="showComponent" :router="'Weather'" :text="'Weather'" :icon="'mdi mdi-weather-cloudy'" />
        <main class="weather__main main-main" :class="{margin: showComponent}">
            <transition name="main" mode="out-in">
                <div class="weather__blocks blocks" v-if="showComponent">
                    <div class="weather__block">
                        <WeatherInfo 
                            v-if="weatherStore.weather" 
                            :main="true" 
                            :weather="weatherStore.weather" 
                            :date="weatherStore.dateBuilder()"
                            class="weatherInfo" />
                    </div>
                </div>
            </transition>
        </main>
    </section>
</template>

<style lang="scss" >
    .costMain__block{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .costMain__total{
        span{
            display: inline;
        }
    }

    .weather{
        &.rain {
            background-color: #556679;
            color: aliceblue;
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
    }
</style>