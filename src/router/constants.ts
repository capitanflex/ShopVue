import type {IRoute} from './interfaces'
import {ref} from "vue";
import {useUserStore} from "@/stores/usersStore";

export const HOME_VIEW: IRoute = {
    id: 0,
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
}
export const LOG_IN : IRoute = {
    id: 5,
    path: '/login',
    name: 'log in',
    component: () => import('@/views/Login.vue')
}


export const AUTH_ROUTES: IRoute[] = [
    {
        id: 3,
        path: '/products',
        name: 'products',
        component: () => import('@/views/Products.vue')
    },
    {
        id: 6,
        path: '/tool-box',
        name: 'toolBox',
        component: () => import('@/views/TollBox.vue')
    },
    {
        id: 7,
        path: '/my-account',
        name: 'myAccount',
        component: () => import('@/views/MyAccount.vue')
    },
    {
        id: 4,
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactUs.vue')
    }
];
export const PUBLIC_ROUTES: IRoute[]  = [
    {
        id: 3,
        path: '/products',
        name: 'products',
        component: () => import('@/views/Products.vue')
    },
    {
        id: 4,
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactUs.vue')
    },
    {
        id: 1,
        path: '/become-a-dealer',
        name: 'becomeADealer',
        component: () => import('@/views/BecomeADealer.vue')
    },
    {
        id: 8,
        path: '/sign-in',
        name: 'sing In',
        component: () => import('@/views/SignIn.vue')
    },
];


