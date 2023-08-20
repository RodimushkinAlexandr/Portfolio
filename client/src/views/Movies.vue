<script setup lang="ts">
import MenuHeader from '@/components/Headers/MenuHeaderGrey/MenuHeaderGrey.vue';
import { MoviesStore } from '@/stores/Movies';
import { ref } from 'vue';
import type menuHeaderGreyTypes from '@/types/MenuHeaderGreyTypes'

const moviesStore = MoviesStore()
moviesStore.getAllFilters()

const selectedMenu = ref<string>('Favorites')

const contentMenu = ref<menuHeaderGreyTypes[]>([
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
    }
])  


</script>

<template>
  <div class="movies container">
    <MenuHeader v-model="selectedMenu" :contents="contentMenu"/>
    
  </div>
  <!-- <div class="container">
      <main class="movies">
          <div class="movies__wrapper">
              <HeaderMovies />
              <main class="movies__main">
                  <GroupList 
                      class="movies__wrapper-list" 
                      v-if="getShowMoviesGroupList"
                      @searchFilterName="searchFilterName" 
                      @look="lookMovie" 
                      :moviesGroup="getMoviesGroup"  />
                  <FilterList 
                      v-else-if="getShowMovies" 
                      :movies="getMovies" 
                      :moreMovies="getShowFilterMovies" 
                      @more="moreMovies" 
                      @look="lookMovie" />
                  <Error-User-Request v-else-if="getErrorMovies" />
                  <my-LoadSpinner v-else class="loader" />
                  <my-dialog v-model:show="showLookMovie" >
                      <LookMovie :movie="getLookMovie" />
                  </my-dialog>
              </main>
          </div>
      </main>
  </div> -->
</template>

<style>
 
</style>