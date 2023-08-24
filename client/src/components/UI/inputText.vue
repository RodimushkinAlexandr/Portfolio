<script setup lang="ts"> 
import icon from './icon.vue';

const props = defineProps<{
    modelValue: string
    placeholder: string,
}>()

const emit =  defineEmits<{
    (e: 'update:modelValue', value: string): void
 }>()

</script>

<template>
   <div class="input__wrapper">
        <input 
          :placeholder="placeholder"
          :value="modelValue"
          class="fill"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text" 
        /> 
   </div>
</template>

<style lang="scss" scoped>
@import '@/assets/inputs.scss'

</style>