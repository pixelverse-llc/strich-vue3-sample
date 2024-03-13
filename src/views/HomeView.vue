<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <header><h2>STRICH Vue 3 Sample</h2></header>
    <p>
      Enabled symbologies: <b>Code 128, QR</b>.
    </p>
    <section>
      <header><h3>Single Scan</h3></header>
      <p>Scan a single barcode and return here.</p>
      <RouterLink to="/scan-single">Start Single</RouterLink>
    </section>
    <section>
      <header><h3>Repeated Scans</h3></header>
      <p>Repeatedly scan barcodes, pausing and resuming the scanner until done.</p>
      <RouterLink to="/scan-repeated">Start Repeated</RouterLink>
    </section>
    <section>
      <header><h3>Multiple Scans</h3></header>
      <p>Scan continuously until a number of distinct barcodes are scanned.</p>
      <RouterLink to="/scan-multiple">Start Multiple</RouterLink>
    </section>
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
