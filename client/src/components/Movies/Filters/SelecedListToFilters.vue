<script setup lang="ts">
import MyBtnSearchPush from '@/components/UI/MyBtnSearchPush.vue';
import type Movie from '@/types/MovieTypes';
import SelectedItemToFilterItem from './SelectedItemToFilterItem.vue';

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
      <MyBtnSearchPush @click="emit('backToFilters', true)" id="btn"  :hover="'aliceblue'" :icon="'mdi mdi-arrow-left'">Back</MyBtnSearchPush>
      <h2 class="movies__title">{{filterCategoryProp.toUpperCase()}}</h2>
   </header>
   <main class="movies__main">
      <ul class="movies__list">
        <SelectedItemToFilterItem v-for="movie in movies" :key="movie._id" :movie="movie" @lookMovie="$emit('lookMovie', movie)" />
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

&__header{
      display: flex;
      align-items: center;

      :not(:last-child) {
         margin-right: 20px;
      }
   }

&__main {
}

// .movies__list

&__list {
   display: flex;
   flex-direction: column;
}
}
</style>