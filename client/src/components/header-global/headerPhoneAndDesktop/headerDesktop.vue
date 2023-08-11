<script setup lang="ts">
import { ref } from 'vue';

    const swap = ref(false)

    const swapFunc = () => {
        swap.value = !swap.value;
    }

</script>
<template>
    <header class="header" @mousemove="swap = true" @mouseout="swap = false" :class="swap ? 'open' : 'close'">
        <nav class="header__nav">
            <div class="header__item header__item-user">
                <div class="header__image"></div>
                <p @mousemove="swap = true" class="header__username" v-if="swap">Name</p>
            </div>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-home" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">Home</p>
            </RouterLink>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-wallet" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">Wallet</p>
            </RouterLink>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-checkbox-marked-circle-plus-outline" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">ToDo</p>
            </RouterLink>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-weather-cloudy" size="30" color="white"></v-icon>
                <p @mousemove="swap = true"  class="header__item-name" v-if="swap">Weather</p>
            </RouterLink>
            <RouterLink to="/" class="header__item">
                <v-icon  icon="mdi mdi-filmstrip" size="30" color="white"></v-icon>
                <p @mousemove="swap = true" class="header__item-name" v-if="swap">Movies</p>
            </RouterLink>
        </nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">About</RouterLink> -->
    </header>
    <!-- <aside class="aside" :class="{ 'swap__menu': swap, 'openLitle': openLitle }">
        <router-link to="/" @click="swap = false">
            <div class="logo text"></div>
        </router-link>
        <div class="button-swap__menu" @mouseenter="openLitle = true" @mouseleave="openLitle = false">
            <button type="button" class="btn__swap btn__laptop" @click="swap = !swap" @touchstart="swapFunc">
                
            </button>
        </div>
        <div class="menu__list" @click="swap = false">
            <router-link to="/">
                
            </router-link>
        </div>
    </aside> -->
</template>


<style lang="scss" scoped>

.header {
    width: 64px;
    background-color: #394C60;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    padding: 16px;
    transition: width .3s ease-out;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

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

 &-name{
    margin-left: 10px;
    color: white;
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

&__username{
    position:fixed;
    top: 45px;
    margin-top: 5px;
}
}

.header {
   
    
    a.router-link-active,
        a.hover {
            color: #9e6209;

            .material-symbols-outlined,
            .text {
                transition: all ease-out .3s;
                color: #9e6209;
            }
        }

    &.openLitle {
        width: 70px;
    }

    .logo {
        margin: 16px 0px 16px 0px;
        color: #FFFFFF;


        i {
            font-size: 32px;
        }
    }

    .button-swap__menu {
        position: relative;
        top: 0;
        margin-bottom: 32px;
        transition: all ease-out .3s;
        cursor: pointer;

        .btn__swap {
            background: none;
            outline: none;
            appearance: none;

            i {
                transform: translate(6px, 0px);
                color: #FFFFFF;
                font-size: 24px;
                display: block;
                transition: all ease-out .3s;

                &:hover {
                    transform: translate(11px, 0px);
                    color: #9e6209;
                }
            }
        }
    }

    .menu__list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;


        #router__position-bottom {
            position: fixed;
            bottom: 0;
        }

        a {
            margin-bottom: 17px;
            display: flex;
            align-items: center;
            text-align: center;
            cursor: pointer;
            transition: all ease-out .3s;

            &:hover {

                .material-symbols-outlined,
                .text {
                    color: #9e6209;
                    transition: all ease-out .3s;

                }
            }
        }


        a.router-link-active,
        a.hover {
            .material-symbols-outlined,
            .text {
                transition: all ease-out .3s;
                color: #9e6209;
            }
        }

        .material-symbols-outlined {
            color: #FFFFFF;
            font-size: 28px;
            text-align: center;
        }

        .text {
            opacity: 0;
            visibility: hidden;
            font-size: 0px;
            color: #FFFFFF;

            transform: translate(-15px);
            transition: all .2s ease-out;
        }
    }

    &.swap__menu {
        width: 300px;

        &.openLitle {
            width: 300px;

        }

        .button-swap__menu {
            top: - 50px;
            align-self: flex-end;
            transform: rotate(180deg);

            .btn__swap {
                i {

                    &:hover {
                        transform: translate(11px, 0px);
                        color: #9e6209;
                    }

                }
            }
        }

        .menu__list {
            .text {
                margin-left: 10px;
                opacity: 1;
                visibility: visible;
                font-size: 24px;
                transform: translate(0px);
            }
        }
    }
}

@media (max-width: 768px) {
    .aside {
        width: 100%;
        max-height: 200px;

        flex-direction: row;
        top: 90vh;
        bottom: 0;
    }
}
</style>