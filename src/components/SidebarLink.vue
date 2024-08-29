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
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    @click="() => emit('click')"
    :class="['sidebar-link', active ? 'active' : 'inactive']"
  >
    <slot name="icon" />
    <BodyTypography size="lg">
      {{ label }}
    </BodyTypography>
  </button>
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
  cursor: pointer;
}

.sidebar-link.active {
  background-color: var(--sxd-purple-600);
  color: var(--sxd-neutral-fill);
}

.sidebar-link.inactive {
  background-color: transparent;
  color: var(--sxd-text-strong);
}

.sidebar-link > * {
  margin-left: var(--sxd-space-xs);
}

.sidebar-link > *:first-child {
  margin-left: 0;
}
</style>
