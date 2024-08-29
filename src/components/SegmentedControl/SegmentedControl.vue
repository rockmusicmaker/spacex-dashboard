<script>
export default {
  props: {},
  computed: {},
};
</script>

<template>
  <ul>
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
}
</style>
