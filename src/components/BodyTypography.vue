<script>
const ValidateSize = (size) => ["sm", "med", "lg"].includes(size);

export default {
  props: {
    size: {
      type: String,
      required: false,
      validator: ValidateSize,
      default: "med",
    },
  },
  computed: {
    parsedSize() {
      return ValidateSize(this.size) ? this.size : "med";
    },
  },
};
</script>
<template>
  <p :class="this.parsedSize"><slot /></p>
</template>

<style scoped>
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
