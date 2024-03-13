<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import type { CodeDetection } from "@pixelverse/strichjs-sdk";
import Scanner from "@/components/Scanner.vue";

const scanner = ref();
const scanDialog = ref();
const data = ref('');

function onDetected(detections: CodeDetection[]) {
  scanner.value?.stop();
  data.value = detections[0].data;
  scanDialog.value.showModal();
}

function finishScanning() {
  router.push({ path: '/', replace: true });
}
</script>

<template>
  <main class="wrapper">
    <header class="top-bar">
      <h3>Single Barcode Scan</h3>
      <RouterLink to="/">EXIT</RouterLink>
    </header>

    <Scanner ref="scanner" @detected="onDetected"/>
  </main>

  <dialog ref="scanDialog">
    <p>Scanned code: <b>{{ data }}</b></p>

    <div class="button-bar">
      <button @click="finishScanning()">FINISH</button>
    </div>
  </dialog>
</template>

<style>

Scanner {
  height: 240px;
}
</style>
