<script>
export default {
  emits: ["click"],
};
</script>
<template>
  <button @click="$emit('click')"><slot /></button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--sxd-space-sm);
  background-color: var(--sxd-neutral-fill);
  filter: var(--sxd-raised);
  border-radius: var(--sxd-space-xs);
  cursor: pointer;
}

button:hover {
  background-color: var(--sxd-stroke-week);
}
</style>
