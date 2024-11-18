<script>
export default {};
</script>
<template>
  <div><slot /></div>
</template>
<style scoped>
div {
  border-radius: var(--sxd-rounded-lg);
  background-color: var(--sxd-primary-50);
  padding: var(--sxd-space-xs) var(--sxd-space-sm);
  border: var(--sxd-primary-600) solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
