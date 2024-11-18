<script setup>
import {
  HeadingTypography,
  DataTable,
  CardContainer,
  BodyTypography,
} from "@/components";

const { launches } = defineProps({
  launches: {
    type: Array,
    Required: true,
    validator: (launches) => launches && Array.isArray(launches),
  },
});
</script>
<template>
  <div class="container">
    <header>
      <HeadingTypography variant="h2">All launches</HeadingTypography>
      <div class="filters">
        <div>filter</div>
        <div>filter</div>
        <div>filter</div>
      </div>
    </header>
    <div class="data-table">
      <CardContainer width="full" height="full" class="data-table-card">
        <DataTable :summary="`${launches.length} launches`" :data="launches" />
      </CardContainer>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 100%;
  min-width: 0;
  max-height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: var(--sxd-space-sm);
  }
  & > *:first-child {
    margin-top: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: fit-content;
    .filters {
      display: flex;
      flex-direction: row;

      & > * {
        margin-left: var(--sxd-space-xs);
      }
      & > *:first-child {
        margin-left: 0;
      }
    }
  }
  .data-table {
    display: flex;
    min-height: 0;
    max-height: 100%;
    width: 100%;
    min-width: 0;
    padding-bottom: var(--sxd-space-sm);

    .data-table-card {
      max-height: 100%;
      min-height: 0;
      overflow: auto;
    }
  }
}
</style>
