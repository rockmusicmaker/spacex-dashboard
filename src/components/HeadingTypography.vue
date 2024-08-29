<script>
const ValidateVariant = (value) => ["h1", "h2", "h3", "h4"].includes(value);
</script>

<script setup>
import { defineProps } from "vue";

defineProps({
  variant: {
    type: String,
    required: true,
    validator: ValidateVariant,
  },
});
</script>

<template>
  <component :is="ValidateVariant(variant) ? variant : 'h1'">
    <slot />
  </component>
</template>

<style scoped>
h1 {
  font-size: 40px;
  line-height: 120%;
}
h2 {
  font-size: 32px;
  line-height: 125%;
}
h3 {
  font-size: 24px;
  line-height: 134%;
}
h4 {
  font-size: 20px;
  line-height: 140%;
}
</style>
