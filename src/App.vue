<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import {
  SidebarLink,
  HeadingTypography,
  Button,
  SegmentedControl,
  BodyTypography,
  SegmentedControlSegment,
} from "@/components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChartBar,
  faBell,
  faSun,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { useColorTheme } from "@/composables";

const location = useRoute();
const { listenToPrefrenceChanges, theme, setColorTheme } = useColorTheme();

onBeforeMount(() => {
  listenToPrefrenceChanges();
});
</script>

<template>
  <div class="container">
    <nav class="sidebar">
      <div class="logo">
        <HeadingTypography variant="h1">Logo</HeadingTypography>
      </div>
      <ul class="links" aria-label="page links">
        <li>
          <RouterLink to="/launches" v-slot="{ isActive }">
            <SidebarLink :active="isActive">
              <template #icon>
                <FontAwesomeIcon :icon="faChartBar" />
              </template>
              <template #label> Launches </template>
            </SidebarLink>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="content">
      <header class="topbar">
        <HeadingTypography variant="h1">{{ location.name }}</HeadingTypography>
        <span class="toolbar">
          <SegmentedControl>
            <SegmentedControlSegment
              key="light"
              :active="theme === 'light'"
              @select="() => setColorTheme('light')"
            >
              <FontAwesomeIcon :icon="faSun" />
            </SegmentedControlSegment>

            <SegmentedControlSegment
              key="dark"
              :active="theme === 'dark'"
              @select="() => setColorTheme('dark')"
            >
              <FontAwesomeIcon :icon="faMoon" />
            </SegmentedControlSegment>
          </SegmentedControl>

          <Button @click="() => console.log('clicked it')">
            <FontAwesomeIcon :icon="faBell" />
          </Button>
        </span>
      </header>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 0;
}

.sidebar {
  width: fit-content;
  height: 100%;
  background-color: var(--sxd-neutral-fill-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: var(--sxd-space-med);
  padding-right: var(--sxd-space-med);
  padding-top: var(--sxd-space-med);
  padding-bottom: var(--sxd-space-xs);
  row-gap: var(--sxd-space-lg);
}

.links {
  display: flex;
  flex-direction: column;
  row-gap: var(--sxd-space-sm);
}

.content {
  width: 100%;
  min-width: 0;
  background-color: var(--sxd-neutral-background);
  padding-left: var(--sxd-space-lg);
  padding-right: var(--sxd-space-lg);
  padding-top: var(--sxd-space-med);
  padding-bottom: var(--sxd-space-med);
  display: flex;
  flex-direction: column;
  row-gap: var(--sxd-space-med);
}

.topbar {
  display: flex;
  width: 100%;
  min-width: 0;
  justify-content: space-between;
  align-items: center;
}

.toolbar {
  display: flex;
  column-gap: var(--sxd-space-sm);
}
</style>
