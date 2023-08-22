<script setup lang="ts">
import type Filters from '@/types/FiltersMovies';
import ListFilter from './ListFilters.vue'
import { computed } from 'vue';
import inputText from '@/components/UI/inputText.vue';
import { ref } from 'vue';
import ErorSearch from '../ErorSearch.vue';

const props = defineProps<{
    filters: Filters
    selected: string
}>()

const emit = defineEmits<{
    (e: 'selected', value: string): void
}>()

const search = ref<string>('')

const countries = computed(() => props.filters.countries.filter(country =>  country.toLocaleLowerCase().includes(search.value)))
const genres = computed(() => props.filters.genres.filter(genre =>  genre.toLocaleLowerCase().includes(search.value)))
const years = computed(() => props.filters.years.filter(year =>  year.toLocaleLowerCase().includes(search.value)))

const selectedFilter = computed({
    get() {
        return props.selected
    },
    set(value: string) {
        emit('selected', value)
    }
})

</script>

<template>
    <inputText :placeholder="'Search Filter'" v-model="search"  class="searchFilter"/>
    <ListFilter v-if="selected == 'countries'" :filters="countries" v-model="selectedFilter" :useFilterStyle="'category'"/>
    <ListFilter v-if="selected == 'genres'" :filters="genres" v-model="selected" :useFilterStyle="'category'"/>
    <ListFilter v-if="selected == 'years'" :filters="years" v-model="selected" :useFilterStyle="'category'"/> 
    <ErorSearch v-else-if="!countries || !genres || !years" />
</template>

<style lang="scss">
    .searchFilter{
        max-width: 550px;
        margin: 0 auto;
        margin-top: 15px;
    }
</style>