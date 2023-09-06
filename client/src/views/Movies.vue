<script setup lang="ts">
import MenuHeader from '@/components/Headers/MenuHeaderGrey/MenuHeaderGrey.vue';
import { MoviesStore } from '@/stores/Movies';
import { ref } from 'vue';
import type menuHeaderGreyTypes from '@/types/MenuHeaderGrey'
import ListsMoviesSliderGroup from '@/components/Movies/ListMovies/Slider/ListMoviesSliderGroup.vue';
import FilterMovies from '@/components/Movies/Filters/FilterMovies.vue';
import dialogWindow from '@/components/UI/dialogWindow.vue';
import LookOneMovie from '@/components/Movies/LookOneMovie.vue';
import SearchMovies from '@/components/Movies/Search/SearchMovies.vue';
import { watch } from 'vue';
import LodaderSpinner from '@/components/UI/LoaderSpinner.vue';
import type Movie from '@/types/Movie/Movie';
import { SettingsStore } from '@/stores/Settings'
import FavoritesMoviesList from '@/components/Movies/FavoritesMoviesList.vue';

const moviesStore = MoviesStore();
const settingsStore = SettingsStore()

const selectedMenu = ref<string>('Main')

watch(selectedMenu, () => {
    moviesStore.moviesList = []
})

;(async function getAllFilters() {
    await moviesStore.getAllFilters();
    await moviesStore.getMoviesGorup(); 
})()

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

const look = (movie: Movie): void => {
    moviesStore.showLookMovie = true
    moviesStore.lookMovie = movie
}

const updateFavorites = async (movie: string): Promise<void> => {
    if(!settingsStore.user.favoritesMovies.includes(movie)) settingsStore.user.favoritesMovies.push(movie)
    else settingsStore.user.favoritesMovies = settingsStore.user.favoritesMovies.filter(movieID => movieID != movie) 
    await settingsStore.patchUser() 
    await moviesStore.getFavoritesMovies(settingsStore.user.favoritesMovies)
}


</script>

<template>
  <div class="movies container">
    <MenuHeader v-model="selectedMenu" :contentMenu="contentMenu" class="movies__header"/>
    <transition-group name="listInfo" class="movies__main" mode="out-in" tag="main"> 
        <FilterMovies v-if="selectedMenu == 'Filter'" :filters="moviesStore.filters" :key="1"/>
        <ListsMoviesSliderGroup 
            v-else-if="selectedMenu == 'Main' && Object.values(moviesStore.moviesGroup).length"
            :moviesGroup="moviesStore.moviesGroup" 
            @look="look"
            :key="2"
        /> 
        <SearchMovies v-else-if="selectedMenu == 'Search'" :key="3" />
        <FavoritesMoviesList 
            v-else-if="selectedMenu == 'Favorites'"
            @searchMovies="selectedMenu = 'Filter'"
            @look="look"
            :key="4"/>
        <LodaderSpinner v-else :key="5" />
    </transition-group>
    <aside>
        <dialogWindow v-model:show="moviesStore.showLookMovie">
            <LookOneMovie 
                v-if="moviesStore.showLookMovie && moviesStore.lookMovie" 
                :movie="moviesStore.lookMovie" 
                @updateFavorites="updateFavorites"
                >
            </LookOneMovie>
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