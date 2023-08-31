<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponen from '../Headers/HeaderComponent/HeaderComponen.vue';
import LodaderSpinner from '../UI/LoaderSpinner.vue';
import { MoviesStore } from '@/stores/Movies';
import dialogWindow from '../UI/dialogWindow.vue';
import LookOneMovie from '../Movies/LookOneMovie.vue';
import { SettingsStore } from '@/stores/Settings';
import ListMoviesSlider from '../Movies/ListMovies/Slider/ListMoviesSlider.vue';
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue';
import router from '@/router';
import type Movie from '@/types/Movie/MovieTypes';

const showComponent = ref<boolean>(true)

const settingsStore = SettingsStore()
const moviesStore = MoviesStore()

const favoriteGenre = settingsStore.user.genreMovies
moviesStore.requestFilters.genre = favoriteGenre
moviesStore.getMoviesUseFilters()

const routerlink = () => {
    router.push('/Settings')
}
const showLookMovie = (movie: Movie) => {
    moviesStore.showLookMovie = true
    moviesStore.lookMovie = movie
}


</script>

<template>
    <section class="moviesMain">
        <HeaderComponen v-model:show="showComponent" :icon="'mdi mdi-youtube-tv'" :router="'Movies'" :text="'Movies'"></HeaderComponen>
        <main class="moviesMain__main main-main" :class="{margin: showComponent}">
            <transition name="main" mode="out-in">
                <div class="movies__blocks blocks" v-if="showComponent">
                    <div v-if="!favoriteGenre" class="noGenreMovies moviesMain__block">
                        <p>Choose your favorite movie genre</p>
                        <MyBtnSearchPush @click="routerlink">Settings</MyBtnSearchPush>
                    </div>
                    <ListMoviesSlider  
                        v-else-if="moviesStore.moviesList.length" 
                        :movies="moviesStore.moviesList" 
                        @look="showLookMovie" 
                        class="moviesMain__block"/>
                    <LodaderSpinner v-else class="moviesMain__block"/>
                </div>
            </transition>
            <dialogWindow v-model:show="moviesStore.showLookMovie" >
                <LookOneMovie :movie="moviesStore?.lookMovie" />
            </dialogWindow>
        </main>
    </section>
</template>

<style lang="scss" >
    .movies__main{
        overflow: hidden;
    }

    .noGenreMovies{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>