import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/index'
},
{
  path: '/home',
  component: () => import('../views/Home.vue'),
  children: [
    {
      //首页
      path: '/index',
      component: () => import('../views/index.vue'),
    },
    {
      //第二个页面
      path: '/show',
      component: () => import('../views/show.vue'),
    },
    //体验
    {
      path: '/experience',
      component: () =>
        import('../components/experience/family.vue')
    },
    //商品路由
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
          import('../components/goods/Theme.vue')
      }
      ]
    },
    {
      //我的页面
      path: '/my',
      component: () => import('../views/my.vue'),
    },
  ]
},
//下面是登录页的东西
{
  path: '/logandreg',
  component: () => import('../views/LogAndReg/default.vue'),
},
{
  name: 'agreement',
  path: '/logandreg/agreement',
  component: () => import('../views/LogAndReg/agreement.vue'),
},
{
  name: 'privacy',
  path: '/logandreg/privacy',
  component: () => import('../views/LogAndReg/privacy.vue'),
},
{
  name: 'log',
  path: '/logandreg/log',
  component: () => import('../views/LogAndReg/log.vue'),
},
//详情页
{
  path: '/detail',
  component: () => import('../views/Detail.vue')
},
{
  path: '*',
  component: () =>
    import('../views/Nofound404.vue'),
},
]

const router = new VueRouter({
  routes
})

//全局守卫（暂时不用），判断进入此页面是否需要登录状态。如果需要登录，请在对应的路由中写上meta:{requireAuth:true},表示进入这个路由需要验证
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!token) {
      next({
        path: '/logandreg', query: { redirect: to.fullPath }
      })
    } else {
      if (Object.keys(from.query).length === 0) {//判断路由来源是否有query，处理不是目的跳转的情况
        next()
      } else {
        let redirect = from.query.redirect//如果来源路由有query
        if (to.path === redirect) {//这行是解决next无限循环的问题
          next()
        } else {
          next({ path: redirect })//跳转到目的路由
        }
      }
    }
  } else {
    next()
  }
})
export default router
