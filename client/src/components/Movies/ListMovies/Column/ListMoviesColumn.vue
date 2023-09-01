<script setup lang="ts">
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue';
import type Movie from '@/types/Movie/Movie';
import ItemMoviesColumn from './ItemMoviesColumn.vue';

const props = defineProps<{
   movies: Movie[]
   filterCategoryProp: string
}>()

const emit = defineEmits<{
   (e: 'backToFilters', value: boolean):void
   (e: 'lookMovie', value: Movie):void
}>()



</script>

<template>
   <div class="selectedMoviesToFilter movies">
      <header class="movies__header">
      <MyBtnSearchPush @click="emit('backToFilters', true)" id="btn" :mediaPhone="true" :hover="'aliceblue'" :icon="'mdi mdi-arrow-left'">Back</MyBtnSearchPush>
      <h2 class="movies__title">{{filterCategoryProp.toUpperCase()}}</h2>
   </header>
   <main class="movies__main">
      <ul class="movies__list">
        <ItemMoviesColumn v-for="movie in movies" :key="movie._id" :movie="movie" @lookMovie="$emit('lookMovie', movie)" />
      </ul>
   </main>
   </div>
</template>

<style lang="scss" scoped>
    #btn{
      display: flex;
      flex-direction: row-reverse;
    }


.movies {
   max-width: 550px;
   margin: 0 auto;

   @media (max-width: 500px) {
            font-size: 13px;

            &__header {
               margin-bottom: 10px;
            }
        }

&__header{
      display: flex;
      align-items: center;

      :not(:last-child) {
         margin-right: 20px;
      }
   }
// .movies__list

&__list {
   display: flex;
   flex-direction: column;
}
}
</style>