<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponen from '../Headers/HeaderComponent/HeaderComponen.vue';
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue';

const showComponent = ref<boolean>(true)


</script>

<template>
    <section class="costMain">
        <HeaderComponen v-model:show="showComponent" :text="'ToDo'" :icon="'mdi mdi-list-status'" />
        <main class="costMain__main main-main" :class="{margin: showComponent}">
            <transition name="main" mode="out-in">
                <div class="costMain__blocks blocks" v-if="showComponent">
                    <div class="costMain__block">
                        <p class="costMain__total">Total Cost: <span>100</span></p>
                        <MyBtnSearchPush to="Cost">New Cost</MyBtnSearchPush>
                    </div>
                </div>
            </transition>
        </main>
    </section>
</template>

<style lang="scss" >
    .costMain__block{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .costMain__total{
        span{
            display: inline;
        }
    }
</style>