<script setup lang="ts">
import { ref } from "vue";

import type { CodeDetection } from "@pixelverse/strichjs-sdk";

import router from "@/router";
import Scanner from "@/components/Scanner.vue";

const confirmScanDialog = ref<HTMLDialogElement>();
const scanner = ref();
const codesScanned = ref(0);
const data = ref('');

async function onDetected(codeDetections: CodeDetection[]) {
  data.value = codeDetections[0].data;
  codesScanned.value++;
  scanner.value.stop();
  confirmScanDialog.value?.showModal();
}

async function continueScanning() {
  confirmScanDialog.value?.close();
  await scanner.value?.start();
}

function finishScanning() {
  router.push({path: '/', replace: true});
}
</script>

<template>
  <main class="wrapper">
    <header class="top-bar">
      <h3>Repeated Scans</h3>
      <RouterLink to="/">EXIT</RouterLink>
    </header>
    <Scanner ref="scanner" @detected="onDetected"/>
  </main>

  <dialog ref="confirmScanDialog">
    <p>You have scanned {{ codesScanned }} barcodes.</p>
    <p>Scanned code: <b>{{ data }}</b></p>

    <div class="button-bar">
      <button @click="continueScanning()">CONTINUE</button>
      <button @click="finishScanning()">FINISH</button>
    </div>
  </dialog>
</template>

<style>
dialog {
  margin: auto;
}

.button-bar {
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
