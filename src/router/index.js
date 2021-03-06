import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login') },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/welcome')
      },
      {
        path: '/music',
        name: 'music',
        component: () => import('@/views/music'),
        redirect: '/iLike',
        children: [
          {
            path: '/iLike',
            name: 'iLike',
            component: () => import('@/views/music/third/iLike')
          },
          {
            path: '/iBought',
            name: 'iBought',
            component: () => import('@/views/music/third/iBought')
          },
          {
            path: '/myList',
            name: 'myList',
            component: () => import('@/views/music/third/myList')
          },
          {
            path: '/follow',
            name: 'follow',
            component: () => import('@/views/music/third/follow')
          },
          {
            path: '/follower',
            name: 'follower',
            component: () => import('@/views/music/third/follower')
          },
          {
            path: '/myVideo',
            name: 'myVideo',
            component: () => import('@/views/music/third/myVideo')
          },
          {
            path: '/myRadio',
            name: 'myRadio',
            component: () => import('@/views/music/third/myRadio')
          }
        ]
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      },
      {
        path: '/todo',
        name: 'todo',
        component: () => import('@/views/todo')
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  const token = sessionStorage.getItem('tokenKey')
  if (to.path === '/login') {
    next()
  } else {
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
