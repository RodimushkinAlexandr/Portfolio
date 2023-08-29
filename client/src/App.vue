<script setup lang="ts">
import { RouterView } from 'vue-router'
import headerGlobal from './components/Headers/HeaderGlobal/Global.vue';
import router from './router';
import { AuthStore } from './stores/Auth';
import { watch } from 'vue';


const authStore = AuthStore()
authStore.userAuthentication()

// watch(authStore, () => {
//  if(authStore.isAuth) {
//     router.push({path: '/'})
//   } else {
//     router.push({path: '/Authorization'})
//   }
// })
</script>

<template>
  <div class="wrapper">
    <div class="header">
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
  .wrapper{
    display: flex;
  }

  .header{
    width: 64px;
  }

  @media (max-width: 700px) {
    .header{
    width: 0px;
  }
  }

.routerComp-enter-from,
.routerComp-leave-to {
  opacity: 0;
}

.routerComp-enter-active,
.routerComp-leave-active {
  transition: opacity .7s ease-out;
}

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

</style>
