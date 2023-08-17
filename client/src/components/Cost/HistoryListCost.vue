<script setup lang="ts">
import { CostStore } from '@/stores/Cost';
import HistoryItemCostVue from './HistoryItemCost.vue';
import type Cost from '@/types/CostTypes';

const costStore = CostStore()
costStore.getAllCosts()

const remove = (id:string) => {
    costStore.deleteCost(id)
}

</script>

<template>
    <main class="history__cost">
        <ul class="history__cost-list" v-if="costStore.costs.length != 0">
            <transition-group name="list" tag="div">
                <HistoryItemCostVue v-for="cost in costStore.costs" :key="cost._id" :cost=cost @remove="remove"  />
            </transition-group>
        </ul>
        <div class="else" v-else><p>You don't have spending</p></div>
    </main>
</template>
<!-- @remove="$emit('remove', item)" -->
<style lang="scss">
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