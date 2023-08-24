<script setup lang="ts">
import MenuHeader from '@/components/Headers/MenuHeaderGrey/MenuHeaderGrey.vue';
import { MoviesStore } from '@/stores/Movies';
import { ref } from 'vue';
import type menuHeaderGreyTypes from '@/types/MenuHeaderGreyTypes'
import ListsMoviesSliderGroup from '@/components/Movies/ListMovies/Slider/ListMoviesSliderGroup.vue';
import FilterMovies from '@/components/Movies/Filters/FilterMovies.vue';
import dialogWindow from '@/components/UI/dialogWindow.vue';
import LookOneMovie from '@/components/Movies/LookOneMovie.vue';
import SearchMovies from '@/components/Movies/Search/SearchMovies.vue';
import { watch } from 'vue';
import LodaderSpinner from '@/components/UI/LodaderSpinner.vue';

const moviesStore = MoviesStore()
moviesStore.getAllFilters()

const selectedMenu = ref<string>('Main')
watch(selectedMenu, () => {
    moviesStore.moviesList = []
})

const contentMenu = ref<menuHeaderGreyTypes[]>([
    {
        text: 'Main',
        icon: 'mdi mdi-home',
        color: '#9f9fa1'
    },
    {
        text: 'Filter',
        icon: 'mdi mdi-filter',
        color: '#9f9fa1'
    },
    {
        text: 'Favorites',
        icon: 'mdi mdi-heart',
        color: '#9f9fa1'
    },
    {
        text: 'Search',
        icon: 'mdi mdi-magnify',
        color: '#9f9fa1'
    },
])  
</script>

<template>
  <div class="movies container">
    <MenuHeader v-model="selectedMenu" :contentMenu="contentMenu" class="movies__header"/>
    <main class="movies__main"> 
        <FilterMovies v-if="selectedMenu == 'Filter'" :filters="moviesStore.filters" />
        <ListsMoviesSliderGroup 
            v-else-if="selectedMenu == 'Main'"
            :moviesGroup="moviesStore.moviesGroup" 
            :nameMoviesGroup="moviesStore.nameMoviesGroup" />
        <SearchMovies v-else-if="selectedMenu == 'Search'" />
        <LodaderSpinner v-else />
    </main>
    <aside>
        <dialogWindow v-model:show="moviesStore.showLookMovie">
            <LookOneMovie v-if="moviesStore.showLookMovie" :movie="moviesStore.lookMovie"></LookOneMovie>
        </dialogWindow>
    </aside>
</div>

</template>

<style lang="css">

    .movies__header{
        max-width: 550px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
</style>