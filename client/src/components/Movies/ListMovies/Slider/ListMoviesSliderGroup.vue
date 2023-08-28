<script setup lang="ts">
import type Movie from '@/types/MovieTypes';
import ListMovies from './ListMoviesSlider.vue';
import { MoviesStore } from '@/stores/Movies';

const moviesStore = MoviesStore()

const props = defineProps<{
    moviesGroup: Movie[][]
    nameMoviesGroup: string[]
}>()

const emit = defineEmits<{
    (e: 'look', value: Movie): void
}>()

const look = (movie: Movie) => {
    emit('look', movie)
}


</script>

<template>
    <section class="movies-group">
        <ul class="movies-group__list">
            <li class="movies-group__block" v-for="movies, index in moviesGroup">
                <h2 class="movies-group__title">{{ nameMoviesGroup[index] }}</h2>
                <ListMovies @look="look" :movies="movies" class="movies-group__list" />
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    .movies-group {
        overflow: hidden;
// .movies-group__block

&__block {
}

// .movies-group__title

&__title {
    text-transform: capitalize;
    margin-bottom: 8px;
    font-size: 20px;
    cursor: pointer;
    display: inline-block;
    border-bottom: 1px solid #121416;
    padding: 3px 2px;
    border-radius: 3px;
    transition: all ease .5s;


    &:hover{
        border-color: #FFFF;
    }
}

// .movies-group__list

&__list {
    margin-bottom: 10px;
}
}

</style>