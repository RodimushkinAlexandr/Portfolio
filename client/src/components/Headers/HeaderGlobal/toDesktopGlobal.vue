<script setup lang="ts">
import { ref } from 'vue'
import icon from '@/components/UI/icon.vue'
import { HeaderGlobal } from '@/stores/HeaderGlobal'
import { RouterLink } from 'vue-router'
import { SettingsStore } from '@/stores/Settings'

const headerGlobal = HeaderGlobal()

const settingsStore = SettingsStore()

const swap = ref(false)
const swapFunc = () => {
  swap.value = !swap.value
}
</script>
<template>
  <header
    class="header"
    @mousemove="swap = true"
    @mouseout="swap = false"
    :class="swap ? 'open' : 'close'"
  >
    <nav class="header__nav">
      <div class="header__item header__item-user">
        <div class="header__image"></div>
        <p @mousemove="swap = true" class="header__username" v-if="swap">
          {{ settingsStore.user.username }}
        </p>
      </div>
      <RouterLink
        v-for="content in headerGlobal.headerRouterLinkDesktop"
        v-slot="{ isActive }"
        :to="content.routerLink"
        class="header__item"
      >
        <icon
          :icon="content.icon"
          :color="isActive ? 'aliceblue' : '#9f9fa1'"
          :size="'30px'"
        ></icon>
        <p @mousemove="swap = true" class="header__item-name" v-if="swap">{{ content.text }}</p>
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 64px;
  background-color: #394c60;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: width 0.3s ease-out;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  a.router-link-active {
    .header__item-name {
      color: aliceblue;
    }
  }

  &.open {
    width: 200px;
  }
  // .header__nav

  &__nav {
    display: flex;
    flex-direction: column;
  }

  // .header__item

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &:last-child {
      position: fixed;
      bottom: 10px;
    }

    &-name {
      margin-left: 10px;
      color: #9f9fa1;
      font-size: 22px;
    }
  }

  // .header__item-user

  &__item-user {
    flex-direction: column;
    margin-bottom: 50px;
  }
  &__image {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: aliceblue;
  }

  &__username {
    position: fixed;
    top: 45px;
    margin-top: 5px;
  }
}
</style>
