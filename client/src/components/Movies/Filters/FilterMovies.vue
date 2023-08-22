<script setup lang="ts">
import type Filters from '@/types/FiltersMovies';
import ListFilters from './ListFilters.vue';
import { computed } from 'vue';
import { ref } from 'vue';
import GroupFiltersLists from './GroupFiltersLists.vue';

const props = defineProps<{
    filters: Filters
}>()

const selectedFilter = ref<string>('genres')

const selected = computed({
    get() {
        return selectedFilter.value
    },
    set(value: string) {
        selectedFilter.value = value 
    }
})
const selectedAccurateCategory = (value: string) => {
    console.log(value)
}

const nameFilters = Object.keys(props.filters)
    
</script>

<template>
    <div class=filterMain>
        <header class="filterMain__header">
            <h2 class="filterMain__title">CATEGORIES:</h2>
            <ListFilters :filters="nameFilters" v-model="selected" :useFilterStyle="'categories'" />
        </header>
        <main class="filterMain__main">
            <GroupFiltersLists :filters="filters" :selected="selected" @selected="selectedAccurateCategory" />
        </main>        
    </div>
</template>

<style lang="scss">
    .filterMain__header{
        max-width: 550px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        border-bottom: 2px solid #9f9fa1;

        .filterMain__title{
            margin-right: 20px;
        }
    }
</style>