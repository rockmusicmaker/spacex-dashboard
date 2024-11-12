<script>
import { BodyTypography } from "@/components";

export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["select"],
  components: { BodyTypography },
};
</script>

<template>
  <li class="segment">
    <button
      @click="$emit('select')"
      :class="this.active ? 'active' : 'inactive'"
    >
      <slot>
        <BodyTypography :color="this.active ? 'weak' : 'primary'">
          {{ label }}
        </BodyTypography>
      </slot>
    </button>
  </li>
</template>

<style scoped>
li {
  z-index: 50;
}
button {
  width: 100%;
  height: 100%;
  padding-left: var(--sxd-space-xs);
  padding-right: var(--sxd-space-xs);
  padding-top: var(--sxd-space-xs);
  padding-bottom: var(--sxd-space-xs);
  border-radius: var(--sxd-rounded-sm);
  display: flex;
  justify-content: center;
  align-items: center;
}
button.active {
  color: var(--sxd-text-on-primary);
  background-color: var(--sxd-primary-600);
}
button.inactive {
  color: var(--sxd-text-weak);
  cursor: pointer;
  background-color: var(--sxd-neutral-fill-raised);
}
</style>
