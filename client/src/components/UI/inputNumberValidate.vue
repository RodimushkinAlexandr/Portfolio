<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    rules: Function,
    modelValue: number | null
    placeholder: string,
}>()

const emit =  defineEmits<{
    (e: 'update:modelValue', value: number): void
 }>()

const textValidate = ref<string>('')
const validate = () => textValidate.value = props.rules(props.modelValue)

</script>

<template >
    <div class="input__wrapper" :class="textValidate.length > 0 ? 'error' : ''">
        <input 
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
          type="number" 
          @blur="validate"
        />
        <p>{{ textValidate }}</p>
   </div>
</template>

<style lang="scss">
@import '@/assets/inputs.scss';
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    input[type='number'] {
    -moz-appearance: textfield;
    }

</style>