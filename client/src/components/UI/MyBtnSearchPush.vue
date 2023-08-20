<template>
    <button class="btn" :style="{ 'background-color': props.background }">
        <slot></slot>
        <span v-if="icon" :style="{'margin-left': '3px'}" :class="props.icon"></span>
    </button>
</template>

<script setup lang="ts">

export interface Props {
    background?: string
    icon?: string
}

const props = withDefaults(defineProps<Props>(), {
    background: '#394C60',
    icon: ""
})

</script>

<style lang="scss" scoped>
.btn {
    background-color: #394C60;
    border-radius: 8px;
    font-size: 18px;
    padding: 14px;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 0 0 auto;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 5px 30px 9px rgba(0, 0, 0, 0.64);

}
</style>