import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/home',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/index',
          component: () => import('../views/index.vue'),
        },
        {
          path: '/show',
          component: () => import('../views/show.vue'),
        },
        {
          path: '/commodity',
          component: () => import('../views/commoditys.vue'),
        },
        {
          path: '/experience',
          component: () => import('../views/experience.vue'),
        },
        {
          path: '/my',
          component: () => import('../views/my.vue'),
        },
      ]
    },
    // {
    //   path: '/detail/:id',
    //   component: () => import('../views/Detail.vue')
    // },
    {
      path: '*',
      component: () => import('../views/Nofound404.vue'),
    }
]

const router = new VueRouter({
  routes
})

export default router
