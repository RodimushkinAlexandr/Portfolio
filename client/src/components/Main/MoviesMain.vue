<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponen from '../Headers/HeaderComponent/HeaderComponen.vue';
import LodaderSpinner from '../UI/LodaderSpinner.vue';
import { MoviesStore } from '@/stores/Movies';
import dialogWindow from '../UI/dialogWindow.vue';
import LookOneMovie from '../Movies/LookOneMovie.vue';

const showComponent = ref<boolean>(true)

const moviesStore = MoviesStore()

</script>

<template>
    <section class="movies">
        <HeaderComponen v-model:show="showComponent" :icon="'mdi mdi-youtube-tv'" :text="'Movies'"></HeaderComponen>
        <main class="movies__main main-main" :class="{margin: showComponent}">
            <transition name="main" mode="out-in">
                <div class="movies__blocks blocks" v-if="showComponent">
                    <MoviesList v-if="moviesStore.moviesList.length" :movies="moviesStore.moviesList" @look="moviesStore.showLookMovie" class="movies__block"/>
                    <LodaderSpinner v-else />
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
</style>