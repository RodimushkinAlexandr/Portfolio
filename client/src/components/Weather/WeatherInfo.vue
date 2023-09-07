<script setup lang="ts">
import type Weather from '@/types/Weather'

export interface Props {
  weather: Weather
  date: string
  main?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  main: false
})
</script>

<template>
  <transition name="weatherInfo">
    <main v-if="weather" :class="{ weather__blocks_main: main, weather__blocks_weather: !main }">
      <section class="weather__block weather__cityDate">
        <p class="weather__block-city">
          {{ weather.nameCity }}
          <img
            v-if="main"
            :src="'src/assets/weather/' + weather.weatherType.toLowerCase() + '.svg'"
            class="icon"
          />
        </p>
        <p class="weather__block-date">{{ date }}</p>
      </section>
      <section class="weather__block weather__tempType">
        <p class="weather__block-temp">{{ weather.temp }}&deg</p>
        <p class="weather__block-type">
          {{ weather.weatherType }}
          <img
            v-if="!main"
            :src="'src/assets/weather/' + weather.weatherType.toLowerCase() + '.svg'"
            class="icon"
          />
        </p>
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

//Style view in Weather
.weather__blocks_weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .weather__block.weather__cityDate {
    gap: 10px;
    margin-bottom: 25px;

    .weather__block-city {
      font-size: 42px;
      font-weight: 500px;
      margin-bottom: 5px;
    }

    .weather__block-date {
      font-size: 36px;
      font-weight: 400;
      font-style: italic;
    }
  }

  .weather__block.weather__tempType {
    .weather__block-temp {
      display: inline-block;
      font-size: 120px;
      font-weight: 500;
      background-color: rgba(#394c60, 1);
      box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.64);
      padding: 50px 30px;
      border-radius: 15px;
      color: rgba(255, 255, 255, 0.9);
    }

    .weather__block-type {
      font-size: 70px;
      margin-top: 12px;

      img {
        width: 38px;
        height: 38px;
      }
    }
  }
}

@media screen and (max-width: 520px) {
  //Style view in Weather
  .weather__blocks_weather {
    .weather__block.weather__cityDate {
      gap: 10px;
      margin-bottom: 25px;

      .weather__block-city {
        font-size: 30px;
      }

      .weather__block-date {
        font-size: 25px;
      }
    }

    .weather__block.weather__tempType {
      .weather__block-temp {
        font-size: 90px;
      }

      .weather__block-type {
        font-size: 50px;

        img {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
}

//Style view in Main
.weather__blocks_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-top: -5px;

  .weather__block.weather__cityDate {
    .weather__block-city {
      margin: 0px 0px 18px 0px;
      display: flex;
      align-items: center;
      font-size: 24px;

      img {
        width: 30px;
        height: 30px;
        margin-left: 5px;
      }
    }

    .weather__block-date {
      display: flex;
      align-items: center;
    }
  }

  .weather__block.weather__tempType {
    .weather__block-temp {
      font-weight: 500;
      background-color: rgba(#394c60, 1);
      padding: 10px 10px;
      border-radius: 15px;
      color: rgba(255, 255, 255, 0.9);
      box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.64);
      margin-bottom: 10px;
      text-align: center;
    }
  }
}

@media (max-width: 480px) {
  .weather__blocks_main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    .weather__block.weather__cityDate {
      .weather__block-city {
        img {
          width: 30px;
          height: 30px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
