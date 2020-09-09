import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index'
    },
    //--------------------------index服务页面子页面--------------------------------
    {
        path: '/index/serve/:id',
        component: () =>
            import ('../components/index/serve/serves.vue'),
    },
    //--------------------------index搜索框获焦点---------------------------------
    {
        path: '/index/seek',
        component: () =>
            import ('../components/index/seekbox/seek.vue'),
    },

    // 主题页面的商品列表--------------------------------------------------------------------------
    {

        path: '/theme/themegoods',
        component: () =>
            import ('../components/goods/ThemeGoods.vue')

    },
    {

        path: '/theme/themedetails',
        component: () =>
            import ('../components/goods/ThemeDetails.vue')

    },

    // --------------------------------------------------------------------------------------------
    {
        path: '/home',
        component: () =>
            import ('../views/Home.vue'),
        children: [{
                // ------------------------------首页--------------------------------------
                path: '/index',
                component: () =>
                    import ('../views/index.vue'),
            },
            // ------------------------------show页面----------------------------------
            {
                //
                path: '/show',
                component: () =>
                    import ('../views/show.vue'),
            },
            //--------------------------------体验------------------------------------
            {
                path: '/experience',
                component: () =>
                    import ('../views/Experience.vue')
            },
            //------------------------------商品路由----------------------------------------
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
                            import ('../components/goods/Theme.vue'),
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
                    import ('../components/goods/GoodsList.vue'),
                children: [{
                        path: '/goodslist',
                        redirect: '/goodslist/goods1'
                    },
                    {
                        path: '/goodslist/goods0',
                        component: () =>
                            import ('../components/goods/Goods0.vue')
                    },
                    {
                        path: '/goodslist/goods1',
                        component: () =>
                            import ('../components/goods/Goods1.vue')
                    },
                    {
                        path: '/goodslist/goods2',
                        component: () =>
                            import ('../components/goods/Goods2.vue')
                    }, {
                        path: '/goodslist/goods3',
                        component: () =>
                            import ('../components/goods/Goods3.vue')
                    }
                ]
            },
            // --------------------------体验模块的列表页----------------------------------
            {
                path: '/tylist/:id',
                component: () =>
                    import ('../views/Tylist.vue')
            },
            {
                // ---------------------------------我的页面--------------------------------
                //
                path: '/my',
                component: () =>
                    import ('../views/my.vue'),
            },
        ]
    },
    //------------------------"我的"页面优惠券收藏等部分-----------------------------
    {
        path: '/discount',
        component: () =>
            import ('../components/mypage/mine/discount.vue'),

    },
    //------------------------"我的"页面里面的收藏页面-----------------------------
    {
        path: '/collect',
        component: () =>
            import ('../components/mypage/mine/collect.vue'),

    },
    //------------------------"我的"页面中的消息页面 information-----------------------------
    {
        path: '/information',
        component: () =>
            import ('../components/mypage/mine/information.vue'),

    },
    //-----------------------------"我的"页面中SHOW页面-----------------------------
    {
        path: '/myshow',
        component: () =>
            import ('../components/mypage/mine/myshow.vue'),

    },
    //-----------------------------"我的"页面中我的订单页面-----------------------------
    {
        path: '/order',
        component: () =>
            import ('../components/mypage/mine/order.vue'),
        children: [{
                path: '/order/all', //我的订单全部页面
                component: () =>
                    import ('../components/mypage/discountcomponents/orderall.vue'),
            },
            {
                path: '/order/paid', //我的页面待付款页面
                component: () =>
                    import ('../components/mypage/discountcomponents/Tobepaid.vue'),
            },
            {
                path: '/order/shipped', //我的页面待发货页面
                component: () =>
                    import ('../components/mypage/discountcomponents/Tobeshipped.vue'),
            },
            {
                path: '/order/received', //我的页面待收货页面
                component: () =>
                    import ('../components/mypage/discountcomponents/Tobereceived.vue'),
            },
            {
                path: '/order/evaluated', //我的页面待评价页面
                component: () =>
                    import ('../components/mypage/discountcomponents/Tobereceived.vue'),
            },
        ]

    },
    //---------------------------------下面是登录页的东西-----------------------
    {
        path: '/logandreg',
        component: () =>
            import ('../views/LogAndReg/default.vue'),
    },
    {
        name: 'agreement',
        path: '/logandreg/agreement',
        component: () =>
            import ('../views/LogAndReg/agreement.vue'),
    },
    {
        name: 'privacy',
        path: '/logandreg/privacy',
        component: () =>
            import ('../views/LogAndReg/privacy.vue'),
    },
    {
        name: 'log',
        path: '/logandreg/log',
        component: () =>
            import ('../views/LogAndReg/log.vue'),
    },
    //--------------------------show页面的跳转页面------------------------------------
    {
        path: '/moreall',
        component: () =>
            import ('../views/MoreAll.vue')
    },
    {
        path: '/showdetails',
        component: () =>
            import ('../views/ShowDetails.vue')
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
        path: '/more',
        component: () =>
            import ('../views/MoreAll.vue')
    },
    //---------------------------404页面-------------------------
    {
        path: '*',
        component: () =>
            import ('../views/Nofound404.vue'),
    }
]
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