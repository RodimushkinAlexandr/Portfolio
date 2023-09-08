<script setup lang="ts">
import type TaskRes from '@/types/ToDo/ToDoRes'
import { ToDoStore } from '@/stores/ToDo'
import TasksItemToDo from './TasksItemToDo.vue'
import type ChangeTask from '@/types/ToDo/ToDoChanges'

const todoStore = ToDoStore()
todoStore.getAllToDo()

const removeTask = async (task: TaskRes) => {
  await todoStore.deleteTask(task._id)
  await todoStore.getAllToDo()
}

const complitedTask = async (task: TaskRes) => {
  task.complited = !task.complited
  task.selected = false
  todoStore.sortTasksSelected()
  await todoStore.complitedAndSelectedTask(task)
}

const selectedTask = async (task: TaskRes) => {
  todoStore.sortTasksSelected()
  await todoStore.complitedAndSelectedTask(task)
}

const changeTextSave = async (task: ChangeTask) => {
  task.text = task.changeText
  await todoStore.complitedAndSelectedTask(task)
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
