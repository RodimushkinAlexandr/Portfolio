<script setup lang="ts">
import type Task from '@/types/ToDoTypes';
import { ToDoStore } from '@/stores/ToDo';
import TasksItemToDo from './TasksItemToDo.vue';

const todoStore = ToDoStore()
todoStore.getAllToDo()

const removeTask = (task:Task) => {
    todoStore.deleteTask(task._id)
}

const complitedTask = (task: Task) => {
    todoStore.sortTasksSelected()
    todoStore.complitedAndSelectedTask(task)
}

const selectedTask = (task: Task) => {
    todoStore.sortTasksSelected()
    todoStore.complitedAndSelectedTask(task)
}
</script>

<template>
    <transition-group tag="ul" name="tasks" mode="out-in" class="list" >
        <TasksItemToDo v-for="task in todoStore.tasks" :key="task._id" :task="task" 
            @selected="selectedTask"
            @complited="complitedTask"
            @remove="removeTask">
        </TasksItemToDo>
    </transition-group>
    <p>{{ todoStore.sizeComplited }}</p>
</template>

<style lang="scss">
.list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
}

.tasks-move,
.tasks-enter-active,
.tasks-leave-active {
    transition: all 0.4s ease-out;
}


.tasks-leave-to,
.tasks-enter-from {
    opacity: 0;
    transform: translate(0px, 100px);
}

.tasks-leave-active {
    position: absolute;
}
</style>