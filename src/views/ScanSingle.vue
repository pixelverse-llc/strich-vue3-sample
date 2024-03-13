<script setup lang="ts">
import router from "@/router";
import type { CodeDetection } from "@pixelverse/strichjs-sdk";
import Scanner from "@/components/Scanner.vue";

function onDetected(detections: CodeDetection[]) {
  window.alert(`Scanned code: ${detections[0].data}`);
  router.push({ path: '/', replace: true });
}
</script>

<template>
  <main class="wrapper">
    <header class="top-bar">
      <h3>Single Barcode Scan</h3>
      <RouterLink to="/">EXIT</RouterLink>
    </header>

    <Scanner @detected="onDetected"/>
  </main>
</template>

<style>

Scanner {
  height: 240px;
}
</style>
