<script setup lang="ts">
import { ref } from 'vue';


const date = ref<Date>(new Date())
date.value.toLocaleString()
</script>

<template>
    <div class="info__date">
        {{ date }}
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.info__date {
    font-size: 26px;
    font-weight: 400;
    font-style: italic;

    @media (max-width: 520px) {
        font-size: 18px;
    }
}
</style>