<script setup lang="ts">
import { ref } from 'vue';
import { CostStore } from '@/stores/Cost';
import DatePicker from './DatePicker.vue';
import { toValue } from 'vue';

const costStore = CostStore()

const loading = ref<boolean>(false)
const rules = [
        (value: string) => {  
          if (!value) return 'This field is required'
          if (value.length < 2) return 'Minimum number of characters 4'
          return true
        },
    ]
const addNewCost = async () => {
    if(costStore.cost.price.length && costStore.cost.category !== null) {
        await costStore.createNewCost()
    }
}

const categories = costStore.categories.map(item => {return item.value})

// const reset = () => {
//         form.reset()
//       }
</script>

<template>
    <main class="cost__main">
        <form @submit.prevent class="form">
        <DatePicker :date="costStore.cost.date" class="datePicker"></DatePicker>
        <v-text-field
            v-model="costStore.cost.price"
            :rules="rules"
            label="How much was spent"
            type="number"
            elevation="24"
            bg-color="#333333"
        ></v-text-field>
        <v-select
            v-model="costStore.cost.category"
            :items="categories"
            :rules="[v => !!v || 'Item is required']"
            elevation="24"
            bg-color="#333333"
            label="Categorise"
            required
        ></v-select>
        <v-text-field
            v-model="costStore.cost.comment"
            label="Comment"
            elevation="24"
            bg-color="#333333"
        ></v-text-field>
        <v-btn 
            :loading="loading"
            class="flex-grow-1 btn cost-input"
            height="48"
            block
            type="submit" 
            elevation="24"
            @click="addNewCost"
            color="#394C60">
        New Cost</v-btn>
        </form>       
    </main>
</template>

<style lang="css">
    .datePicker{
        margin-bottom: 22px;
    }
</style>