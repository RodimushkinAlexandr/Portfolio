<script setup lang="ts">
import { RouterView } from 'vue-router'
import headerGlobal from './components/Headers/HeaderGlobal/Global.vue';
import router from './router';
import { AuthStore } from './stores/Auth';
import { SettingsStore } from './stores/Settings';


const authStore = AuthStore()
const settingsStore = SettingsStore()

const isAuth = (): boolean => {
  if (!localStorage.getItem('auth')) {router.push('/Authorization'); return false}
  else {settingsStore.getUserData(); return true}
}
</script>

<template>
  <div class="wrapper">
    <div class="header" v-if="isAuth()">
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
  transition: opacity .7s ease-out;
}

//listInfo
.listInfo-leave-active {
    transition: all .3s ease-in;
}

.listInfo-enter-active{
    transition: all .3s ease-out .3s;
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
  transition: all .5s ease;
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
  transition: all .3s ease-in;
}

.listChange-enter-active {
    transition: all .3s ease-in ;
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
