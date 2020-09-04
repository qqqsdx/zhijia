import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
},
// 主题页面的商品列表--------------------------------------------------------------------------
{

    path: '/theme/themegoods',
    component: () =>
        import('../components/goods/ThemeGoods.vue')

},
{

    path: '/theme/themedetails',
    component: () =>
        import('../components/goods/ThemeDetails.vue')

},
//--------------------------index服务页面子页面--------------------------------
{
    path: '/index/serve/:id',
    component: () =>
        import('../components/index/serve/serves.vue'),
},
//--------------------------index下的搜索框页面--------------------------------
{
    path: '/index/seek',
    component: () =>
        import('../components/index/seekbox/seek.vue'),
},
// ----------------------------最大的home页面----------------------------------
{
    path: '/home',
    component: () =>
        import('../views/Home.vue'),
    children: [{
        //首页
        path: '/index',
        component: () =>
            import('../views/index.vue'),
    },
    {
        path: '/home',
        component: () =>
            import('../views/Home.vue'),
        children: [{
        // ------------------------------首页--------------------------------------
            path: '/index',
            component: () =>
                import('../views/index.vue'),
        },
        // ------------------------------show页面----------------------------------
        {
            //
            path: '/show',
            component: () =>
                import('../views/show.vue'),
        },
        //--------------------------------体验------------------------------------
        {
            path: '/experience',
            component: () =>
                import('../views/Experience.vue')
        },
        //------------------------------商品路由----------------------------------------
        {
            path: '/commodity',
            redirect: '/commodity/content'
        },
        {
            path: '/commodity',
            component: () =>
                import('../views/Commodity.vue'),
            children: [{
                path: 'content',
                component: () =>
                    import('../components/goods/Content.vue')
            },
            {
                path: 'theme',
                component: () =>
                    import('../components/goods/Theme.vue'),
                // children: [{
                //     path: '/themegoods',
                //     component: () =>
                //         import ('../components/goods/ThemeGoods.vue')
                // }]
            }
            ]
        },

        //商品列表
        {
            path: '/goodslist',
            component: () =>
                import('../components/goods/GoodsList.vue'),
            children: [{
                path: '/goodslist',
                redirect: '/goodslist/goods1'
            },
            {
                path: '/goodslist/goods0',
                component: () =>
                    import('../components/goods/Goods0.vue')
            },
            {
                path: '/goodslist/goods1',
                component: () =>
                    import('../components/goods/Goods1.vue')
            },
            {
                path: '/goodslist/goods2',
                component: () =>
                    import('../components/goods/Goods2.vue')
            }, {
                path: '/goodslist/goods3',
                component: () =>
                    import('../components/goods/Goods3.vue')
            }
            ]
        },
        {
            // ---------------------------------我的页面--------------------------------
            //
            path: '/my',
            component: () =>
                import('../views/my.vue'),
        },
        ]
    },
    //---------------------------------下面是登录页的东西-----------------------
    {
        path: '/logandreg',
        component: () =>
            import('../views/LogAndReg/default.vue'),
    },
    {
        name: 'agreement',
        path: '/logandreg/agreement',
        component: () =>
            import('../views/LogAndReg/agreement.vue'),
    },
    {
        name: 'privacy',
        path: '/logandreg/privacy',
        component: () =>
            import('../views/LogAndReg/privacy.vue'),
    },
    {
        name: 'log',
        path: '/logandreg/log',
        component: () =>
            import('../views/LogAndReg/log.vue'),
    },
    // {
    //   path: '/detail/:id',
    //   component: () => import('../views/Detail.vue')
    // },
    {
        path: '/more',
        component: () =>
            import('../views/More.vue')
    },
    {
        path: '*',
        component: () =>
            import('../views/Nofound404.vue'),
    }
    ]
}
] //最大的一层

const router = new VueRouter({
    routes
})

//全局守卫（暂时不用），判断进入此页面是否需要登录状态。如果需要登录，请在对应的路由中写上meta:{requireAuth:true},表示进入这个路由需要验证
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token")
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     if (!token) {
//       next({
//         path: '/logandreg', query: { redirect: to.fullPath }
//       })
//     } else {
//       if (Object.keys(from.query).length === 0) {//判断路由来源是否有query，处理不是目的跳转的情况
//         next()
//       } else {
//         let redirect = from.query.redirect//如果来源路由有query
//         if (to.path === redirect) {//这行是解决next无限循环的问题
//           next()
//         } else {
//             if (Object.keys(from.query).length === 0) { //判断路由来源是否有query，处理不是目的跳转的情况
//                 next()
//             } else {
//                 let redirect = from.query.redirect //如果来源路由有query
//                 if (to.path === redirect) { //这行是解决next无限循环的问题
//                     next()
//                 } else {
//                     next({ path: redirect }) //跳转到目的路由
//                 }
//             }
//         }
//     }  
//   }
// }
// })
export default router