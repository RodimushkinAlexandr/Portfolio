<script setup lang="ts">

const props = defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

</script>

<template >
    <input type="checkbox" :checked="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
</template>

<style lang="scss">
$inputBorder: #4EA8DE;
$black: #363839;
$gray: #bdc1c6;
$white: #F2F2F2;
$green: #06842c;

input[type="checkbox"] {
    position: relative;
    width: 22px;
    height: 20px;
    border: 1px solid $inputBorder;
    border-radius: 50%;
    appearance: none;
    outline: 0;
    cursor: pointer;
    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

    &::before {
        position: absolute;
        content: '';
        display: block;
        top: 3px;
        left: 7.3px;
        width: 6px;
        height: 10px;
        border-style: solid;
        border-color: $white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
    }

    &:checked {
        color: $white;
        background: #4EA8DE;

        &::before {
            opacity: 1;
        }
    }
}
</style>