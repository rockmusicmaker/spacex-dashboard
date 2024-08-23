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
}

p.med {
}

p.lg {
}
</style>
