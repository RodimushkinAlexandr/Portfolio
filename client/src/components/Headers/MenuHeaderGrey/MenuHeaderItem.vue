<script setup lang="ts">
import type MenuHeaderGrey from '@/types/MenuHeaderGrey'
import { computed } from 'vue';


interface Props {
    modelValue: string
    content: MenuHeaderGrey
    short?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    short: false
})

const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void
}>()

const selectedMenu = computed({
    get() {
        return props.modelValue
    }, 
    set(modelValue:string) {
        emit('update:modelValue', modelValue)
    }
})

</script>

<template>
     <label 
        :for="content.text" 
        class="header__menu-item" 
        :class="{active: modelValue == content.text, short:short}" 
        >{{ content.text.toLocaleUpperCase() }}
        <span :class="content.icon" class="icon"></span>
        <input :value="content.text" v-model="selectedMenu" type="radio" name="header-menu" class="header__input" :id="content.text" />
    </label>
</template>

<style lang="scss" scoped>
    .header {
        
        &__menu-item {
        display: flex;
        gap: 3px;
        align-items: center;
        justify-content: center;
        padding: 15px 5px;
        min-width: 103px;
        border-radius: 8px 8px;
        cursor: pointer;
        border: 1px solid #333333;
        color: #9f9fa1;
        box-shadow: 0 5px 30px 2px rgba(0,0,0,.64);
        background-color: #333333;
        transition: all ease-in .2s;

        &.short {
            flex-direction: column;
            gap: 3px;
            padding: 8px 10px;
            min-width: 95px;
        }


        &.active{
            box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.8);
            border-color: aliceblue;
            transform: scale(1.05);
            color: aliceblue;
            
            .icon {
                color: aliceblue;
            }
        }


        &:hover{
            box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.8);
            border-color: #FFF;
            transform: scale(1.1);
            color: aliceblue;
            .icon {
                color: aliceblue;
            }
        }

        .icon{
            color: #9f9fa1;
            font-size: 20px;
            transition: all ease-in .2s;
            display: flex;
            justify-content: center;
            align-items: center;
            --dp-animation-duration: 0s;
        }

        @media (max-width: 500px) {
            flex-direction: column;
            min-width: 70px;
            font-size: 13px;
            padding: 5px;
        }
    }
}
</style>