<script setup lang="ts">
useHead({
  title: "Counter Page",
  meta: [{ name: "description", content: "The counter page" }],
});

import MyCounter from "@/components/my-counter/my-counter.vue";
</script>

<template>
  <div>
    <!-- <v-icon icon="mdi-information" /> -->
    <h1>Counter Page</h1>

    <MyCounter />

    <NuxtLink to="/">Home Page</NuxtLink>
  </div>
</template>
