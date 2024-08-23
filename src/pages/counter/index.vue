<script setup lang="ts">
import MyCounter from "@/components/my-counter";
</script>

<template>
  <div>
    <v-icon icon="mdi-information" />
    <h1>Counter Page</h1>

    <MyCounter />

    <NuxtLink to="/">Home Page</NuxtLink>
  </div>
</template>
