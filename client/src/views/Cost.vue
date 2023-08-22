<script setup lang="ts">
import FormCost from '@/components/Cost/FormCost.vue';
import HistoryListCostVue from '@/components/Cost/HistoryListCost.vue';
import ChartCost from '@/components/Cost/ChartCost.vue'
import { ref } from 'vue';
import type MenuHeaderGreyTypes from '@/types/MenuHeaderGreyTypes';
import MenuHeaderGreyVue from '@/components/Headers/MenuHeaderGrey/MenuHeaderGrey.vue';

const selectedMenu = ref<string>('cost')

const contentMenu = ref<MenuHeaderGreyTypes[]>([
    {
        text: 'Chart',
        icon: 'mdi mdi-chart-box-outline',
        color: '#9f9fa1'
    },
    {
        text: 'Cost',
        icon: 'mdi mdi-wallet-plus-outline',
        color: '#9f9fa1'
    },
    {
        text: 'History',
        icon: 'mdi mdi-history',
        color: '#9f9fa1'
    },
])  

</script>

<template >
    <div class="cost container">
        <MenuHeaderGreyVue v-model="selectedMenu" :contentMenu="contentMenu" class="header__cost" />
        <FormCost v-if="selectedMenu == 'Cost'"/>
        <HistoryListCostVue v-else-if="selectedMenu == 'History'"/>
        <ChartCost v-else-if="selectedMenu == 'Chart'" />
    </div>
</template>

<style lang="scss">
    .btn{
        color: aliceblue;
    }
    .header__cost{
        margin-bottom: 20px;    
    }
</style>