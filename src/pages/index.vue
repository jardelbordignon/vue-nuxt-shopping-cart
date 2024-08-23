<script setup lang="ts"></script>

<template>
  <div>
    <v-icon icon="mdi-home" />
    <h1>Home Page</h1>

    <NuxtLink to="/counter">Counter Page</NuxtLink>

    <v-calendar
      style="width: 100%; max-width: 500px; margin: 0 auto"
      lang="pt-br"
    />
  </div>
</template>
