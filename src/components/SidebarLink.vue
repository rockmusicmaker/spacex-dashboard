<script setup>
import { defineProps } from "vue";
import { HeadingTypography, BodyTypography } from "@/components";

defineProps({
  label: { type: String, required: true },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <button @click="() => emit('click')" class="sidebar-link">
    <slot name="icon" />
    <BodyTypography>
      {{ label }}
    </BodyTypography>
  </button>
</template>

<style scoped>
.sidebar-link {
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: var(--sxd-purple-600);
  border-radius: var(--sxd-rounded);
  padding-left: var(--sxd-space-sm);
  padding-right: var(--sxd-space-sm);
  padding-top: var(--sxd-space-xs);
  padding-bottom: var(--sxd-space-xs);
  color: var(--sxd-neutral-fill);
}

.sidebar-link > * {
  margin-left: var(--sxd-space-xs);
}

.sidebar-link > *:first-child {
  margin-left: 0;
}
</style>
