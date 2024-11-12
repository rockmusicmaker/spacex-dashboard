<script setup>
import { HeadingTypography, Button } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
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
      <HeadingTypography variant="h2">Upcoming launches</HeadingTypography>
      <Button>
        <FontAwesomeIcon :icon="faArrowAltCircleRight" />
      </Button>
    </header>
    <ol>
      <li v-for="launch in upcomingLaunches" :key="launch.id">
        <UpcomingLaunchCard
          :name="launch.name"
          :date-time="launch.date"
          :rocket="launch.rocketName"
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
