<script setup lang="ts"> 
import '@/assets/inputs.scss'

interface Props {
  modelValue: string
  placeholder?: string
  autofocus?: boolean
  mediaPhone?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Enter text',
    autofocus: false,
    mediaPhone: false
})

const emit =  defineEmits<{
    (e: 'update:modelValue', value: string): void
 }>()

</script>

<template>
   <div class="input__wrapper">
        <input 
          :autofocus="autofocus"
          :placeholder="placeholder"
          :value="modelValue"
          :class="{mediaPhone : mediaPhone}"
          class="fill"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text" 
        /> 
   </div>
</template>
