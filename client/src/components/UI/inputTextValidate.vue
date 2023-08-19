<script setup lang="ts"> 
import { ref, } from 'vue';

const props = defineProps<{
    rules: Function,
    value: string
    placeholder: string,
}>()

const emit =  defineEmits<{
    (e: 'input', value: string): void
 }>()

const validate = () => textValidate.value = props.rules(props.value)
const textValidate = ref<string>('')

</script>

<template>
   <div class="input__wrapper" :class="textValidate.length > 0 ? 'error' : ''">
        <input 
          :placeholder="placeholder"
          :value="value"
          @input="$emit('input', ($event.target as HTMLInputElement).value)"
          type="text" 
          @blur="validate"
        />
        <p v-if="textValidate.length > 0">{{ textValidate }}</p>
   </div>
</template>

<style lang="scss" scoped>
@import '@/assets/inputs.scss'

</style>