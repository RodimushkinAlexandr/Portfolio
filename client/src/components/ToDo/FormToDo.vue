<script setup lang="ts">
import { ToDoStore } from '@/stores/ToDo';
import InputText from '../UI/inputText.vue';
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue';

const todoStore = ToDoStore()

const create = ()=> {
    todoStore.task.text ? todoStore.createToDo() : ''
}

</script>

<template>
    <form class="addTask" @submit.prevent>
        <InputText v-model=todoStore.task.text :placeholder="'New Task'" />
        <MyBtnSearchPush :icon="'mdi mdi-plus'" @click="create">Add</MyBtnSearchPush>
    </form>
</template>


<style lang="scss">
    .addTask {
        display: flex;
        width: 100%;
        gap: 8px;

    @media (max-width: 768px) {
        .addTask {
            justify-content: center;
            width: 100%;
            gap: 0px;
        }
    }
}
</style>