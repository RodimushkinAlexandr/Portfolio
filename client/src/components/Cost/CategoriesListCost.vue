<script setup lang="ts">
import CategoriesItemCost from './CategoriesItemCost.vue';
import type CategoryTypes from '@/types/Cost/CategoryTypes';

const props = defineProps<{
    categories: CategoryTypes[]
    selected: string | null
}>()

const emit = defineEmits<{
    (e: "update:selected", value: string):void
}>() 

</script>

<template>
    <section class="wallet__payment wallet__block ">
        <ul class="wallet__payment-list">
            <CategoriesItemCost 
                v-for="category in categories" 
                  :key="category.value" 
                  :category="category"
                  :selected="selected"
                  @selected="$emit('update:selected', category.value)" 
            />
        </ul>
    </section>
</template>

<style lang="scss">
.wallet {

    &__payment-list {
        display: grid;
        border-radius: 15px;
        background-color: #303135;
        box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.64);       
        grid-template-columns: repeat(6, 1fr);
        gap: 8px;
        padding: 10px;

        @media (max-width: 480px) {
        grid-template-columns: repeat(4, 1fr);
    }
    }
}

</style>