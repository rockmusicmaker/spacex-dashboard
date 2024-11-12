<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCalendar,
  faClock,
  faListAlt,
} from "@fortawesome/free-regular-svg-icons";
import { CardContainer, BodyTypography, HeadingTypography } from "@/components";
import { FormatDate, FormatTime } from "@/utils";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    rocket: {
      type: String,
      required: true,
    },
  },
  computed: {
    date() {
      return FormatDate(this.dateTime);
    },
    time() {
      return FormatTime(this.dateTime);
    },
    calenderIcon() {
      return faCalendar;
    },
    clockIcon() {
      return faClock;
    },
    rocketIcon() {
      return faListAlt;
    },
  },
  components: {
    CardContainer,
    BodyTypography,
    HeadingTypography,
    FontAwesomeIcon,
  },
};
</script>
<template>
  <CardContainer width="full" class="container">
    <HeadingTypography variant="h3">{{ name }}</HeadingTypography>
    <ul>
      <li>
        <BodyTypography color="weak" size="sm">
          <FontAwesomeIcon :icon="calenderIcon" />
          {{ date }}
        </BodyTypography>
      </li>
      <li>
        <BodyTypography color="weak" size="sm">
          <FontAwesomeIcon :icon="clockIcon" />
          {{ time }}
        </BodyTypography>
      </li>
      <li>
        <BodyTypography color="weak" size="sm">
          <FontAwesomeIcon :icon="rocketIcon" />
          {{ rocket }}
        </BodyTypography>
      </li>
    </ul>
  </CardContainer>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: var(--sxd-space-xs);
  }
  & > *:first-child {
    margin-top: 0;
  }

  ul {
    display: flex;
    & > * {
      margin-left: var(--sxd-space-xs);
      padding-left: var(--sxd-space-xs);
      border-color: var(--sxd-stroke-weak);
      border-right: 0;
      border-top: 0;
      border-bottom: 0;
      border-left-width: 1px;
      border-style: solid;
    }
    & > *:first-child {
      padding-left: 0;
      margin-left: 0;
      border: 0;
    }
  }
}
</style>
