<script setup lang="ts"> 
import { ref, } from 'vue';


const props = defineProps<{
  rules: Function,
  modelValue: string
  placeholder?: string,
}>()

const emit =  defineEmits<{
    (e: 'update:modelValue', modelValue: string): void
 }>()

const textValidate = ref<string>('')

const validate = async () => {
  textValidate.value = await props.rules(props.modelValue)
}

</script>

<template>
   <div class="input__wrapper" :class="textValidate.length > 0 ? 'error' : ''">
        <input 
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text" 
          @blur="validate"
        />
        <p v-if="textValidate.length > 0">{{ textValidate }}</p>
   </div>
</template>

<style lang="scss" scoped>
@import '@/assets/inputs.scss'

</style>