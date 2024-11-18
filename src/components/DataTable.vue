<script>
const ValidateData = (data) => data && Array.isArray(data);
</script>
<script setup>
import { computed, defineProps } from "vue";
import { BodyTypography } from "@/components";

const { data, summary } = defineProps({
  data: {
    type: Array,
    required: true,
    validator: ValidateData,
  },
  summary: {
    type: String,
    required: false,
  },
});

const columns = computed(() => {
  return Array.from(
    new Set(data.reduce((acc, curr) => [...acc, ...Object.keys(curr)], [])),
  );
}, [data]);
</script>
<template>
  <table>
    <thead>
      <caption v-if="summary">
        <BodyTypography size="">
          {{ summary }}
        </BodyTypography>
      </caption>
      <tr>
        <th v-for="column of columns">
          <BodyTypography>{{ column }}</BodyTypography>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row of data">
        <td v-for="column of columns">
          <BodyTypography>{{ row[column] ?? "-" }} </BodyTypography>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  position: relative;

  thead {
    position: sticky;
    top: 1px;
    text-align: left;

    caption {
      white-space: nowrap;
    }
  }
}
</style>
