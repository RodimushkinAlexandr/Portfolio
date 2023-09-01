<script setup lang="ts">
import type Movie from '@/types/Movie/Movie';

const props = defineProps<{
    movie: Movie
}>()
</script>

<template>
    <li class="filterList__block">
        <span class="filterList__background"></span>
        <div class="filterList-background_hidden">
            <span :style="{ 'background-image': 'url(' + movie.poster[0].previewUrl + ')'}" class="filterList__img" ></span>
            <div class="filterList__text">
                <span class="filterList__name">{{ movie.name }}</span>
                <span @click="$emit('look', movie)" class="filterList__button">Look</span>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.filterList__block{
    position: relative;
   
    .filterList-background_hidden {
       position: relative;
       height: 240px; 
       transition: all ease .5s;
       border-radius: 12px;
       overflow: hidden;
       color: inherit;
       appearance: none;
       border:none;
       background: none;
       cursor: pointer;    
    }

    .filterList__img,  .filterList__background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        cursor: pointer;
    }
    .filterList__img{
       background-position: center center;
       background-repeat: no-repeat;
       background-size: cover;
       height: 100%;
       transition: all ease .5s;
    }
    .filterList__background{
        background-color: rgba(0, 0, 0, 0);
        transition: all ease .5s;
    }

    .filterList__text{
        position: relative;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: 100%;
        font-size: 14px;
        padding: 34px 12px;

        .filterList__button{
            border: 1px solid aliceblue;
            border-radius: 15px;
            padding: 10px;
            transition: all ease .5s;

            &:hover{
                background-color: aliceblue;
                color: black;
            }
        }
    }

    &:hover {
        .filterList__background{
            background-color: rgba(0, 0, 0, 0.8);
            transition: all ease .5s;
            z-index: 9;
            border-radius: 12px;

        }
        .filterList-background_hidden {
            .filterList__img{
                transform: scale(1.1);

            }
            .filterList__text{
                display: flex;
                z-index: 10;
            }
        }
    }
}

@media (max-width: 665px) {
    
    .filterList__block {
    
        .filterList-background_hidden{
            height: 300px;
        }
        .filterList__text{
            font-size: 13px;
        }
    }
}

@media (max-width: 480px) {
   
    .filterList__block {
    
        .filterList-background_hidden{
            height: 180px;
        }
}
}
</style>