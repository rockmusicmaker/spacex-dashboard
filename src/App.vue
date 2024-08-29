<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { SidebarLink, HeadingTypography, IconButton } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChartBar, faBell } from "@fortawesome/free-regular-svg-icons";

const location = useRoute();
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
      <span class="topbar">
        <HeadingTypography variant="h1">{{ location.name }}</HeadingTypography>
        <span>
          <IconButton @click="() => console.log('clicked it')">
            <FontAwesomeIcon :icon="faBell" />
          </IconButton>
        </span>
      </span>
      <RouterView />
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
}

.sidebar > * {
  margin-top: var(--sxd-space-lg);
}
.sidebar > *:first-child {
  margin-top: 0;
}

.logo {
}

.links {
  display: flex;
  flex-direction: column;
}

.links > * {
  margin-top: var(--sxd-space-sm);
}
.links > *:first-child {
  margin-top: 0;
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
}

.content > * {
  margin-top: var(--sxd-space-med);
}

.content > *:first-child {
  margin-top: 0;
}

.topbar {
  display: flex;
  width: 100%;
  min-width: 0;
  justify-content: space-between;
  align-items: center;
}
</style>
