<script setup lang="ts">
import ItemListFilters from './ItemListFilters.vue';

const props = defineProps<{
    filters: string[]
    modelValue: string
    useFilterStyle: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string):void
}>()

const selected = (value:string): void => {
    emit('update:modelValue', value)
}

</script>

<template>
    <ul class=listFilters :class="useFilterStyle == 'categories' ? 'categories' : 'category'">
        <ItemListFilters 
            v-for="filter in filters" 
            :filter="filter" 
            :key="filter" 
            :selected="modelValue" 
            :useFilterStyle="useFilterStyle"
            @selected="selected"  
        />
    </ul>
</template>

<style lang="scss">

    .categories{
        display: flex;
    }

    .category{
        
        &.listFilters{
            display: flex;
            flex-direction: column;
            margin-top: 10px;
        }

    }
</style>