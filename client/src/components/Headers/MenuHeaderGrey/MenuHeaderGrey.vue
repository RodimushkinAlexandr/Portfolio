<script setup lang="ts">
import { computed } from 'vue';
import type menuHeaderGrey from '@/types/MenuHeaderGreyTypes';
import icon from '@/components/UI/icon.vue';

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
    modelValue: string
    contents: menuHeaderGrey[]
}>()

const selectedMenu = computed({
    get() {
        return props.modelValue
    }, 
    set(value:string) {
        emit('update:modelValue', value)
    }
})

</script>

<template>  
    <header class="header">
        <form class="header__menu-list">
            <label v-for="content in contents" :id="content.text"  :for="content.text" class="header__menu-item" :class=" selectedMenu == content.text ? 'active' :'' " >{{ content.text }}
                <icon :icon="content.icon" :color="content.color" />
                <input v-model="selectedMenu" :value="content.text" type="radio" name="header-menu" class="header__input" :id="content.text">
            </label>
        </form>
    </header>
</template>

<style lang="scss" scoped>
.header {
    
    display: flex;
    justify-content: center;
    width: 100%;

&__menu-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: 0 5px 30px 2px rgba(0,0,0,.64);
    background-color: #333333;
    border-radius: 8px;
    padding: 3px;
}


&__menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 8px 8px;
    min-width: 64px;
    cursor: pointer;
    transition: all .3s ease;
    border: 1px solid #333333;
    color: #9f9fa1;
    box-shadow: 0 5px 30px 2px rgba(0,0,0,.64);
    background-color: #333333;

    &.active{
        box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.8);
        border-color: #9f9fa1;
        transform: scale(1.05);
    }


    &:hover{
        box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.8);
        border-color: #FFF;
        transform: scale(1.1);
    }
}
}
</style>
