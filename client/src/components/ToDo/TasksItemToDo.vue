<script setup lang="ts">
import type Task from '@/types/ToDoTypes';
import InputCheckbox from '../UI/inputCheckbox.vue';
import icon from '../UI/icon.vue';

const props = defineProps<{
    task: Task
}>()

const emit = defineEmits<{
    (e: 'complited', value: Task): void
    (e: 'remove', value: Task): void
    (e: 'selected', value: Task): void
}>()
</script>

<template>
    <li 
        @click="task.complited = !task.complited, task.selected = false, $emit('complited', task)" 
        :class="task.complited ? 'complitedLi' : ''">
        <InputCheckbox v-model="task.complited" />
        <span class="item__title" :class="task.complited ? 'complited' : ''">{{ task.text }}</span>
        <div class="item__buttons">
            <icon
                v-if="!task.complited"
                @click.stop="task.selected = !task.selected, $emit('selected', task)" 
                :color="task.selected ? '#394C60' : '' " 
                :icon="'mdi mdi-heart'" 
                :hover="'#394C60'" 
                :size="'19px'">
            </icon>
            <icon 
                @click.stop="$emit('remove', task)" 
                :icon="'mdi mdi-trash-can-outline'" 
                :color="task.complited ? '#993b3b' : ''" 
                :hover="'#993b3b'" 
                :size="'19px'">
            </icon>
        </div>
    </li>
</template>

<style lang="scss" scoped>
li {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    background-color: #333333;
    border: 1px solid #333333;
    box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.64);
    border-radius: 8px;
    gap: 15px;
    padding: 16px;

    cursor: pointer;
    transition: all ease .5s;

    &:hover{
        transform: scale(1.01, 1.05);
        background-color: #5e5e5e;
    }

    &.complitedLi {
        background-color: #262525;
    }

    input {
        flex: 0 0 22px;
    }

    .item__title {
        flex: 1 1 auto;
        font-size: 16px;
        color: #F2F2F2;
    }

    .item__buttons{
        display: flex;
        :not(:last-child) {
            margin-right: 5px;
        }
    }

    .complited {
        text-decoration: line-through;
        color: #808080;
        transition: all ease .5s;
    }
}
</style>