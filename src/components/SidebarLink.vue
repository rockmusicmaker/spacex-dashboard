<script setup>
import { defineProps } from "vue";
import { useColorTheme } from "@/composables";

defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

const { theme } = useColorTheme();
</script>

<template>
  <div :class="['sidebar-link', active ? 'active' : 'inactive']">
    <slot name="icon" />
    <BodyTypography size="lg"><slot name="label" /></BodyTypography>
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
  z-index: 30;
  color: var(--sxd-text-strong);
}

.sidebar-link.active {
  background-color: var(--sxd-primary-600);
  color: var(--sxd-text-on-primary);
  filter: var(--sxd-raised);
}

.sidebar-link.inactive {
  background-color: transparent;
  color: var(--sxd-text-strong);
  cursor: pointer;
}
</style>
