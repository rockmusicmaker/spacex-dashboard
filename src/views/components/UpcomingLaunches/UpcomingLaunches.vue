<script setup>
import { HeadingTypography, ValueBadge, BodyTypography } from "@/components";
import UpcomingLaunchCard from "./UpcomingLaunchCard.vue";
import { defineProps } from "vue";

const { upcomingLaunches } = defineProps({
  upcomingLaunches: {
    type: Array,
    Required: true,
  },
});
</script>

<template>
  <div class="container">
    <header>
      <div class="title">
        <HeadingTypography variant="h2">Upcoming launches</HeadingTypography>
        <ValueBadge>
          <BodyTypography color="primary">
            {{ upcomingLaunches.length }}
          </BodyTypography>
        </ValueBadge>
      </div>
    </header>
    <ol>
      <li v-for="launch in upcomingLaunches" :key="launch.id">
        <UpcomingLaunchCard
          :name="launch.mission_name"
          :date-time="new Date(launch.launch_date_local)"
          :rocket="launch.rocket.rocket_name"
        />
      </li>
    </ol>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  max-height: 100%;

  height: fit-content;
  & > * {
    margin-top: var(--sxd-space-sm);
  }
  & > *:first-child {
    margin-top: 0;
  }

  header {
    display: flex;
    width: 100%;
    min-width: 0;
    height: fit-content;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-right: var(--sxd-space-lg);

    & > * {
      margin-left: var(--sxd-space-sm);
    }
    & > *:first-child {
      margin-left: 0;
    }

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      & > * {
        margin-left: var(--sxd-space-sm);
      }
      & > *:first-child {
        margin-left: 0;
      }
    }
  }
  ol {
    min-height: fit-content;
    height: fit-content;
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding-bottom: var(--sxd-space-sm);
    padding-right: var(--sxd-space-med);
    margin-right: var(--sxd-space-xs);
    scrollbar-width: thin;
    & > li {
      margin-top: var(--sxd-space-sm);
    }
    & > li:first-child {
      margin-top: 0;
    }
  }
}
</style>
