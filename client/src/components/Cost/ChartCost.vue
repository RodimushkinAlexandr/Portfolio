<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { ref } from 'vue';
import { CostStore } from '@/stores/Cost';

const costStore = CostStore()
const dataDiagramm = costStore.categoriesTotal

const data = ref<number[]>((Object.values(dataDiagramm)))
const dataName = ref<string[]>(Object.keys(dataDiagramm))

ChartJS.register(ArcElement, Tooltip, Legend)
const dataSet = {
  labels: dataName.value,
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#293133', '#003153', '#FFC8A8'],
      data: data.value
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

      
</script>

<template>
    <div v-if="Object.values(dataDiagramm).length" class="wrapper__diagramm">
      <Doughnut :data="dataSet" :options="options" />  
    </div>
    <div class="else" v-else><p>You don't have spending</p></div>
</template>
