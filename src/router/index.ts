import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

type ExtraRouteMetaData = { name?: string; }

const routes: Array<RouteRecordRaw & ExtraRouteMetaData> = [
    {
        path: '/',
        redirect: '/miners',
        component: () => import('../views/Home.vue'),
        children: [
            {
                name: 'Miners',
                path: '/miners',
                component: () => import('../views/home/Miners.vue'),
                children: [
                    {
                        name: 'Miners',
                        path: '/miners/:address',
                        component: () => import('../views/home/details/MinerDetails.vue')
                    }
                ]
            },
            {
                name: 'Workers',
                path: '/workers',
                component: () => import('../views/home/Workers.vue'),
                children: [
                    {
                        name: 'Workers',
                        path: '/workers/:address/:name',
                        component: () => import('../views/home/details/WorkerDetails.vue')
                    }
                ]
            },
            {
                name: 'Discover',
                path: '/discover',
                component: () => import('../views/home/Discover.vue')
            },
            {
                name: 'Account',
                path: '/account',
                component: () => import('../views/home/Account.vue')
            },
            {
                name: 'Not Found',
                path: '/:catchAll(.*)',
                component: () => import('../views/error/NotFound.vue')
            }
        ]
    },
    {
        path: '/authenticate',
        redirect: '/authenticate/login',
        component: () => import('../views/Auth.vue'),
        children: [
            {
                name: 'Login',
                path: '/authenticate/login',
                component: () => import('../views/auth/Login.vue')
            },
            {
                name: 'Register',
                path: '/authenticate/register',
                component: () => import('../views/auth/Register.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from) => {
    const page = to.name ? ' - ' + to.name.toString() : ''
    document.title = 'ETH Monitor' + page
})

export default router
