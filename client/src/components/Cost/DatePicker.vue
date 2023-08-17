<script setup lang="ts">
import { ref, computed } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { CostStore } from '@/stores/Cost';

const costStore = CostStore()


const calendarFn = (weeks: any[]) => {
  return weeks
        .filter((week) => week.days.some((day: { text: number; }) => day.text === 15))
        .map((week) => ({
          ...week,
          days: week.days.map((day: { classData: { [x: string]: boolean; }; }) => {
            day.classData['custom-class'] = true;
            return day;
          }),
        }));
}

</script>

<template>
    <VueDatePicker v-model="costStore.cost.date" :calendar="calendarFn"></VueDatePicker>
</template>

<style>
  .dp__theme_light{
    --dp-background-color: #333333;
    --dp-text-color: #9f9fa1;
    --dp-border-color: #333333;
  }
  .dp__pointer {
    height: 56px;

  }
</style>