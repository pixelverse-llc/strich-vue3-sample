<script setup lang="ts">

import Scanner from "@/components/Scanner.vue";
import { ref } from "vue";
import type { CodeDetection } from "@pixelverse/strichjs-sdk";

const scanner = ref();
const numScannedCodes = ref(0);
const scannedCodes = ref(['-', '-', '-', '-']);

async function onDetected(codeDetections: CodeDetection[]) {
  if (numScannedCodes.value < 4 && scannedCodes.value.indexOf(codeDetections[0].data) === -1) {
    scannedCodes.value[numScannedCodes.value] = codeDetections[0].data;
    numScannedCodes.value++;
  }
}
</script>

<template>
  <main class="wrapper">
    <header class="top-bar">
      <h3>Multiple Scans</h3>
      <RouterLink to="/">EXIT</RouterLink>
    </header>
    <Scanner ref="scanner" @detected="onDetected"/>
    <section class="barcode-grid">
      <div>{{ scannedCodes[0] }}</div>
      <div>{{ scannedCodes[1] }}</div>
      <div>{{ scannedCodes[2] }}</div>
      <div>{{ scannedCodes[3] }}</div>
    </section>
  </main>
</template>

<style>
.barcode-grid {
  display: grid;
  padding: 8px;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
</style>
