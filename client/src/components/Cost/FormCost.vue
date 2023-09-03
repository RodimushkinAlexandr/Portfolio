<script setup lang="ts">
import { CostStore } from '@/stores/Cost';
import DatePicker from './DatePicker.vue';
import InputText from '../UI/inputText.vue';
import InputNumberValidate from '../UI/inputNumberValidate.vue';
import CategoriesListCost from './CategoriesListCost.vue';
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue';

const costStore = CostStore()

const rulesPrice = (value:number) => {  
          if (!value) return 'This field is required'      
          return ''
        }

const addNewCost = async () => {
    if(costStore.cost.price && costStore.cost.category !== null) {
        await costStore.createNewCost()
        await costStore.getAllCosts()
    }
}

</script>

<template>
    <main class="cost__main">
        <form @submit.prevent class="form">
            <DatePicker :date="costStore.cost.date" class="datePicker form__item-cost"></DatePicker>      
            <InputNumberValidate 
                v-model="costStore.cost.price" 
                :placeholder="'Price'" 
                :rules="rulesPrice" 
                :name="'priceCost'"
                class="form__item-cost" />
            <InputText 
                v-model="costStore.cost.comment" 
                :placeholder="'Comment'" 
                :name="'commentCost'"
                class="form__item-cost"/>
            <CategoriesListCost :categories="costStore.categories" v-model:selected="costStore.cost.category" class="form__item-cost" />
            <MyBtnSearchPush @click="addNewCost" class="cost__main-btn" :hover="'aliceblue'" :icon="'mdi mdi-plus'">Create Cost</MyBtnSearchPush>
        </form>       
    </main>
</template>

<style lang="scss">
.datePicker{
    margin-bottom: 8px;
}
    .form__item-cost{
         margin-bottom:10px;
    }

    .cost__main-btn{
        width: 100%;
    }
</style>