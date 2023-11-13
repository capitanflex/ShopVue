import { createRouter, createWebHistory } from 'vue-router';
import {HOME_VIEW, ROUTES} from "./constants";


const routes = [HOME_VIEW, ...ROUTES];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
