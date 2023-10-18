<script setup lang="ts">
import { RouterView } from 'vue-router'
import headerGlobal from './components/Headers/HeaderGlobal/Global.vue'
import router from './router'
import { AuthStore } from './stores/Auth'
import { SettingsStore } from './stores/Settings'
import { computed } from 'vue'

const authStore = AuthStore()
const settingsStore = SettingsStore()

const isAuth = computed(() => {
  if (!localStorage.getItem('auth')) {
    router.push('/Authorization')
    return false
  } else {
    settingsStore.getUserData()
    return true
  }
})

function counterParent() {
  return function () {}
}
</script>

<template>
  <div class="wrapper">
    <div class="header" v-if="isAuth">
      <headerGlobal />
    </div>
    <main class="main">
      <router-view v-slot="{ Component, route }">
        <transition name="routerComp" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss">
.routerComp-enter-from,
.routerComp-leave-to {
  opacity: 0;
}

.routerComp-enter-active,
.routerComp-leave-active {
  transition: opacity 0.7s ease-out;
}

//listInfo
.listInfo-leave-active {
  transition: all 0.3s ease-in;
}

.listInfo-enter-active {
  transition: all 0.3s ease-out 0.3s;
}

.listInfo-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
.listInfo-enter-from {
  opacity: 0;
  transform: translateX(-300px);
}

//list
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

//listChange
.listChange-leave-active {
  transition: all 0.3s ease-in;
}

.listChange-enter-active {
  transition: all 0.3s ease-in;
}

.listChange-enter-from {
  opacity: 0;
  position: fixed;
}
.listChange-leave-to {
  position: absolute;
  opacity: 0;
  transform: rotateX(180deg);
}
</style>
