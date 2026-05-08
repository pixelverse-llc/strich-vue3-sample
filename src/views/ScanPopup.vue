<script setup lang="ts">
import { ref } from "vue";
import { PopupScanner } from "@pixelverse/strichjs-sdk";

const result = ref('no code scanned yet');

async function scan() {
  const detections = await PopupScanner.scan({
    symbologies: ['qr', 'code128']
  });
  if (detections) {
    result.value = detections[0].data;
  } else {
    result.value = 'User cancelled';
  }
}
</script>

<template>
  <main class="wrapper">
    <header class="top-bar">
      <h1>Popup Scanner</h1>
      <RouterLink to="/">EXIT</RouterLink>
    </header>

    <p>
      {{ result }}
    </p>

    <button @click="scan">Scan with PopupScanner</button>
  </main>
</template>

<style scoped>
.wrapper {
  padding: 16px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

button {
  margin-top: 16px;
}
</style>
