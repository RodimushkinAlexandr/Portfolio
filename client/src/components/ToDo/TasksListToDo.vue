<script setup lang="ts">
import type Task from '@/types/ToDo/ToDo'
import { ToDoStore } from '@/stores/ToDo'
import TasksItemToDo from './TasksItemToDo.vue'
import type ChangeTask from '@/types/ToDo/ToDoChanges'

const todoStore = ToDoStore()
todoStore.getAllToDo()

const removeTask = (task: Task) => {
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

const changeTextSave = (task: ChangeTask) => {
  task.text = task.changeText
  todoStore.complitedAndSelectedTask(task)
}
</script>

<template>
  <transition-group tag="ul" name="list" class="tasks__list">
    <TasksItemToDo
      v-for="task in todoStore.tasks"
      :key="task._id"
      :task="task"
      @selected="selectedTask"
      @complited="complitedTask"
      @remove="removeTask"
      @changeTextSave="changeTextSave"
    >
    </TasksItemToDo>
  </transition-group>
</template>

<style lang="scss">
.tasks__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}
</style>
