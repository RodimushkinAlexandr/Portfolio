<script setup lang="ts">
import { ref } from 'vue';
import { AuthStore } from '@/stores/Auth';

const authStore = AuthStore()

const swap = ref(false)
const swapFunc = () => {
    swap.value = !swap.value;
}

</script>
<template>
    <header class="header" @mousemove="swap = true" @mouseout="swap = false" :class="swap ? 'open' : 'close'">
        <nav class="header__nav">
            <div class="header__item header__item-user">
                <div class="header__image"></div>
                <p @mousemove="swap = true" class="header__username" v-if="swap">{{ authStore.authUser.username }}</p>
            </div>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-home" size="30" color="blue-grey-lighten-1"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">Home</p>
            </RouterLink>
            <RouterLink to="/Cost" class="header__item">
                <v-icon  icon="mdi mdi-wallet" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">Cost</p>
            </RouterLink>
            <RouterLink to="/ToDo" class="header__item">
                <v-icon  icon="mdi mdi-checkbox-marked-circle-plus-outline" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">ToDo</p>
            </RouterLink>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-weather-cloudy" size="30" color="white"></v-icon>
                <p @mousemove="swap = true"  class="header__item-name" v-if="swap">Weather</p>
            </RouterLink>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-filmstrip" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">Movies</p>
            </RouterLink>
            <RouterLink to="/" class="header__item flex_bottom">
                <v-icon  icon="mdi mdi-cog" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">Movies</p>
            </RouterLink>
        </nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">About</RouterLink> -->
    </header>
</template>


<style lang="scss" scoped>

.header {
    width: 64px;
    background-color: #394C60;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    padding: 16px;
    transition: width .3s ease-out;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    &.open {
        width: 200px;
    }
// .header__nav

&__nav {
    display: flex;
    flex-direction: column;
}

// .header__item

&__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &.flex_bottom{
        position: fixed;
        bottom: 10px;
    }

 &-name{
    margin-left: 10px;
    color: white;
 }
}

// .header__item-user

&__item-user {
    flex-direction: column;
    margin-bottom: 50px;

}
&__image {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: aliceblue;
}

&__username{
    position:fixed;
    top: 45px;
    margin-top: 5px;
}
}


</style>