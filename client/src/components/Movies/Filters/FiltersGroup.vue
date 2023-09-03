<script setup lang="ts">
import type Filters from '@/types/Movie/FiltersMovies';
import FiltersList from './FiltersList.vue'
import { computed } from 'vue';
import inputText from '@/components/UI/inputText.vue';
import ErorSearch from '@/components/UI/ErorSearch.vue';

const props = defineProps<{
    filters: Filters
    selected: string
    search: string
}>()

const emit = defineEmits<{
    (e: 'selected', value: string): void
    (e: 'update:search', value: string): void
}>()

const selected = computed({
    get() {
        return props.selected
    },
    set(value: string) {
        emit('selected', value)
    }
})

const search = computed({
    get() {
        return props.search
    },
    set(modelValue: string) {
        emit('update:search', modelValue)
    }
})

const countries = computed(() => props.filters.countries.filter(country =>  country.toLocaleLowerCase().includes(props.search)))
const genres = computed(() => props.filters.genres.filter(genre =>  genre.toLocaleLowerCase().includes(props.search)))
const years = computed(() => props.filters.years.filter(year =>  year.toLocaleLowerCase().includes(props.search)))

</script>

<template>
    <inputText :placeholder="'Search Filter'" v-model="search" :mediaPhone="true"  class="searchFilter" :name="'filtersMovie'"/>
    <FiltersList 
        v-if="selected == 'countries' && countries.length" 
        :filters="countries" 
        v-model="selected" 
        :useFilterStyle="'category'"/>
    <FiltersList 
        v-else-if="selected == 'genres' && genres.length" 
        :filters="genres" 
        v-model="selected" 
        :useFilterStyle="'category'"/>
    <FiltersList 
        v-else-if="selected == 'years' && years.length" 
        :filters="years" 
        v-model="selected" 
        :useFilterStyle="'category'"/> 
    <ErorSearch v-else="errorSearch" class="erorFilter" />
</template>

<style lang="scss">
    .searchFilter{
        max-width: 550px;
        margin: 0 auto;
        margin-top: 15px;
    }

    .erorFilter{
        margin-top: 15px;
    }
</style>