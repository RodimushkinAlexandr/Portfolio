<script setup lang="ts">
import { CostStore } from '@/stores/Cost';
import HistoryItemCostVue from './HistoryItemCost.vue';
import { ref } from 'vue';
import LodaderSpinner from '../UI/LoaderSpinner.vue';

const costStore = CostStore()

const remove = (id:string) => {
    costStore.deleteCost(id)
}

const showHistoryCost = ref<boolean>(false)

;(async function showHistory() {
    await costStore.getAllCosts()
    showHistoryCost.value = true
})()

</script>

<template>
    <main class="history__cost">
        <div v-if="showHistoryCost" class="history__cost-content">
            <div v-if="costStore.costs.length != 0" class="history__cost-costTrue">
            <h2 class="history__cost-total">Total Cost: {{ costStore.totalCost }} </h2>
            <ul class="history__cost-list">
                <transition-group name="list" tag="div">
                    <HistoryItemCostVue v-for="cost in costStore.costs" :key="cost._id" :cost=cost @remove="remove"  />
                </transition-group>
            </ul>
        </div>
        <div class="else" v-else><p>You don't have spending</p></div>
        </div>
        <LodaderSpinner v-else />
    </main>
</template>
<style lang="scss" scoped>

.history__cost-total{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 30px 0px;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease-out;
}


.list-leave-to,
.list-enter-from {
    opacity: 0;
    transform: translate(-200px, 100px);
}

.list-leave-active {
    position: absolute;
}
</style>