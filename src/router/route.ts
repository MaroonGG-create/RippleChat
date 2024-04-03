import { RouteConfig } from 'vue-router';

// 公共路由
export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: { title: 'login' }
  },
]