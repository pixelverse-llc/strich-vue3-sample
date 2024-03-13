import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ScanSingle from "@/views/ScanSingle.vue";
import ScanRepeated from "@/views/ScanRepeated.vue";
import ScanMultiple from "@/views/ScanMultiple.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/scan-single',
            component: ScanSingle
        },
        {
            path: '/scan-repeated',
            component: ScanRepeated
        },
        {
            path: '/scan-multiple',
            component: ScanMultiple
        }
    ]
})

export default router
