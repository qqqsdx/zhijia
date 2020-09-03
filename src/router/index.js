import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/home',
        component: () =>
            import ('../views/Home.vue'),
        children: [{
                path: '/index',
                component: () =>
                    import ('../views/index.vue'),
            },
            {
                path: '/show',
                component: () =>
                    import ('../views/Show.vue'),


            }
        ]
    },
    // {
    //   path: '/detail/:id',
    //   component: () => import('../views/Detail.vue')
    // },
    {
        path: '/moreall',
        component: () =>
            import ('../views/MoreAll.vue')
    },
    {
        path: '/showdetails',
        component: () =>
            import ('../views/Showdetails.vue')
    },
    {
        path: '/shopdetails',
        component: () =>
            import ('../views/Shopdetails.vue')
    },
    {
        path: '/car',
        component: () =>
            import ('../views/Car.vue')
    },
    {
        path: '*',
        component: () =>
            import ('../views/Nofound404.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router