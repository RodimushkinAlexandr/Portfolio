<script setup lang="ts">

import ItemMoviesGrid from './ItemMoviesGrid.vue';
import type Movie from '@/types/Movie/MovieTypes';

const props = defineProps<{
    movies: Movie[]
}>()

</script>
<template>
    <div class="filterList">
        <ul class="filterList__blocks">
            <ItemMoviesGrid 
                v-for="movie in movies" 
                :movie="movie" 
                @look="$emit('look', movie)" 
                class="filterList__block" 
                :key="movie._id" />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .filterList {
    position: relative;
// .filterList__blocks

&__blocks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
}

// .filterList__block


.filterList__more{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        p{
            background-color: #303135;
            border-radius: 12px;
            padding: 16px 10px;
            cursor: pointer;
            font-size: 20px;
        }
    }
}


@media (max-width: 665px) {
    .filterList {

    // .filterList__blocks

        &__blocks {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
}

</style>