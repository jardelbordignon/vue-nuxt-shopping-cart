<script setup lang="ts">
useHead({
  title: "Home Page",
  meta: [{ name: "description", content: "The home page" }],
});
</script>

<template>
  <div>
    <h1>Home Page</h1>

    <NuxtLink to="/counter">Counter Page</NuxtLink>
  </div>
</template>
