<script setup lang="ts"> 
import { ref, } from 'vue';
import '@/assets/inputs.scss'

interface Props {
  rules: Function
  modelValue: string
  name?: string
  placeholder?: string
  autofocus?: boolean
  mediaPhone?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Enter text',
    autofocus: false,
    mediaPhone: false,
    name: 'inputTextValidate'
})

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
          :autofocus="autofocus"
          :name="name"
          :placeholder="placeholder"
          :value="modelValue"
          :class="{mediaPhone : mediaPhone}"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          type="text" 
          @blur="validate"
        />
        <p v-if="textValidate.length > 0">{{ textValidate }}</p>
   </div>
</template>
