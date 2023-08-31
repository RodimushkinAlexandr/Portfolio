<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponen from '../Headers/HeaderComponent/HeaderComponen.vue';
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue';
import TasksListToDo from '../ToDo/TasksListToDo.vue';
import router from '@/router';

const showComponent = ref<boolean>(true)

const routerlink = () => {
    router.push('/ToDo')
}
</script>

<template>
    <section class="toDoMain">
        <HeaderComponen v-model:show="showComponent" :text="'ToDo'" :router="'ToDo'" :icon="'mdi mdi-format-list-checkbox'"  />
        <main class="toDoMain__main main-main" :class="{margin: showComponent}">
            <transition name="main" mode="out-in">
                <div class="toDoMain__blocks blocks" v-if="showComponent">
                    <div class="toDoMain__block">
                        <TasksListToDo class="toDoMain__list" />
                        <MyBtnSearchPush @click="routerlink" class="todoMain__btn">New Task</MyBtnSearchPush>
                    </div>
                </div>
            </transition>
        </main>
    </section>
</template>

<style lang="scss" >

.toDoMain__block{
    display: flex;
    flex-direction: column;
}
  .toDoMain__list{
    margin-bottom: 10px;
  }

  .todoMain__btn{
    align-self: flex-end;
  }
</style>