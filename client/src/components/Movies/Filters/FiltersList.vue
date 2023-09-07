<script setup lang="ts">
import FiltersItem from './FiltersItem.vue'

const props = defineProps<{
  filters: string[]
  modelValue: string
  useFilterStyle: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const selected = (value: string): void => {
  emit('update:modelValue', value)
}
</script>

<template>
  <ul class="listFilters" :class="useFilterStyle == 'categories' ? 'categories' : 'category'">
    <FiltersItem
      v-for="filter in filters"
      :filter="filter"
      :key="filter"
      :selected="modelValue"
      :useFilterStyle="useFilterStyle"
      @selected="selected"
    />
  </ul>
</template>

<style lang="scss">
.category {
  &.listFilters {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
  }
}
</style>
