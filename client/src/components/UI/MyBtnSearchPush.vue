<script setup lang="ts">

export interface Props {
    background?: string
    icon?: string
    hover?: string 
}

const props = withDefaults(defineProps<Props>(), {
    background: '#394C60',
    icon: "",
    hover: "#9f9fa1"
})

</script>

<template>
    <button class="btn" :style="{ 'background-color': props.background }">
        <slot></slot>
        <span id="icon-bnt" v-if="icon" :class="props.icon"></span>
    </button>
</template>

<style lang="scss" scoped>
.btn {
    background-color: #394C60;
    border-radius: 8px;
    font-size: 18px;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 3px;
    flex: 0 0 auto;
    color: #9f9fa1;
    box-shadow: 0px 5px 30px 9px rgba(0, 0, 0, 0.64);
    transition: all ease-in-out .2s;

    &:hover{
        color: v-bind(hover)
    }
}
</style>