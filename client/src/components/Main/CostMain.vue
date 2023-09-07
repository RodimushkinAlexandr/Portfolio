<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponen from '../Headers/HeaderComponent/HeaderComponen.vue'
import MyBtnSearchPush from '../UI/MyBtnSearchPush.vue'
import router from '@/router'
import { CostStore } from '@/stores/Cost'

const showComponent = ref<boolean>(true)
const costStore = CostStore()
costStore.getAllCosts()

const routerlink = () => {
  router.push('Cost')
}
</script>

<template>
  <section class="costMain">
    <HeaderComponen
      v-model:show="showComponent"
      :router="'Cost'"
      :text="'Cost'"
      :icon="'mdi mdi-wallet'"
    />
    <main class="costMain__main main-main" :class="{ margin: showComponent }">
      <transition name="main" mode="out-in">
        <div class="costMain__blocks blocks" v-if="showComponent">
          <div class="costMain__block">
            <p class="costMain__total">Total Cost: {{ costStore.totalCost }}$</p>
            <MyBtnSearchPush @click="routerlink">New Cost</MyBtnSearchPush>
          </div>
        </div>
      </transition>
    </main>
  </section>
</template>

<style lang="scss">
.costMain__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.costMain__total {
  span {
    display: inline;
  }
}
</style>
