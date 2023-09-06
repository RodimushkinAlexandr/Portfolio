<script setup lang="ts">

export interface Props {
    icon: string,
    color?: string
    hover?: string
    size?: string
    activeHover?: string
    active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    icon: '',
    color: '#9f9fa1',
    hover: "#9f9fa1",
    activeHover: '#394C60',
    size: '18px',
    active: false
})
</script>

<template>
    <div class="wrapper__icon" :class="{active: active}">
       <span :class="icon"></span>
    </div>
</template>

<style lang="scss">
    .wrapper__icon{
        display: flex;
        justify-content: center;
        align-items: center;
    

        span {
            color: v-bind(color);
            font-size: v-bind(size);
            transition: all ease-in .2s;
            display: flex;
            justify-content: center;
            align-items: center;
            --dp-animation-duration: 0s;

            &:hover{
                color: v-bind(hover)
            }      
        }
        &.active {
            span {
                color: v-bind(activeHover);
            }
        }
    }
</style>