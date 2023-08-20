<script setup lang="ts">
import FormWeather from '@/components/Weather/FormWeather.vue';

// import WeatherQuery from '@/components/Weather/WeatherQuery.vue'
// import WeatherNoInfo from '@/components/Weather/WeatherNoInfo.vue'
// import WeatherInfo from '@/components/Weather/WeatherInfo.vue'
// import { mapActions, mapGetters, mapMutations } from 'vuex'


// export default {
//     data() {
//         return {
//             clear: true
//         }
//     },
//     methods: {
//         ...mapActions(['getWeatherData', 'dateBuilder', ]),
//         ...mapMutations(['setQueryCity', 'setWeather', 'setKind']),
//         queryWeather() {
//             this.getWeatherData()
//             this.dateBuilder()

//         }
//     },
//     computed: {
//         ...mapGetters(['getWeather', 'getQueryCity', 'getDate', 'getKind', 'getErrorWeather', 'getNoInfo']),
//         queryCity: {
//             get() {
//                 return this.getQueryCity
//             },
//             set(value) {
//                 this.setQueryCity(value)
//             }
//         },

//     },
//     components: {
//         WeatherQuery, WeatherNoInfo, WeatherInfo
//     },
//     created() {
//         this.setWeather()
//         this.setKind('')
//     },
// }
</script>
<template>
    <FormWeather />
    <!-- <div class="container noMaxWidth">
        <div class="weather">
            <div class="weather__container" :class="getKind">
                <div class="container">
                    <WeatherQuery v-model:queryCity="queryCity" @queryWeather="queryWeather" />
                    <div class="pos__relativ">
                        <transition-group name="listInfo" mode="out-in">
                            <Error-User-Request class="error pos__absolute" v-if="getErrorWeather" />
                            <WeatherInfo class="pos__absolute" v-else-if="getWeather" :weather="getWeather" :getDate="getDate" />
                            <WeatherNoInfo class="noInfo pos__absolute" v-else-if="getNoInfo" />
                        </transition-group>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>


    
<style lang="scss" scoped>

.weather{
    position: relative;


    .pos__relativ{
        position: relative;
        margin-top: 50px;

        .pos__absolute{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }
    }

    .weather__container{
        position: absolute;
        z-index: 1000;
        height: 100vh;
        margin: -50px -15px -30px -20px;
        padding: 30px 15px 0px 15px;
        top: 0;
        left: 0px;
        right: 0px;
        bottom: 0px;
        transition: all ease-out 1s;
        background-color: #121416;

        &.rain {
            background-color: #556679;
        }
        &.clear {
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
}

.noMaxWidth{
    max-width: 100%;
}

.listInfo-move,
.listInfo-enter-active,
.listInfo-leave-active {
    transition: all .3s ease-out .1s;
}


.listInfo-leave-to {
    opacity: 0;
    transform: translateX(500px);
}
.listInfo-enter-from {
  opacity: 0;
  transform: translateX(-500px);
}

.listInfo-leave-active {
    // position: absolute;
}


</style>