<script setup lang="ts">
import TasksListToDo from '@/components/ToDo/TasksListToDo.vue';
import TotalAllAndComlited from '@/components/ToDo/TotalAllAndComlited.vue';
import FormInputButton from '@/components/UI/FormInputButton.vue';
import LoaderSpinner from '@/components/UI/LoaderSpinner.vue';
import { ToDoStore } from '@/stores/ToDo';
import { ref } from 'vue';

const todoStore = ToDoStore()

const create = ()=> {
    todoStore.task.text ? todoStore.createToDo() : ''
}

const showToDoContent = ref<boolean>(false)

;(async function showToDo() {
    await todoStore.getAllToDo()
    showToDoContent.value = true
})()


</script>

<template>
    <div class="todo container">
        <FormInputButton 
            :placeholder="'New Task'"
            :icon="'mdi mdi-plus icon'"
            v-model:value="todoStore.task.text"
            :valueButton="'Add'"
            @submit="create"
            class="formToDo"
        />
        <div v-if="showToDoContent" class="todo__content">
            <TotalAllAndComlited class="total_tasks" />
            <TasksListToDo />
        </div>
        <LoaderSpinner v-else />
    </div>
</template>

<style lang="scss">
    .total_tasks{
        margin-bottom: 18px;
    }

    .formToDo {
        display: flex;
        width: 100%;
        gap: 8px;
        margin-bottom: 33px;

    @media (max-width: 768px) {
        .formToDo {
            justify-content: center;
            width: 100%;
            gap: 0px;
        }
    }
    }
</style>