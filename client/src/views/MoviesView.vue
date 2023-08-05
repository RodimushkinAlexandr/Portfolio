<template>
  <main>
    <h1>Title</h1>
    <button @click="moviesStore.getMovies">fewlfpwle</button>

    <form v-if="!registrationStore.userId" @submit.prevent="registrationStore.registration" style="margin-bottom: 25px; border-bottom: 1px solid #fff;">
      <v-text-field v-model="registrationStore.email" label="Another input"></v-text-field>
      <v-text-field v-model="registrationStore.password" label="Another input"></v-text-field>
      <v-text-field v-model="registrationStore.cityWeather" label="Another input"></v-text-field>
      <v-btn @click="registrationStore.registration">
        Button
      </v-btn>
    </form>

    <form @submit.prevent="moviesStore.deleteUser">
        <v-text-field v-model="moviesStore.userId" label="UserID"></v-text-field>
        <v-btn @click="moviesStore">
          Delete User
        </v-btn>
      </form>
  </main>
</template>

<script setup lang="ts">
import { useMovies } from '@/stores/useMovies';
import { useRegistration } from '@/stores/useRegistration';

const moviesStore = useMovies()
const registrationStore = useRegistration()

</script>

<style>
 
</style>