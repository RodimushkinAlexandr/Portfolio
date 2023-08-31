<script setup lang="ts">
import { computed } from 'vue';
import InputText from './inputText.vue';
import MyBtnSearchPush from './MyBtnSearchPush.vue';

interface Props {
    value: string
    valueButton: string
    icon?: string
    placeholder?: string
    autofocus?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    value: '',
    valueButton: '',
    placeholder: 'Enter text',
    icon: 'mdi mdi-magnify',
    autofocus: false
    
})


const emit = defineEmits<{
    (e: 'update:value', value:string): void
    (e: 'submit'): void

}>()

const input = computed({
    get() {
        return props.value
    },
    set(value: string) {
        emit('update:value', value)
    }
})

</script>

<template >
    <form @submit.prevent class="formForm">
        <InputText v-model="input" :placeholder="placeholder" :autofocus="autofocus"/>
        <MyBtnSearchPush @click="$emit('submit')" :icon="icon">{{ valueButton }}</MyBtnSearchPush>
    </form>
</template>

<style lang="css">
    .formForm{
      display: flex;
      gap: 5px;
    }
</style>