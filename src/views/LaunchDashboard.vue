<script setup>
import { BodyTypography, HeadingTypography } from "@/components";
import { QueryLaunches } from "@/apollo";

const { result } = QueryLaunches();
</script>

<template>
  <BodyTypography>content</BodyTypography>
</template>
