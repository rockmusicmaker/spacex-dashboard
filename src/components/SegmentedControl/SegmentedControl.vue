<script>
export default {
  props: {},
  computed: {},
};
</script>

<template>
  <ul>
    <span class="active-indicator" />
    <slot />
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-auto-flow: column;
  column-gap: var(--sxd-space-xs);
  align-items: center;
  background-color: var(--sxd-neutral-fill);
  border-radius: var(--sxd-space-xs);
  padding: var(--sxd-space-xs);
  filter: var(--sxd-raised);
  position: relative;
}

.active-indicator {
  position: absolute;
  background-color: var(--sxd-purple-600);
  color: var(--sxd-neutral-fill);
  border-radius: var(--sxd-space-xs);
  top: var(--sxd-space-xs);
  bottom: var(--sxd-space-xs);
  left: var(--sxd-space-xs);
  width: 40%;
  z-index: 30;

  transition: transform var(--sxd-transition-duration) ease-in-out;

  transform: translateX(40px);
}
</style>
