<script setup lang="ts">
import icon from '@/components/UI/icon.vue';
import { HeaderGlobal } from '@/stores/HeaderGlobal';

const headerGlobal = HeaderGlobal()
const linkMenu = headerGlobal.headerRouterLinkPhoneBottom
const linkMenuMain = headerGlobal.headerRouterLinkPhoneTop
</script>

<template>
    <aside>
        <div class="aside__top aside__block">
            <div class="container">
                <ul class="aside__list">
                    <li class="aside__item" v-for="link in linkMenuMain">
                        <RouterLink :to="link.routerLink" v-slot="{ isActive }">
                            <icon :size="'28px'" :color="isActive ? 'aliceblue' : '#9f9fa1'" :hover="'aliceblue'" :icon="link.icon" class="icon"/>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="aside__bottom aside__block">
            <div class="container">
                <ul class="aside__list">
                    <li class="aside__item" v-for="link in linkMenu">
                        <RouterLink :to=link.routerLink class="aside__link" v-slot="{ isActive }">
                            <icon :size="'28px'" :color="isActive ? 'aliceblue' : '#9f9fa1'" :hover="'aliceblue'" :icon="link.icon" class="icon" />
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
.aside__block {
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: #394C60;
    display: flex;
    align-items: center;
}

.aside__top {
    top: 0;
    left: 0;
    border-radius: 0px 0px 8px 8px;
}

.aside__bottom {
    bottom: 0;
    left: 0;
    border-radius: 8px 8px 0px 0px;
}

.aside__list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 15px 15px;
    align-items: center;
    margin: auto;
}

</style>