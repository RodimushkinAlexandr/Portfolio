<script setup lang="ts">
import CostHeader from '@/components/Cost/HeaderCost.vue'
import FormCost from '@/components/Cost/FormCost.vue';
import HistoryListCostVue from '@/components/Cost/HistoryListCost.vue';
import ChartCost from '@/components/Cost/ChartCost.vue'
import { ref } from 'vue';

const selectedMenu = ref<string>('cost')


</script>

<template >
    <div class="cost container">
        <CostHeader v-model="selectedMenu" class="header__cost" />
        <FormCost v-if="selectedMenu == 'cost'"/>
        <HistoryListCostVue v-else-if="selectedMenu == 'history'"/>
        <ChartCost v-else-if="selectedMenu == 'chart'" />
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