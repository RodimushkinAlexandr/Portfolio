<template>
    <transition name="dialog">
        <div class="dialog" v-if="show" @click="hideDialog">
            <div @click.stop class="dialog__list">
                <slot></slot>
                <icon @click="hideDialog" :size="'22px'" :icon="'mdi mdi-window-close'" :color="'red'" :hover="'red'" class="top_close"></Icon>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import Icon from './icon.vue';


const props = defineProps<{
    show: boolean
}>()

const emit = defineEmits<{
    (e: 'update:show', value: boolean): void
}>()

const hideDialog = () => {
    emit('update:show', false)
}

</script>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    top: 0;
    left: 64px;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.81);
    z-index: 100;
    display: flex;
    padding: 0px 10px;

    &__list {
        margin: auto;
        background-color: #1A1A1A;
        border-radius: 15px;
        min-height: 70px;
        min-width: 300px;
        padding-top: 28px;
        position: relative;

        .top_close{
            position: absolute;
            top: 9px;
            right: 11px;
            cursor: pointer;
            transition: all ease-in-out .3s;
            padding: 2x;
            &:hover{
                color: red;
            }
        }
    }
}

@media (max-width: 768px) {
    .dialog {
        left: 0;
    }
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all .25s ease;
}
</style>