import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/index'
    },
    {
        path: '/home',
        alias: '/',
        component: () =>
            import ('../views/Home.vue'),
        children: [{
                path: '/index',
                component: () =>
                    import ('../views/index.vue'),
            },
            //商品路由
            {
                path: '/commodity',
                redirect: '/commodity/content'
            },
            {

                path: '/commodity',
                component: () =>
                    import ('../views/Commodity.vue'),
                children: [{
                        path: 'content',
                        component: () =>
                            import ('../components/goods/Content.vue')
                    },
                    {
                        path: 'theme',
                        component: () =>
                            import ('../components/goods/Theme.vue')
                    }
                ]
            },
        ]
    },

    // {
    //   path: '/detail/:id',
    //   component: () => import('../views/Detail.vue')
    // },
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