<script setup lang="ts">
import { CostStore } from '@/stores/Cost';
import type Cost from '@/types/CostTypes'
import { ref, reactive } from 'vue';

const change = ref<boolean>(false)

const props = defineProps<{
    cost: Cost
}>()

const emit =  defineEmits<{
    (e: 'remove', history: string): void
    (e: 'change', history: Cost): void
  }>()

const categories = CostStore().categories
const iconColor = categories.filter(item => item.value == props.cost.category)[0]



const changedCost = reactive<Cost>({
            comment: '',
            price: '',
            category: null,
            date: new Date(),
            _id: undefined
})

</script>


<template>
     <li class="history__item" :class="iconColor.color">
        <section class="history__item_block">
            <div class="history__category">
                <span :class="iconColor.icon"></span>
                <p>{{ cost.category }}</p>
            </div>
            <div class="history__item_date">
                <p>{{ new Date(cost.date).toLocaleDateString() }}</p>
            </div>
        </section>
        <section class="history__item_block">
            <div class="history__total">
                <p>Price: {{ cost.price }}</p>
                <p>Comment: {{ cost.comment }}</p>
            </div>
            <div class="history__total history__btn">
                <v-btn color="error" rounded="sm" size="small" @click="$emit('remove', cost._id)">Delete</v-btn>
                <v-btn color="#394C60" rounded="sm" size="small" v-if="!change">Change</v-btn>
                <v-btn color="success" rounded="sm" size="small" v-else>Save</v-btn>
            </div>
        </section>
    </li>
</template>

<style lang="scss">
@import '@/assets/background.css';
    .history {

// .history__item

&__item {
        border-radius: 8px;
        padding: 10px 0px;
        // border: 1px solid #333333;
        box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.64);        
        margin: 5px 0px;
        padding: 10px;
        transition: all .4s ease-in-out;
        background-color: #333333;
        &:hover{
            transform: scale(1.01, 1.05);    
            background-color: #262525;
            cursor: pointer;
        }

    // .history__item_block

    &_block {
    display: flex;
    justify-content: space-between;


    :not(:last-child) {
            margin-bottom: 7px;
        }
    }   

    // .history__item_total

    &_total {
        display: flex;
        flex-direction: column;
    }
}
 &__category {
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            display: block;
            margin-top: 5px;
        }

        :not(:last-child) {
            margin-right: 7px;
        }
    }

    &__btn{
        display: flex;
        flex-direction: column;
    }
}
</style>