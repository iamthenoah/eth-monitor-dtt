import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

type ExtraRouteMetaData = { name?: string; }

const lazyLoad = (path: string) : unknown => import(path)

const routes: Array<RouteRecordRaw & ExtraRouteMetaData> = [
    {
        path: '/',
        redirect: '/discover',
        component: () => lazyLoad('../views/Home.vue'),
        children: [
            {
                name: 'Miners',
                path: '/miners',
                component: () => lazyLoad('../views/home/Miners.vue'),
                children: [
                    {
                        name: 'Miners',
                        path: '/miners/:address',
                        component: () => lazyLoad('../views/home/details/MinerDetails.vue')
                    }
                ]
            },
            {
                name: 'Workers',
                path: '/workers',
                component: () => lazyLoad('../views/home/Workers.vue'),
                children: [
                    {
                        name: 'Workers',
                        path: '/workers/:address/:name',
                        component: () => lazyLoad('../views/home/details/WorkerDetails.vue')
                    }
                ]
            },
            {
                name: 'Discover',
                path: '/discover',
                component: () => lazyLoad('../views/home/Discover.vue')
            },
            {
                name: 'Account',
                path: '/account',
                component: () => lazyLoad('../views/home/Account.vue')
            },
            {
                name: 'Not Found',
                path: '/:catchAll(.*)',
                component: () => lazyLoad('../views/error/NotFound.vue')
            }
        ]
    },
    {
        path: '/authenticate',
        redirect: '/authenticate/login',
        component: () => lazyLoad('../views/Auth.vue'),
        children: [
            {
                name: 'Login',
                path: '/authenticate/login',
                component: () => lazyLoad('../views/auth/Login.vue')
            },
            {
                name: 'Register',
                path: '/authenticate/register',
                component: () => lazyLoad('../views/auth/Register.vue')
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
