<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <h1>STRICH Vue 3 Sample</h1>
    <p>
      Enabled symbologies: <b>Code 128, QR</b>.
    </p>

    <h2>Single Scan</h2>
    <p>Scan a single barcode and return here.</p>
    <RouterLink to="/scan-single">Start Single</RouterLink>

    <h2>Repeated Scans</h2>
    <p>Repeatedly scan barcodes, pausing and resuming the scanner until done.</p>
    <RouterLink to="/scan-repeated">Start Repeated</RouterLink>

    <h2>Multiple Scans</h2>
    <p>Scan continuously until a number of distinct barcodes are scanned.</p>
    <RouterLink to="/scan-multiple">Start Multiple</RouterLink>

    <h2>Popup Scanner</h2>
    <p>Invoke the scanner as a popup overlay.</p>
    <RouterLink to="/scan-popup">Start Popup</RouterLink>
  </main>
</template>

<style scoped>
main {
  padding: 16px;
}

section {
  margin-top: 16px;
}
</style>
