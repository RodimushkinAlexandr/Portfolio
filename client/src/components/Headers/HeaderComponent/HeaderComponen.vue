<script setup lang="ts">
import icon from "@/components/UI/icon.vue"
import router from "@/router";

const props = defineProps<{
    show: boolean
    text: string
    icon: string
    router: string
    color?: string
}>()

const emit = defineEmits<{
    (e: 'update:show', value: boolean): void
}>()
const routerlink = () => {
    router.push(props.router)
}

</script>

<template>
    <header class="header-component" >
        <section class="header-component__section class-component" @click="routerlink">
            <icon :icon="props.icon" :color="color" :hover="color" :size="'23px'" />
            <h3>{{ text }}</h3>
        </section>
        <section class="header-component__section header-component__show">
            <icon 
                @click="$emit('update:show', !show)"
                :size="'25px'"  
                :class="!show ? 'show' : ''" 
                :icon="'mdi mdi-arrow-up-drop-circle-outline'"
                class="icon"
                :color="color"
                :hover="color"
                />
        </section>
    </header>
</template>

<style lang="scss">
.header-component {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}


.header-component__show {
    cursor: pointer;
    transform: rotate(180deg);

    .icon {
        transition: transform .5s ease-out;

        &.show {
            transform: rotate(90deg);
        }
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