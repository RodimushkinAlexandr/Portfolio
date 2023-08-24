<script setup lang="ts">

export interface Props {
    background?: string
    icon?: string
    hover?: string 
}

const props = withDefaults(defineProps<Props>(), {
    background: '#394C60',
    icon: "",
    hover: "aliceblue"
})

</script>

<template>
    <button class="btn" :style="{ 'background-color': props.background }">
        <slot></slot>
        <span v-if="icon" :class="icon" class="icon"></span>
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
    border: 1px solid #394C60;
    box-shadow: 0px 5px 30px 9px rgba(0, 0, 0, 0.64);
    transition: all ease-in-out .2s;

    &:hover{
        color: v-bind(hover);
        border: 1px solid;
        border-color: v-bind(hover);
        .icon{
            color: aliceblue;
        }
    }
    .icon{
            color: #9f9fa1;
            font-size: 20px;
            transition: all ease-in .2s;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 3px;
            --dp-animation-duration: 0s;
        }
}
</style>