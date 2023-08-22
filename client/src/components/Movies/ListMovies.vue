<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import type MoviesList from '@/types/ListMoviesTypes';

const props = defineProps<{
    movies: MoviesList[]
}>()
</script>

<template>
    <swiper  
        class="swiper"
        :grabCursor="true"
        >
        <swiper-slide v-for="movie in movies"  class="movieList__item">
            <div id="div__wrapper-img"><img :src="movie.poster[0].previewUrl" alt=""><span></span></div>
            <p @click="$emit('look', movie)" class="slide__button">Look</p>
            <p class="movie__name">{{ movie.name }}</p>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
.swiper {
    width: 128px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 230px;
    overflow: visible;
    margin: 0px 0px 0px 0px;
    color: #bdc1c6;
    z-index: 1;
}


.swiper-slide{
    width: 128px;
    height: 100%;
    cursor: pointer;
    margin-right: 12px;
    transition: all .4s ease;
    border-radius: 8px 8px 0px 0px;
    position: relative;

   
    
    #div__wrapper-img {
    width: 128px;
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: all .4s ease;

    span {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    }
    .slide__button{
        display: flex;
        position: absolute;
        top: 30%;
        left: 60%;
        opacity: 0;
        z-index: -1;
        transition: all .5s ease .05s;
        border: 1px solid aliceblue;
        border-radius: 15px;
        padding: 10px;
    }

    img {
    width: 128px;
    height: 171px;
    border-radius: 8px;
    transition: all .4s ease;
    box-shadow: 0px 10px 28px -5px rgba(34, 60, 80, 0.59);
    }

    &:hover{
        margin-right: 90px;
        width: 210px;

        .slide__button{
            opacity: 1;
            z-index: 10;
        }

        .movie__name{
            max-height: 32px;    
            width: 210px;

}
        
        #div__wrapper-img {
            width: 210px;
            background-color: rgba(0, 0, 0, 0.3);
            box-shadow: 0px 40px 31px -9px rgba(34, 60, 80, 0.56);            
            position: relative;


            span {
                display: flex;
                
            }

            img{
            width: 210px;       
            object-fit: cover;   
        }
        }
        
    }
}

.movie__name{
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 32px;    
    width: 128px;
    transition: all ease .5s;
}

  
</style>