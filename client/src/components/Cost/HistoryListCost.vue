<script setup lang="ts">
import { CostStore } from '@/stores/Cost';
import HistoryItemCost from './HistoryItemCost.vue';
import LodaderSpinner from '../UI/LoaderSpinner.vue';

const costStore = CostStore()

const remove = (id:string) => {
    costStore.deleteCost(id)
    costStore.getAllCosts()
}

</script>

<template>
    <main class="history__cost">
        <div v-if="costStore.costs.length" class="history__cost-content">
            <div class="history__cost-costTrue">
                <h2 class="history__cost-total">Total Cost: {{ costStore.totalCost }} </h2>
                <transition-group name="listInfo" tag="ul" class="history__cost-list">
                    <HistoryItemCost v-for="cost in costStore.costs" :key="cost._id" :cost=cost @remove="remove"  />
                </transition-group>
            </div>
        </div>
        <div class="else" v-else-if="costStore.costs.length == 0"><p>You don't have spending</p></div>
        <LodaderSpinner v-else />
    </main>
</template>
<style lang="scss">

.history__cost-list{
    display: flex;
    flex-direction: column;
    position: relative;
}
.history__cost-total{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 30px 0px;
}

</style>