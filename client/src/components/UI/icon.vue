<script setup lang="ts">

export interface Props {
    icon: string,
    color?: string
    hover?: string
    size?: string
}

const props = withDefaults(defineProps<Props>(), {
    icon: '',
    color: 'white',
    hover: "white",
    size: '18px'
})
</script>

<template>
    <div class="wrapper__icon">
       <span :class="icon"></span>
    </div>
</template>

<style lang="scss">
    .wrapper__icon{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        color: v-bind(color);
        font-size: v-bind(size);
        transition: all .3s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            color: v-bind(hover)
        }      
    }
</style>