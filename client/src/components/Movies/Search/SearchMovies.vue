<script setup lang="ts">
import { MoviesStore } from "@/stores/Movies";
import ListMoviesGridVue from "../ListMovies/Grid/ListMoviesGrid.vue";
import { ref } from "vue";
import type Movie from "@/types/MovieTypes";
import LodaderSpinner from "@/components/UI/LodaderSpinner.vue";
import ErorSearch from "@/components/UI/ErorSearch.vue";
import FormInputButton from "@/components/UI/FormInputButton.vue";

const moviesStore = MoviesStore()

const showSearchMovies = ref<boolean>(false)
const search = () => {

   if(showSearchMovies.value) {
      moviesStore.moviesList = []
      moviesStore.error = ''
   }

   showSearchMovies.value = true 
   moviesStore.nameSearchMovies()
}

const lookMovie = (value: Movie) => {
    moviesStore.lookMovie = value
    moviesStore.showLookMovie = true
}

</script>

<template>
   <div class="search__movies">
      <header class="search__movies-header">
         <FormInputButton 
            v-model:value="moviesStore.searchMovies" 
            :valueButton="'Search'" 
            @submit="search" 
            :placeholder="'Search Movie'" />
      </header>
      <main v-if="showSearchMovies" class="search__movies-main">
         <ListMoviesGridVue v-if="moviesStore.moviesList.length" :movies="moviesStore.moviesList" @look="lookMovie" />
         <ErorSearch v-else-if="moviesStore.error.length" :text="moviesStore.error"/>
         <LodaderSpinner v-else />
      </main>
   </div>
</template>

<style lang="css">
    .search__movies-header{
      max-width: 550px;
      margin: 0 auto;
      margin-bottom: 20px;
    }
</style>