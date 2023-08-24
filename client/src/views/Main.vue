<script setup lang="ts">
import CostMain from '@/components/Main/CostMain.vue';
import MoviesMain from '@/components/Main/MoviesMain.vue';
import ToDoMain from '@/components/Main/ToDoMain.vue';
import WeatherMain from '@/components/Main/WeatherMain.vue';

</script>

<template>
    <div class="container main">
        <transition-group tag="main" class="home__blocks" mode="out-in" name="main">
            <WeatherMain class="home__block" :key="1"/>
            <MoviesMain class="home__block" :key="2" />
            <ToDoMain class="home__block" :key="3" />
            <CostMain class="home__block" :key="4" />
        </transition-group>
    </div>
</template>

<style lang="scss">

    .main {
        font-size: 20px;
    }

    .main-main{
    transition: all .5s ease;

        &.margin{
            margin-top: 20px;
        }

        &.showMargin{
            margin-top: 30px;
        }
}

.home__blocks {
    transition: all 1s;
    display: inline-block;
    width: 100%;
}
.home__block {
    box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.64);   
     background-color: rgba($color: #333333, $alpha: 0.5);
    padding: 10px;
    border-radius: 8px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
}


.main-move,
.main-enter-active,
.main-leave-active {
    transition: all .3s ease-out .1s;
}


.main-leave-to,
.main-enter-from {
  opacity: 0;
  transform: translateY(-5px);
}

</style>