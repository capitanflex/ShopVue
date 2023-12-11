import { createRouter, createWebHistory } from 'vue-router';
import {
    AUTH_ROUTES,
    HOME_VIEW,
    LOG_IN,
    PRODUCT_CATEGORY,
    PUBLIC_ROUTES, SUB_CATEGORY
} from "./constants";


const routes = [HOME_VIEW, LOG_IN,  PRODUCT_CATEGORY, SUB_CATEGORY, ...AUTH_ROUTES, ...PUBLIC_ROUTES,];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
