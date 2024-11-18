<script setup>
import { useUpcomingLaunches, useLaunches } from "@/apollo";
import { PastLaunches, UpcomingLaunches, AllLaunches } from "./components";

const { result: upcoming, loading: loadingUpcoming } = useUpcomingLaunches();
const { result: all, loading: loadingAll } = useLaunches();
</script>

<template>
  <div v-if="loadingUpcoming || loadingAll">loading...</div>
  <div v-else class="launches">
    <div class="left">
      <section class="past">
        <PastLaunches />
      </section>
      <section class="all">
        <AllLaunches :launches="all?.launches ?? []" />
      </section>
    </div>
    <aside class="right">
      <UpcomingLaunches :upcoming-launches="upcoming?.launchesUpcoming ?? []" />
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
  min-height: 0;

  & > * {
    margin-left: var(--sxd-space-lg);
  }
  & > *:first-child {
    margin-left: 0;
  }

  .left {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    min-width: 0;
    height: 100%;
    min-height: 0;

    .past {
      display: flex;
      min-height: fit-content;
      max-height: 50%;
    }
    .all {
      display: flex;
      max-height: 100%;
      min-height: 0;
    }

    & > * {
      margin-top: var(--sxd-space-lg);
    }
    & > *:first-child {
      margin-top: 0;
    }
  }

  .right {
    width: 33%;
    flex-shrink: 0;
    display: flex;
    height: 100%;
    min-height: 0;
  }
}
</style>
