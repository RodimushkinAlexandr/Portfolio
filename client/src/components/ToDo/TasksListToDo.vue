<script setup lang="ts">
import type Task from '@/types/ToDoTypes';
import { ToDoStore } from '@/stores/ToDo';
import TasksItemToDo from './TasksItemToDo.vue';
import type changeTask from '@/types/ToDoChangesTypes';

const todoStore = ToDoStore()
todoStore.getAllToDo()

const removeTask = (task:Task) => {
    todoStore.deleteTask(task._id)
}

const complitedTask = (task: Task) => {
    task.complited = !task.complited
    task.selected = false
    todoStore.sortTasksSelected()
    todoStore.complitedAndSelectedTask(task)
}

const selectedTask = (task: Task) => {
    todoStore.sortTasksSelected()
    todoStore.complitedAndSelectedTask(task)
}

const changeTextSave = (task:changeTask) => {
    task.task.text = task.text
    todoStore.complitedAndSelectedTask(task.task)
}   

</script>

<template>
    <transition-group tag="ul" name="tasks" class="list" >
        <TasksItemToDo v-for="task in todoStore.tasks" :key="task._id" :task="task" 
            @selected="selectedTask"
            @complited="complitedTask"
            @remove="removeTask"
            @changeTextSave="changeTextSave">
        </TasksItemToDo>
    </transition-group>
</template>

<style lang="scss" scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
}

.tasks-enter-active,
.tasks-leave-active {
  transition: all 0.5s ease;
}
.tasks-enter-from,
.tasks-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>