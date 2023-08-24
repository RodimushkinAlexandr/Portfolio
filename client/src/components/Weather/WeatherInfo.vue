<script setup lang="ts">
import type Weather from '@/types/WeatherTypes';

const props = defineProps<{
    weather: Weather
    date: string
}>()         
</script>

<template>
    <transition name="weatherInfo">
        <main v-if="weather" class="info">
            <section class="info__inf inf">
            <div class="inf__city">{{ weather.nameCity }}</div>
            <p class="inf__date">{{ date }}</p>
            </section>
            <section class="info__weather weather">
                <div class="weather__temp"><p>{{ weather.temp}}&deg</p></div>
                <div class="weather__weather"><p>{{ weather.weatherType }} 
                    <img :src="'src/assets/weather/' + (weather.weatherType.toLowerCase()) + '.svg'" class="icon" /></p></div>
            </section>
        </main>
    </transition>
</template>

<style lang="scss" scoped>

.weatherInfo-enter-active,
.weatherInfo-leave-active {
    transition: all 0.5s ease-in-out;
}

.weatherInfo-enter-from,
.weatherInfo-leave-to {
    opacity: o;
    transform: translateX(500px);
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .inf {

        gap: 10px;
        margin-bottom: 25px;

        &__city {
            font-size: 42px;
            font-weight: 500px;
            margin-bottom: 5px;

        }

        &__date {
            font-size: 36px;
            font-weight: 400;
            font-style: italic;
        }
    }


    .weather {

        &__temp {
            display: inline-block;
            font-size: 120px;
            font-weight: 500;
            background-color: rgba(#394C60, 1);
            box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.64);            
            padding: 50px 30px;
            border-radius: 15px;
            color: rgba(255, 255, 255, 0.9);
        }

        &__weather {
            font-size: 70px;
            margin-top: 12px;
            img {
                width: 38px;
                height: 38px;
            }
            
        }
    }
    @media screen and (max-width: 520px) {
        top: 140px;

        .inf {
            margin-bottom: 15px;

            &__city {
                font-size: 38px;
            }

            &__date {
                font-size: 18px;
            }
        }


        .weather {

            &__temp {
                font-size: 90px;
                padding: 38px 10px;
            }

            &__weather {
                font-size: 40px;
            }
        }
    }
}
</style>