<script>
const ValidateSize = (size) => ["sm", "med", "lg"].includes(size);
const ValidateColor = (color) => ["strong", "weak", "primary"].includes(color);

export default {
  props: {
    size: {
      type: String,
      required: false,
      validator: ValidateSize,
      default: "med",
    },
    color: {
      type: String,
      required: false,
      validator: ValidateColor,
      default: "strong",
    },
  },
  computed: {
    parsedSize() {
      return ValidateSize(this.size) ? this.size : "med";
    },
    parsedColor() {
      return ValidateColor(this.color) ? this.color : "strong";
    },
  },
};
</script>
<template>
  <p :class="[this.parsedSize, this.parsedColor]"><slot /></p>
</template>

<style scoped>
p.strong {
  color: var(--sxd-text-strong);
}
p.weak {
  color: var(--sxd-text-weak);
}
p.primary {
  color: var(--sxd-text-primary);
}
p.sm {
  font-size: 14px;
  line-height: 140%;
}

p.med {
  font-size: 16px;
  line-height: 140%;
}

p.lg {
  font-size: 20px;
  line-height: 120%;
}
</style>
