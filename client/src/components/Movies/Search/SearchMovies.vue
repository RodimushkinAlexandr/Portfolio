<script setup lang="ts">
import MyBtnSearchPush from "@/components/UI/MyBtnSearchPush.vue";
import InputText from "@/components/UI/inputText.vue"
import { computed } from "vue";

const props = defineProps<{
   searchMovies: string
}>()

const emit = defineEmits<{
   (e: 'update:searchMovies', value: string):void
   (e: 'search', value:string):void
}>()

const search = computed({
   get() {
      return props.searchMovies
   }, 
   set(value: string) {
      emit("update:searchMovies", value)
   }
})

</script>

<template>
   <div class="search__movies">
      <section class="search__movies-top">
         <InputText @input="$emit('search', )" v-model="search" :placeholder="'Search Movie'" />
         <MyBtnSearchPush :icon="'mdi mdi-magnify'">Search</MyBtnSearchPush>
      </section>
      <section class="search__movies-bottom">

      </section>
   </div>
</template>

<style lang="css">
    .search__movies{
      max-width: 550px;
      margin: 0 auto;
    }

    .search__movies-top{
      display: flex;
      gap: 5px;
    }
</style>