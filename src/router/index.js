import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/Layout.vue'),
        meta: {
            title: 'main page'
        }
    }
]


const router = new createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export default router