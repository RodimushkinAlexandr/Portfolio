<script setup lang="ts">
import { ref } from 'vue';
import MyOption from './MyOption.vue'
import icon from '../icon.vue';

const props = defineProps<{
    name: string,
    selected: string,
    options: string[]
}>()

const emit = defineEmits<{
    (e: 'update:selected', option: string): void
}>()

const isShow = ref<boolean>(false)
const optionSelected = (option:string):void => {
    isShow.value = !isShow.value;
    emit('update:selected', option)
}   

</script>

<template>
    <div class="select" @mouseover="isShow = true" @mouseout="isShow = false">
        <div class="select__select">
            <p class="select__selected">
                <span>{{ name }}</span>
                <span class="colon" v-if="selected">:</span>
                <span id="selected" v-if="selected"> {{ selected }}</span>
            </p>
            <icon :icon="'mdi mdi-chevron-down'" class="icon" :class="{ show: isShow }" />
        </div>
        <div class="select__list-wrapper" :class="{ show: isShow }">
            <ul class="select__list" v-if="options.length > 0">
                <MyOption v-for="option in options" :option="option" @selected="optionSelected"></MyOption>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.select {
    position: relative;
    background-color: rgb(48,49,53);
    box-shadow: 0px 5px 5px -5px rgba(34, 80, 103, 1);
    cursor: pointer;
    z-index: 2;

    padding: 13px;
    border-radius: 8px;

    display: flex;
    align-items: center;
   
    &:not(:last-child) {
        margin-right: 5px;
    }

    &__select{
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 100px;

        .icon{
            transition: all ease-in .3s;
            &.show{
                transform: rotate(180deg);
            }
        }
    }

    &__selected {
        font-size: 18px;
        font-weight: 400;
        width: 100%;
        display: inline-flex;    
        
    }

    #selected {
        text-transform: capitalize;
    }
    .colon{
        margin: 0px 3px 0px 1px;
    }

    &__list-wrapper {
        width: 300px;
        margin-top: -20px;

        position: absolute;
        left: 0;
        top: 55px;
        z-index: 2;

        transform: translate(0px, -10px);

        opacity: 0;
        visibility: hidden;
        transition: all ease .3s;

        &.show {
            opacity: 1;
            visibility: visible;
            transform: translate(0px, 0px);
            z-index: 10;
        }
    }

    &__list {
        background-color: #333333;
        box-shadow: 0px 5px 5px -5px rgba(34, 80, 103, 1);

        font-size: 18px;
        font-weight: 400;
        display: flex;
        flex-wrap: wrap;
        max-height: 300px;
        overflow-y: auto;
        margin-top: 20px;
        
        width: 100%;
        padding: 10px;
        border-radius: 12px;
    }
}

</style>