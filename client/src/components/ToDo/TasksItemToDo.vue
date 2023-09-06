<script setup lang="ts">
import type Task from '@/types/ToDo/ToDo';
import InputCheckbox from '../UI/inputCheckbox.vue';
import icon from '../UI/icon.vue';
import { ref } from 'vue';
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue';
import type changeTask from '@/types/ToDo/ToDoChanges';

const props = defineProps<{
    task: Task
}>()

const emit = defineEmits<{
    (e: 'complited', value: Task): void
    (e: 'remove', value: Task): void
    (e: 'selected', value: Task): void
    (e: 'changeTextSave', value: changeTask ): void
}>()

const changeTextSave = () => {
    showChangeText.value = false
    const changeTask = {
        ...props.task,
        changeText: changeText.value,
    }
    emit('changeTextSave', changeTask)
}

const showChangeText = ref<boolean>(false)
const changeText = ref<string>(props.task.text)

</script>

<template>
    <transition-group name="listChange" tag="li" class="taskItem">
        <div 
             v-if="!showChangeText" 
             @click="$emit('complited', task)" 
             :class="{complitedLi: task.complited, selectedLi: task.selected}" 
             class="taskItem__content">
                <InputCheckbox v-model="task.complited" :name="task._id" />
                <p :class="{complited: task.complited}" class="taskItem__text">{{ task.text }}</p>
                <div class="item__buttons">
                <icon
                    v-if="!task.complited"
                    @click.stop="showChangeText = true"
                    :icon="'mdi mdi-lead-pencil'" 
                    :color="showChangeText? '#993b3b': ' '"
                    :hover="'#993b3b'" 
                    :size="'19px'">
                </icon>
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
        </div>
        <div v-else class="taskItem__content change">
            <input name="changeInput" type="text" autofocus v-model="changeText" @click.stop class="taskItem__content-input">
            <MyBtnSearchPush @click.stop="changeTextSave" class="saveChangebtn">Save</MyBtnSearchPush>
        </div>
    </transition-group>
</template>

<style lang="scss" scoped>

.span_back {
    backdrop-filter: blur(1px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.taskItem{
    .taskItem__content {
        &.change{
            padding: 2px;

            .taskItem__content-input{
                width: 100%;
                padding: 14px;
                background-color: rgba(0, 0, 0, 0.5);                
                border-radius: 8px;
            }
        }
    }
}

.taskItem__content {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    background-color: #333333;
    border: 3px solid #333333;
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
        border-color: #262525;
    }
    
    &.selectedLi{
        border-color: #394C60;
    }

    .taskItem__text{
        flex: 1 1 auto;
        display: flex;
        justify-content: start;
        font-size: 16px;
        width: 100%;
    }

    .item__buttons{
        display: flex;
        :not(:last-child) {
            margin-right: 10px;
        }
    }

    .complited {
        text-decoration: line-through;
        color: #808080;
        transition: all ease .5s;
    }
}
</style>