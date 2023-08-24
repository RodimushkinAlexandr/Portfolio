<script setup lang="ts">
import icon from '../UI/icon.vue';

export interface Props {
    text?: string,
}

const props = withDefaults(defineProps<Props>(), {
    text: 'EROR 404'
})

</script>

<template>
    <div class="error">
        <icon :icon="'mdi mdi-emoticon-sad-outline'" :size="'30px'" :color="'#9f9fa1'"/>
        <p>{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .error{
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            margin-top: 10px;
        }
    }
    
</style>