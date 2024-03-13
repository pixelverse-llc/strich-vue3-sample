import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ScanSingle from "@/views/ScanSingle.vue";
import ScanRepeated from "@/views/ScanRepeated.vue";
import ScanMultiple from "@/views/ScanMultiple.vue";
import { StrichSDK } from "@pixelverse/strichjs-sdk";

/**
 * An example navigation guard that blocks navigation to a route that requires barcode scanning.
 * This approach performs SDK initialization lazily, i.e. only when actually needed.
 *
 * It would also be possible to perform the SDK initialization in the Scanner component, this is just one possible way.
 */
async function ensureStrichSDKInitialized() {
    if (!StrichSDK.isInitialized()) {
        const licenseKey = '<your license key>';
        try {
            await StrichSDK.initialize(licenseKey);
            return true;
        } catch (e) {
            return '/'; // navigate home, you probably want to handle this differently
        }
    }
    return true;
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/scan-single',
            component: ScanSingle,
            beforeEnter: [ensureStrichSDKInitialized]
        },
        {
            path: '/scan-repeated',
            component: ScanRepeated,
            beforeEnter: [ensureStrichSDKInitialized]
        },
        {
            path: '/scan-multiple',
            component: ScanMultiple,
            beforeEnter: [ensureStrichSDKInitialized]
        }
    ]
});


export default router
