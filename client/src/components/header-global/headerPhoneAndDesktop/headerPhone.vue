<script setup lang="ts">

import { ref } from 'vue';



</script>

<template>
    <aside>
        <div class="aside__top aside__block">
            <div class="container">
                <div class="aside__list">
                    <li class="aside__item">
                        <router-link to="/">
                            <span class="material-symbols-outlined icon">cottage</span>
                        </router-link>
                    </li>
                    <li class="aside__item">
                        <router-link to="/">
                            <span class="material-symbols-outlined icon">settings</span>
                        </router-link>
                    </li>
                </div>
            </div>
        </div>
        <div class="aside__bottom aside__block">
            <div class="container">
                <ul class="aside__list">
                    <li class="aside__item">
                        <router-link to="/" class="aside__link">
                            <span class="material-symbols-outlined img icon">hd</span>
                        </router-link>
                    </li>
                    <li class="aside__item">
                        <router-link to="/" class="aside__link">
                            <span class="material-symbols-outlined img icon">thermostat</span>
                        </router-link>
                    </li>
                    <li class="aside__item">
                        <router-link to="/" class="aside__link">
                            <span class="material-symbols-outlined img icon">checklist</span>
                        </router-link>
                    </li>
                    <li class="aside__item">
                        <router-link to="/" class="aside__link">
                            <span class="material-symbols-outlined img icon">account_balance_wallet</span>
                        </router-link>
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

    a.router-link-active,
        a.hover {
            color: #9e6209;

            .material-symbols-outlined,
            .text {
                transition: all ease-out .3s;
                color: #9e6209;
            }
        }
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

.icon {
    color: rgba(255, 255, 255, 0.9);
    font-size: 28px;
}

.aside__list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    margin: auto;
}

// .aside__link {
//     width: 100%;
//     height: 100%;
// }

.img {
    font-size: 28px;
    color: rgba(255, 255, 255, 0.9);
}

</style>