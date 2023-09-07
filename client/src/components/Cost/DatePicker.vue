<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { CostStore } from '@/stores/Cost';

const costStore = CostStore()

const calendarFn = (week: any[]) => {
  return week.map((week) => ({
    ...week,
    days: week.days.map((day: { text: number; classData: { [x: string]:boolean; }; }) => {
      if(day.text === 15) {
        day.classData['custom-class'] = true;
      }
      return day;
    }),
  })).filter((week) => week.days.some((day: { classData: { [x: string]: boolean; }; }) => day.classData['custom-class']));
};

</script>

<template>
    <VueDatePicker v-model="costStore.cost.date" :calendar="calendarFn"></VueDatePicker>
</template>

<style>
  .dp__theme_light{
    --dp-background-color: #303135;
    --dp-text-color: #9f9fa1;
    --dp-border-color: #303135;
  }
  .dp__input{
    border-radius: 8px;
    height: 50px;
  }

  .dp__pointer {
    height: 56px;

  }
</style>