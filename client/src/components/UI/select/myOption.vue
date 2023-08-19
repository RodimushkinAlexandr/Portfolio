<script setup lang="ts">
const props = defineProps<{
    option: string
}>()

const emit = defineEmits<{
    (e: 'selected', option: string): void
}>()

</script>

<template>   
    <li 
        class="select__item"
        :key="option"
        @click="emit('selected', option)"
        >{{ option }}
    </li>                
</template>

<style lang="scss" scoped>
.select__item {
    transition: transform ease .3s;
    padding: 5px 8px;
    margin: 3px;
    background-color: #292929;
    border-radius: 12px;
    font-size: inherit;
    text-transform: capitalize;
    border: 1px solid #292929;

    &:hover {
        transform: scale(1.1);
        border-color: #FFF;
    }
}
</style>