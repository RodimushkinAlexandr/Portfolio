<script setup lang="ts">
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue';
import type Movie from '@/types/MovieTypes';

const props = defineProps<{
    movie: Movie
}>()

const emit = defineEmits<{
    (e: 'lookMovie', value: Movie):void
}>()

const countries = props.movie.countries.map(country => (Object.values(country)));
const genres = props.movie.genres.map(genre => (Object.values(genre)));

</script>

<template>
     <li class="movies__item">
        <div class="movies__img"><img :src="movie.poster[0].previewUrl" alt="No Poster"></div>
        <div class="movies__contentText">
            <h2 class="movies__name">{{ movie.name }}</h2>
            <div class="movies__year"><p class="movie__content-row">Year: <span>{{ movie.year }}</span></p></div>
            <div class="movies__countries"><p class="movie__content-row">Country: <span>{{ countries.join() }}</span></p></div>
            <div class="movies__genre"><p class="movie__content-row">Genres: <span>{{ genres.join() }}</span></p></div>
        </div>
        <div class="movies__btn">
            <MyBtnSearchPush :hover="'aliceblue'" @click="$emit('lookMovie', movie)" class="movies__more">More</MyBtnSearchPush>
        </div>
    </li>
</template>

<style lang="scss">
    .movies {

        &__item {
            border: 3px solid #9f9fa1;
            padding: 5px;
            border-radius: 8px;

            display: flex;
            width: 100%;

            position: relative;

            &:not(:last-child) {
                margin-bottom: 8px;
            }
        }

        &.row{
            display: flex;
        }

        &__img {
            width: 120px;
            border-radius: 6px;
            overflow: hidden;
            margin: -5px 0px -5px -5px;
            flex: 0 0 auto;
            img{
                width: 100%;
                height: 100%;
                
            }

        }
        &__contentText{
            display: flex;
            flex-direction: column;
            padding: 5px 10px 5px 10px;
            flex: 1 1 auto;

            :not(:last-child) {
                margin-bottom: 8px;
            }
        }
        // .movies__name

        &__name {
            font-size: 21px;
        }

        // .movies__year

        &__year {
        }

        .movie__content-row{
            display: flex;
            
            span{
                margin-left: 5px;
                word-wrap: break-word;
                word-break: break-word;
            }
        }

        &__genre {
            text-transform: capitalize;
        }

        &__btn {
            position: relative;
            flex: 1 0 auto;
            min-width: 78px;
        }

        &__favorites {
            position: absolute;
            top: 10px;
            right: 10px;    
            cursor: pointer;
        }

        &__more {
            position: absolute;
            bottom: 10px;
            right: 10px;    
        }
    }
</style>