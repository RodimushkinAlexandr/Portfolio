<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponen from '../Headers/HeaderComponent/HeaderComponen.vue';
import { WeatherStore } from '@/stores/Weather';
import WeatherInfo from '../Weather/WeatherInfo.vue';
import { SettingsStore } from '@/stores/Settings';
import router from '@/router';
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue';

const showComponent = ref<boolean>(true)

const weatherStore = WeatherStore()
const settingsStore = SettingsStore()

const colorProps = ref<boolean>(false)
const myCity = settingsStore.user.city
weatherStore.queryCity = myCity

;(async function() {
    if(myCity.length) await weatherStore.getWeatherData()
    if(weatherStore.weather?.weatherType == 'Dust' || weatherStore.weather?.weatherType == 'Clear') colorProps.value = true
})()

const routerlink = () => {
    router.push('/Settings')
}
</script>

<template>
    <section class="weatherMain" :class="weatherStore.weather?.weatherType.toLocaleLowerCase()">
        <HeaderComponen :color="'#394C60'" v-model:show="showComponent" :router="'Weather'" :weatherSun="colorProps" :text="'Weather'" :icon="'mdi mdi-weather-cloudy'" />
        <main class="weatherMain__main main-main" :class="{margin: showComponent}">
            <transition name="main" mode="out-in">
                <div class="weatherMain__blocks blocks" v-if="showComponent">
                    <div v-if="!myCity" class="noMyCity weatherMain__block">
                        <p>Choose your City</p>
                        <MyBtnSearchPush @click="routerlink">Settings</MyBtnSearchPush>
                    </div>
                    <div class="weatherMain__block">
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
    .noMyCity{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .weatherMain{
        &.rain {
            background-color: #556679;
            color: aliceblue;
        }
        &.clear {
            background-color: #f3ce59;
            color: aliceblue;
        }
        &.dust {
            background-color: #f3ce59;
            color: aliceblue;
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