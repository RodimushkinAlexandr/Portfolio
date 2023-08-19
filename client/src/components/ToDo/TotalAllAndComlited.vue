<script setup lang="ts">
import { ToDoStore } from '@/stores/ToDo';


const toDoStore = ToDoStore()

</script>

<template>
    <div class="totals__tasks">
        <p>Total tasks: <span>{{ toDoStore.sizeAll}}</span></p>
        <div class="totals__sort">
            <p>Selected: <span>{{ toDoStore.sizeSelected}}</span></p>
            <p>Completed: <span>{{ toDoStore.sizeComplited}} of {{ toDoStore.sizeAll }}</span></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.totals__tasks {
    display: flex;
    justify-content: space-between;
    font-style: 16px;

    .totals__sort{
        display: flex;
        :not(:last-child) {
            margin-right: 10px;
        }
    }

    p {
        color: #516d8c;
        

        span {
            display: inline-block;
            padding: 4px 8px;
            background-color: #333333;
            border-radius: 8px;
            color: #D9D9D9;
            box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.64);

        }
    }

    @media (max-width:480px) {
        // flex-direction: column;

        .totals__sort{
            display: flex;
            flex-direction: column;
            align-items: end;

                :not(:last-child) {
                    margin-right: 0px;
                    margin-bottom: 10px;
                }
        }
    }
}
</style>