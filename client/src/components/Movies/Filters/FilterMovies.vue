<script setup lang="ts">
import type Filters from '@/types/FiltersMovies';
import ListFilters from './ListFilters.vue';
import { computed } from 'vue';
import { ref } from 'vue';
import GroupListsFilters from './GroupListsFilters.vue';
import SelecedListToFilters from './SelecedListToFilters.vue';
import { MoviesStore } from '@/stores/Movies';
import type Movie from '@/types/MovieTypes';

const moviesStore = MoviesStore()
const selectedMoviesToFilter = ref<Movie[] | []>([])

const props = defineProps<{
    filters: Filters
}>()

const searchFilter = ref<string>('')
const selectedFilter = ref<string>('genres')

const selected = computed({
    get() {
        return selectedFilter.value
    },
    set(value: string) {
        searchFilter.value = ''
        selectedFilter.value = value 
    }
})

const selectedAccurateCategory = async (value: string) => {
    switch(selectedFilter.value) {
        case('genres'): moviesStore.requestFilters.genre = value
        break
        case('countries'): moviesStore.requestFilters.country = value
        break
        case('years'): moviesStore.requestFilters.year = value
        break
    }
    filterCategoryProp.value = value
    isShowGroupFilters(false)
    await moviesStore.getMoviesUseFilters()
    selectedMoviesToFilter.value = moviesStore.moviesList
}

const showGroupFilters = ref<boolean>(true)

const isShowGroupFilters = (value: boolean) => {
    showGroupFilters.value = value
}

const lookMovie = (value: Movie) => {
    moviesStore.lookvoie = value
    moviesStore.showLookMovie = true
}

let filterCategoryProp = ref<string>('')
</script>

<template>
    <div class=filterMain>
        <header class="filterMain__header">
            <h2 class="filterMain__title">CATEGORIES:</h2>
            <ListFilters :class="{disabled: !showGroupFilters}" :filters="Object.keys(props.filters)" v-model="selected" :useFilterStyle="'categories'" />
        </header>
        <main class="filterMain__main">
            <GroupListsFilters v-if="showGroupFilters" v-model:search="searchFilter" :filters="filters" :selected="selected" @selected="selectedAccurateCategory" />
            <div v-if="selectedMoviesToFilter.length">
                <SelecedListToFilters :filterCategoryProp="filterCategoryProp" :movies="selectedMoviesToFilter" @backToFilters="isShowGroupFilters" @lookMovie="lookMovie" />
            </div>
        </main>      
    </div>
</template>

<style lang="scss">
.disabled{
    pointer-events: none;
}
    .filterMain__header{
        max-width: 550px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        border-bottom: 2px solid #9f9fa1;
        margin-bottom: 20px;

        .filterMain__title{
            margin-right: 20px;
        }
    }
</style>