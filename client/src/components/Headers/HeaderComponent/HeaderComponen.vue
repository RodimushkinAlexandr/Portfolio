<script setup lang="ts">
import icon from "@/components/UI/icon.vue"

const props = defineProps<{
    show: boolean
    text: string
    icon: string
}>()

const emit = defineEmits<{
    (e: 'update:show', value: boolean): void
}>()
</script>

<template>
    <header class="header-component">
        <div class="header-component__block class-component">
            <icon :icon="props.icon" />
            <h3>{{ text }}</h3>
        </div>
        <div class="header-component__block">
            <icon @click="$emit('update:show', !show)" :class="!show ? 'show' : ''" :icon="'mdi mdi-arrow-up-drop-circle-outline'" />
        </div>
    </header>
</template>

<style lang="scss">
.header-component {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}


.header-component__block {
    cursor: pointer;

    span.show {
        transform: rotate(90deg);
        transition: transform .5s ease-out;
    }
}

.class-component {
    display: flex;
    align-items: center;
    font-size: 18px;

    p {
        margin-top: 2px;
    }

    :not(:last-child) {
        margin-right: 5px;
    }
}
</style>