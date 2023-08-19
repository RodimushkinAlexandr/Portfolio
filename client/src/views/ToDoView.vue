<script setup lang="ts">
import FormToDo from '@/components/ToDo/FormToDo.vue';
import TasksListToDo from '@/components/ToDo/TasksListToDo.vue';
import TotalAllAndComlited from '@/components/ToDo/TotalAllAndComlited.vue';


</script>

<template>
    <div class="todo container">
        <FormToDo class="formToDo"/>
        <TotalAllAndComlited class="total_tasks" />
        <TasksListToDo />
    </div>
</template>

<style lang="scss">
    .formToDo{
        margin-bottom: 33px;
    }
    .total_tasks{
        margin-bottom: 18px;
    }
</style>