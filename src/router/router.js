import Main from '@/views/Main.vue'

//不作为Main组件的子页面展示的页面单独写
//登录
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录-lanxi',
  },
  component: () => import('@/views/login.vue'),
}
//注册
export const registRouter = {
  path: '/regist',
  name: 'regist',
  meta: {
    title: '注册-lanxi',
  },
  component: () => import('@/views/regist.vue'),
}
//注册结果
export const registResult = {
  path: '/regist-result',
  name: 'regist-result',
  meta: {
    title: '注册结果-lanxi',
  },
  component: () => import('@/views/regist-result.vue'),
}
//统一认证平台
export const authorizeRouter = {
  path: '/authorize',
  name: 'authorize',
  meta: {
    title: '注册-lanxi',
  },
  component: () => import('@/views/authorize.vue'),
}
export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足',
  },
  name: 'error-403',
  component: () => import('@/views/error-page/403.vue'),
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误',
  },
  name: 'error-500',
  component: () => import('@/views/error-page/500.vue'),
}
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: 'home',
      title: { i18n: 'home' },
      name: 'home_index',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: 'ownspace',
      title: '个人中心',
      name: 'ownspace_index',
      component: () => import('@/views/own-space/own-space.vue'),
    },
    {
      path: 'change-pass',
      title: '修改密码',
      name: 'change_pass',
      component: () => import('@/views/change-pass/change-pass.vue'),
    },
    {
      path: 'message',
      title: '消息中心',
      name: 'message_index',
      component: () => import('@/views/message/message.vue'),
    },
    {
      path: 'add',
      title: '添加',
      name: 'add',
      component: () => import('@/views/xboot-vue-template/new-window/add.vue'),
    },
    {
      path: 'edit',
      title: '编辑',
      name: 'edit',
      component: () => import('@/views/xboot-vue-template/new-window/edit.vue'),
    },
    {
      path: 'message-send-detail',
      title: '消息发送详情',
      name: 'message_send_detail',
      component: () =>
        import('@/views/sys/message-manage/messageSendDetail.vue'),
    },
  ],
}

export const appRouter = []

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  registRouter,
  registResult,
  authorizeRouter,
  otherRouter,
  ...appRouter,
  page500,
  page403,
]
