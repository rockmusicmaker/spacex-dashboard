<script setup>
import { defineProps } from "vue";
import { BodyTypography } from "@/components";

defineProps({
  label: { type: String, required: true },
  active: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="['sidebar-link', active ? 'active' : 'inactive']">
    <slot name="icon" />
    <BodyTypography size="lg">
      {{ label }}
    </BodyTypography>
  </div>
</template>

<style scoped>
.sidebar-link {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  border-radius: var(--sxd-rounded);
  padding-left: var(--sxd-space-sm);
  padding-right: var(--sxd-space-sm);
  padding-top: var(--sxd-space-xs);
  padding-bottom: var(--sxd-space-xs);
  column-gap: var(--sxd-space-xs);
}

.sidebar-link.active {
  background-color: var(--sxd-purple-600);
  color: var(--sxd-neutral-fill);
  filter: var(--sxd-raised);
}

.sidebar-link.inactive {
  background-color: transparent;
  color: var(--sxd-text-strong);
  cursor: pointer;
}
</style>
