<script setup>
import {
  BodyTypography,
  HeadingTypography,
  SegmentedControl,
  SegmentedControlSegment,
} from "@/components";
import { QueryLaunches } from "@/apollo";
import { PastLaunches, UpcomingLaunches } from "./components";

const { result } = QueryLaunches();
</script>

<template>
  <div class="launches">
    <section class="past">
      <PastLaunches />
    </section>
    <aside class="upcoming">
      <UpcomingLaunches
        :upcoming-launches="[
          {
            name: 'USSF-44',
            date: new Date('8:00 1 September 2024'),
            rocketName: 'Falcon Heavy',
          },
        ]"
      />
    </aside>
  </div>
</template>

<style scoped>
.launches {
  margin: var(--sxd-space-med) 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 0;
  height: 100%;

  & > * {
    margin-left: var(--sxd-space-lg);
  }
  & > *:first-child {
    margin-left: 0;
  }

  .past {
    display: flex;
    flex-grow: 1;
  }

  .upcoming {
    width: 33%;
    min-width: 0;
    display: flex;
  }
}
</style>
