<script setup lang="ts">
import ErorSearch from '@/components/UI/ErorSearch.vue'
import FormInputButton from '@/components/UI/FormInputButton.vue'
import { WeatherStore } from '@/stores/Weather'
import NoInfo from '@/components/Weather/NoInfo.vue'
import WeatherInfo from '@/components/Weather/WeatherInfo.vue'

const weatherStore = WeatherStore()

weatherStore.queryCity = ''
weatherStore.weatherReset()

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
        :name="'fromWeather'"
        @submit="searchCity"
        class="form__weather"
      />
      <div class="pos__relativ">
        <transition-group name="listInfo" tag="div">
          <WeatherInfo
            :key="'WeatherInfo'"
            v-if="weatherStore.weather.nameCity !== ''"
            :weather="weatherStore.weather"
            :main="false"
            :date="date"
          />
          <ErorSearch
            :key="'ErorSearch'"
            v-else-if="weatherStore.weatherEror.length"
            :text="weatherStore.weatherEror"
          />
          <NoInfo :key="'NoInfo'" v-else class="noInfo pos__absolute" />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.weather {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  padding: 50px 10px 0px 74px;

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
    background-color: #e4e8f4;
    color: #394c60;
  }
  &.haze {
    background-color: #7b7c81;
  }
  &.snow {
    background-color: #4d8fc3;
  }
  &.windy {
    background-color: #d4dbe2;
  }
  .form__weather {
    margin-bottom: 30px;
  }

  @media (max-width: 700px) {
    padding: 70px 10px 0px 10px;
  }
}
</style>
