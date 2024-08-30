<script setup>
import { ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import {
  SidebarLink,
  HeadingTypography,
  IconButton,
  SegmentedControl,
  BodyTypography,
} from "@/components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChartBar,
  faBell,
  faSun,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";

const location = useRoute();

const theme = ref("light");
</script>

<template>
  <div class="container">
    <nav class="sidebar">
      <div class="logo">Logo</div>
      <ul class="links" aria-label="page links">
        <li>
          <RouterLink to="/launches" v-slot="{ isActive }">
            <SidebarLink label="Launches" :active="isActive">
              <template v-slot:icon>
                <FontAwesomeIcon :icon="faChartBar" />
              </template>
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
            <SegmentedControl.Segment
              :active="theme === 'dark'"
              @click="
                () => {
                  theme = 'dark';
                }
              "
            >
              <FontAwesomeIcon :icon="faMoon" />
            </SegmentedControl.Segment>
            <SegmentedControl.Segment
              :active="theme === 'light'"
              @click="
                () => {
                  theme = 'light';
                }
              "
            >
              <FontAwesomeIcon :icon="faSun" />
            </SegmentedControl.Segment>
          </SegmentedControl>
          <IconButton @click="() => console.log('clicked it')">
            <FontAwesomeIcon :icon="faBell" />
          </IconButton>
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
  background-color: var(--sxd-neutral-fill);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: var(--sxd-space-med);
  padding-right: var(--sxd-space-med);
  padding-top: var(--sxd-space-med);
  padding-bottom: var(--sxd-space-xs);
  row-gap: var(--sxd-space-lg);
}

.logo {
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
