<script>
import { BodyTypography } from "@/components";

export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["click"],
};
</script>

<template>
  <li :class="this.active ? 'active' : 'inactive'">
    <button @click="$emit('click')">
      <slot />
    </button>
  </li>
</template>

<style scoped>
li {
  border-radius: var(--sxd-space-xs);
  padding-left: var(--sxd-space-xs);
  padding-right: var(--sxd-space-xs);
  padding-top: var(--sxd-space-xs);
  padding-bottom: var(--sxd-space-xs);
}

li.active {
  background-color: var(--sxd-purple-600);
  color: var(--sxd-neutral-fill);
}
li.inactive {
  background-color: var(--sxd-neutral-fill);
  color: var(--sxd-text-weak);
  cursor: pointer;
}
</style>
