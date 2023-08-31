<script setup lang="ts">
import type Movie from '@/types/Movie/MovieTypes';
import ListMovies from './ListMoviesSlider.vue';
import { MoviesStore } from '@/stores/Movies';
import type moviesGroup from '@/types/Movie/MovieGroup';
import { ref } from 'vue';

const moviesStore = MoviesStore()

const props = defineProps<{
    moviesGroup: moviesGroup | {}
}>()

const emit = defineEmits<{
    (e: 'look', value: Movie): void
}>()

const look = (movie: Movie) => {
    emit('look', movie)
}

const movies = ref<Movie[][]>(Object.values(props.moviesGroup))
const nameGroup = ref<string[]>(Object.keys(props.moviesGroup))

</script>

<template>
    <section class="movies-group">
        <ul class="movies-group__list">
            <li class="movies-group__block" v-for="movie, index in movies" :key="index" >
                <h2 class="movies-group__title">{{ nameGroup[index] }}</h2>
                <ListMovies @look="look" :movies="movie" class="movies-group__list" />
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
    display: inline-block;
    border-bottom: 1px solid #121416;
    padding: 3px 2px;
    border-radius: 3px;
    transition: all ease .5s;
}

// .movies-group__list

&__list {
    margin-bottom: 10px;
}
}

</style>