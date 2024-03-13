<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { BarcodeReader, type CodeDetection, type Configuration } from "@pixelverse/strichjs-sdk";

// define a 'detected' event that the Scanner component emits when barcodes are detected
const emit = defineEmits<{
  (e: 'detected', detections: CodeDetection[]): void
}>();

// bind to the host element that will contain the BarcodeScanner
const hostElement = ref();

// this component manages the BarcodeReader
let barcodeReader: BarcodeReader | undefined = undefined;

// expose start/stop to control pause/resume scanning
const start = async () => await barcodeReader?.start();
const stop = async () => await barcodeReader?.stop();
defineExpose({ start, stop })

// couple the component's lifecycle with the BarcodeReader lifecycle
onMounted(async () => {

  // BarcodeReader configuration: might also be provided through a Component prop to make the Component more flexible
  const configuration: Configuration = {
    selector: hostElement.value,
    engine: {
      symbologies: ['code128', 'qr']
    },
    locator: {
      regionOfInterest: {
        left: 0.05, right: 0.05, top: 0.3, bottom: 0.3
      }
    }
  }

  // initialize the BarcodeReader: it is important for the Component to be mounted, as the host element must exist
  // and be added to the DOM before a BarcodeReader can be initialized
  barcodeReader = new BarcodeReader(configuration);
  await barcodeReader.initialize();
  barcodeReader.detected = (codeDetections) => {
    emit('detected', codeDetections);
  };
  await barcodeReader.start();
});

// destroying the BarcodeReader is very important, otherwise the camera is not released
onBeforeUnmount(() => {
  barcodeReader?.destroy();
  barcodeReader = undefined;
});
</script>

<template>
  <div class="barcode-scanner" ref="hostElement">
    <!-- STRICH BarcodeReader instantiated here -->
  </div>
</template>

<style scoped>
.barcode-scanner {
  position: relative;
  background-color: black;
  height: 100%;
}
</style>
