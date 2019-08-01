import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/dashboard/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  //  {
  //    path: '/example',
  //    component: Layout,
  //    redirect: '/example/table',
  //    name: 'Example',
  //    meta: { title: 'Example', icon: 'example' },
  //    children: [
  //      {
  //        path: 'table',
  //        name: 'Table',
  //        component: () => import('@/views/table/index'),
  //        meta: { title: 'Table', icon: 'table' }
  //      },
  //      {
  //        path: 'tree',
  //        name: 'Tree',
  //        component: () => import('@/views/tree/index'),
  //        meta: { title: 'Tree', icon: 'tree' }
  //      }
  //    ]
  //  },

  {
    path: '/idcard',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '身份证模拟器',
        component: () => import('@/views/idcard/index'),
        meta: { title: '身份证模拟器', icon: 'form' }
      }
    ]
  },
  {
    path: '/enc',
    component: Layout,
    children: [
      {
        path: 'base64',
        name: 'base64',
        component: () => import('@/views/base64/index'),
        meta: { title: 'base64', icon: 'form' }
      },
      {
        path: 'md5',
        name: 'md5',
        component: () => import('@/views/md5/index'),
        meta: { title: 'md5', icon: 'form' }
      },
      {
        path: 'urlencode',
        name: 'urlencode',
        component: () => import('@/views/urlencode/index'),
        meta: { title: 'urlencode', icon: 'form' }
      },
      {
        path: 'symmetry',
        name: 'symmetry',
        component: () => import('@/views/symmetry/index'),
        meta: { title: 'symmetry', icon: 'form' }
      },,
      {
        path: 'rsasign',
        name: 'rsasign',
        component: () => import('@/views/asymmetry/sign/index'),
        meta: { title: 'rsasign', icon: 'form' }
      },
      {
        path: 'rsaenc',
        name: 'rsaenc',
        component: () => import('@/views/asymmetry/enc/index'),
        meta: { title: 'rsaenc', icon: 'form' }
      },
      {
        path: 'hmac',
        name: 'hmac',
        component: () => import('@/views/hmac/index'),
        meta: { title: 'hmac', icon: 'form' }
      }
    ]
  },
  {
    path: '/transfer',
    component: Layout,
    children: [
      {
        path: 'unix',
        name: 'unix',
        component: () => import('@/views/unix/index'),
        meta: { title: 'unix', icon: 'form' }
      },
      {
        path: 'imgtob64',
        name: 'imgtob64',
        component: () => import('@/views/image/tob64/index'),
        meta: { title: 'img2b64', icon: 'form' }
      },
      {
        path: 'b64toimg',
        name: 'b64toimg',
        component: () => import('@/views/image/toimg/index'),
        meta: { title: 'b64toimg', icon: 'form' }
      },
      {
        path: 'cron',
        name: 'cron',
        component: () => import('@/views/cron/index'),
        meta: { title: 'cron', icon: 'form' }
      }
    ]
  },
  {
    path: '/doc',
    component: Layout,
    children: [
      {
        path: 'ascii',
        name: 'ascii',
        component: () => import('@/views/ascii/index'),
        meta: { title: 'ascii', icon: 'form' }
      },
      {
        path: 'httpstatus',
        name: 'httpstatus',
        component: () => import('@/views/httpstatus/index'),
        meta: { title: 'httpstatus', icon: 'form' }
      },
      {
        path: 'httpcontent',
        name: 'httpcontent',
        component: () => import('@/views/httpcontent/index'),
        meta: { title: 'httpcontent', icon: 'form' }
      }
    ]
  },
  {
    path: '/ide',
    component: Layout,
    children: [
      {
        path: 'ace',
        name: 'ace',
        component: () => import('@/views/ide/ace/index'),
        meta: { title: 'ace', icon: 'form' }
      }
    ]
  },
  //  {
  //    path: '/nested',
  //    component: Layout,
  //    redirect: '/nested/menu1',
  //    name: 'Nested',
  //    meta: {
  //      title: 'Nested',
  //      icon: 'nested'
  //    },
  //    children: [
  //      {
  //        path: 'menu1',
  //        component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //        name: 'Menu1',
  //        meta: { title: 'Menu1' },
  //        children: [
  //          {
  //            path: 'menu1-1',
  //            component: () => import('@/views/nested/menu1/menu1-1'),
  //            name: 'Menu1-1',
  //            meta: { title: 'Menu1-1' }
  //          },
  //          {
  //            path: 'menu1-2',
  //            component: () => import('@/views/nested/menu1/menu1-2'),
  //            name: 'Menu1-2',
  //            meta: { title: 'Menu1-2' },
  //            children: [
  //              {
  //                path: 'menu1-2-1',
  //                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //                name: 'Menu1-2-1',
  //                meta: { title: 'Menu1-2-1' }
  //              },
  //              {
  //                path: 'menu1-2-2',
  //                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //                name: 'Menu1-2-2',
  //                meta: { title: 'Menu1-2-2' }
  //              }
  //            ]
  //          },
  //          {
  //            path: 'menu1-3',
  //            component: () => import('@/views/nested/menu1/menu1-3'),
  //            name: 'Menu1-3',
  //            meta: { title: 'Menu1-3' }
  //          }
  //        ]
  //      },
  //      {
  //        path: 'menu2',
  //        component: () => import('@/views/nested/menu2/index'),
  //        meta: { title: 'menu2' }
  //      }
  //    ]
  //  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
