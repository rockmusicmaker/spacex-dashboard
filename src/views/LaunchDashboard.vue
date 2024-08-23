<script setup>
import { HeadingTypography } from "@/components";
import { QueryLaunches } from "@/apollo";

const { result } = QueryLaunches();
</script>

<template>
  <HeadingTypography variant="h1">Launches</HeadingTypography>
</template>
