<script setup>
import {
  HeadingTypography,
  SegmentedControl,
  SegmentedControlSegment,
  CardContainer,
} from "@/components";
import { ref, defineProps } from "vue";

const { groupBys } = defineProps({
  groupBys: {
    type: Array,
    required: false,
    default: ["Month", "Day"],
  },
});

const groupBy = ref(groupBys[0]);

const setGroupBy = function (gb) {
  groupBy.value = gb;
};
</script>

<template>
  <div class="container">
    <header>
      <HeadingTypography variant="h2">Past launches</HeadingTypography>
      <SegmentedControl>
        <SegmentedControlSegment
          v-for="gb in groupBys"
          :key="gb"
          :active="gb === groupBy"
          @select="
            () => {
              setGroupBy(gb);
            }
          "
        >
          {{ gb }}
        </SegmentedControlSegment>
      </SegmentedControl>
    </header>
    <CardContainer width="full">bar chart</CardContainer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  & > * {
    margin-top: var(--sxd-space-sm);
  }
  & > *:first-child {
    margin-top: 0;
  }
}
header {
  display: flex;
  width: 100%;
  min-width: 0;
  height: fit-content;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin-left: var(--sxd-space-sm);
  }
  & > *:first-child {
    margin-left: 0;
  }
}
</style>
