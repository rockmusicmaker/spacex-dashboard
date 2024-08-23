<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { HeadingTypography, SidebarLink } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
  <div class="container">
    <nav class="sidebar">
      <div class="logo">Logo</div>
      <ul class="links" aria-label="page links">
        <li>
          <SidebarLink
            label="Launches"
            @click="
              () => {
                console.log('clicked launches');
              }
            "
          >
            <template v-slot:icon
              ><FontAwesomeIcon :icon="faChartBar"
            /></template>
          </SidebarLink>
        </li>
      </ul>
    </nav>
    <div class="content">
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
  background-color: var(--sxd-netural-fill);
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
}

.content {
  width: 100%;
  min-width: 0;
}
</style>
