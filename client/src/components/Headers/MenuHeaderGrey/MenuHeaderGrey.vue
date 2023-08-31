<script setup lang="ts">
import { computed } from 'vue';
import type menuHeaderGrey from '@/types/MenuHeaderGreyTypes';
import MenuHeaderItem from './MenuHeaderItem.vue';
import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void
}>()

interface Props {
    modelValue: string
    contentMenu: menuHeaderGrey[]
    short?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    short: false
})


const selectedMenu = computed({
    get() {
        return props.modelValue
    }, 
    set(modelValue:string) {
        emit('update:modelValue', modelValue)
    }
})

const amountItemMenu = ref<boolean>(props.contentMenu.length <=3)

</script>

<template>  
    <header class="header" :class="{'three': amountItemMenu}">
        <form class="header__menu-list">
           <MenuHeaderItem 
            v-for="content in contentMenu" 
            v-model="selectedMenu" 
            :key="content.text" 
            :content="content"
            :short="short" />
        </form>
    </header>
</template>

<style lang="scss" scoped>
.header {
    
    display: flex;
    justify-content: center;
    width: 100%;

    &.three{
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

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
}
</style>
