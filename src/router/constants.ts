import type {IRoute} from './interfaces'

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

export const PRODUCT_CATEGORY : IRoute = {
    id: 9,
    path: '/category/:id',
    name: 'category',
    component: () => import('@/views/Category.vue')
}

export const SUB_CATEGORY : IRoute = {
    id: 10,
    path: '/sub-category/:id',
    name: 'sub category',
    component: () => import('@/views/SubCategory.vue')
}


export const AUTH_ROUTES: IRoute[] = [
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


