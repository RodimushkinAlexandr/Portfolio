<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

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
    <header class="cost__header">
        <form class="cost__menu-list">
            <label for="chart" class="cost__menu-item" :class=" selectedMenu == 'chart' ? 'active' :'' " >Chart
                <v-icon color="#9f9fa1" icon="mdi mdi-chart-box-outline" size="25"></v-icon>
                <input v-model="selectedMenu" value="chart" type="radio" name="menu-cost" class="cost__input" id="chart">
            </label>
            <label for="cost" class="cost__menu-item" :class=" selectedMenu == 'cost' ? 'active' :'' ">Cost
                <v-icon color="#9f9fa1" icon="mdi mdi-wallet-plus-outline" size="25"></v-icon>
                <input v-model="selectedMenu" type="radio" value="cost" name="menu-cost" class="cost__input" id="cost">
            </label>
            <label for="history" class="cost__menu-item" :class=" selectedMenu == 'history' ? 'active' :'' ">History
                <v-icon color="#9f9fa1" icon="mdi mdi-history" size="25"></v-icon>
                <input v-model="selectedMenu" type="radio" value="history" name="menu-cost" class="cost__input" id="history">
            </label>
        </form>
    </header>
</template>

<style lang="scss">
.cost {

&__header {
    display: flex;
    justify-content: center;
    width: 100%;

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
