<script>
const ValidateWidth = (w) => ["fit", "full"].includes(w);
const ValidateHeight = (h) => ["fit", "full"].includes(h);

export default {
  props: {
    class: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
      default: "fit",
      validator: ValidateWidth,
    },
    height: {
      type: String,
      required: false,
      default: "fit",
      validator: ValidateHeight,
    },
  },
  computed: {
    parsedWidth() {
      return ValidateWidth(this.width) ? this.width : "fit";
    },
    parsedHeight() {
      return ValidateHeight(this.height) ? this.height : "fit";
    },
  },
};
</script>
<template>
  <div
    :class="[
      `width-${this.parsedWidth}`,
      `height-${this.parsedHeight}`,
      this.class,
    ]"
  >
    <slot />
  </div>
</template>
<style scoped>
div {
  background-color: var(--sxd-neutral-fill-base);
  padding: var(--sxd-space-med);
  border-radius: var(--sxd-rounded-lg);

  &.width-fit {
    width: fit-content;
  }
  &.width-full {
    width: 100%;
  }
  &.height-fit {
    height: fit-content;
  }
  &.height-full {
    height: 100%;
  }
}
</style>
