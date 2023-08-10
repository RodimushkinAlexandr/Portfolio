<!-- <template>
    <aside class="aside" :class="{ 'swap__menu': swap, 'openLitle': openLitle }">
        <router-link to="/" @click="swap = false">
            <div class="logo text"><span class="material-symbols-outlined">cottage</span></div>
        </router-link>
        <div class="button-swap__menu" @mouseenter="openLitle = true" @mouseleave="openLitle = false">
            <button type="button" class="btn__swap btn__laptop" @click="swap = !swap" @touchstart="swapFunc">
                <span class="material-symbols-outlined btn">double_arrow</span>
            </button>
        </div>
        <div class="menu__list" @click="swap = false">
            <router-link to="/Movies">
                <span class="material-symbols-outlined">hd</span>
                <span class="text">Movies</span>
            </router-link>
            <router-link to="/Weather">
                <span class="material-symbols-outlined">thermostat</span>
                <span class="text">Weather</span>
            </router-link>
            <router-link to="/ToDo">
                <span class="material-symbols-outlined">checklist</span>
                <span class="text">ToDo</span>
            </router-link>
            <router-link to="/Wallet">
                <span class="material-symbols-outlined">account_balance_wallet</span>
                <span class="text">Wallet</span>
            </router-link>
            <router-link id="router__position-bottom" to="/User">
                <span class="material-symbols-outlined">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script lang="ts" setup>

    // name: 'my-aside-desktop',
    
</script>

<style lang="scss" scoped>
.aside {
    width: 64px;
    background-color: #394C60;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    padding: 16px;

    color: #EFECE7;
    transition: width .3s ease-out;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    
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


        span {
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

            span {
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
                span {

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
</style> -->