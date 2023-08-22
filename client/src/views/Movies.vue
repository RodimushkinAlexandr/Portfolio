<script setup lang="ts">
import MenuHeader from '@/components/Headers/MenuHeaderGrey/MenuHeaderGrey.vue';
import { MoviesStore } from '@/stores/Movies';
import { ref } from 'vue';
import type menuHeaderGreyTypes from '@/types/MenuHeaderGreyTypes'
import GroupListsMovies from '@/components/Movies/GroupListsMovies.vue';
import FilterMovies from '@/components/Movies/Filters/FilterMovies.vue';

const moviesStore = MoviesStore()

moviesStore.getAllFilters()

const selectedMenu = ref<string>('Filter')

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
        <div v-if="selectedMenu == 'Filter'" class="movies__main-filter">
            <FilterMovies :filters="moviesStore.filters" />
        </div>
        <div class="movies__main-main" v-else-if="selectedMenu == 'Main'">
            <GroupListsMovies 
                v-if="moviesStore.moviesGroup.length == moviesStore.amountListsInGroup" 
                :moviesGroup="moviesStore.moviesGroup" 
                :nameMoviesGroup="moviesStore.nameMoviesGroup" />
        </div>
    </main>
</div>

</template>

<style lang="css">

    .movies__header{
        max-width: 550px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
</style>