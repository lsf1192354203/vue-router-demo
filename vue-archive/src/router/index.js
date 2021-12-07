import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Archive from '@/views/Archive/Archive'
import * as components from './components'

Vue.use(VueRouter)
// 获取原型对象上的 push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
  path: '/',
  name: 'login',
  component: Login
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/archive',
  name: 'archive',
  component: Archive,
  redirect: '/archive/zwdata',
  children: [{
    path: 'zwdata',
    name: 'zwdata',
    component: components.Main,
    meta: {
      role: [],
      isMenu: true,
      icon: 'el-icon-folder',
      menuName: '账务数据'
    },
    children: [{
      path: 'pzInfo',
      name: 'pzInfo', // route的name设置为表格名，方便获取数据
      component: components.PzInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '凭证'
      }
    }, {
      path: 'zyInfo',
      name: 'zyInfo',
      component: components.ZyInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '账页'
      }
    }, {
      path: 'kmhzInfo',
      name: 'kmhzInfo',
      component: components.KmhzInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '科目汇总'
      }
    }, {
      path: 'zzInfo',
      name: 'zzInfo',
      component: components.ZzInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '总账'
      }
    }, {
      path: 'wlInfo',
      name: 'wlInfo',
      component: components.WlInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '往来账'
      }
    }, {
      path: 'zxhsInfo',
      name: 'zxhsInfo',
      component: components.ZxhsInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '专项核算'
      }
    }, {
      path: 'zhhzInfo',
      name: 'zhhzInfo',
      component: components.ZhhzInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '综合汇总'
      }
    }]
  }, {
    path: 'bbData',
    name: 'bbData',
    component: components.BbData,
    meta: {
      role: [],
      isMenu: true,
      icon: 'el-icon-document',
      menuName: '报表数据'
    }
  }, {
    path: 'assetdata',
    name: 'assetdata',
    component: components.Main,
    meta: {
      role: [],
      isMenu: true,
      icon: 'el-icon-folder',
      menuName: '资产数据'
    },
    children: [{
      path: 'assetInfo',
      name: 'assetInfo', // route的name设置为表格名，方便获取数据
      component: components.AssetInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '资产卡片'
      }
    }, {
      path: 'cardInfo',
      name: 'cardInfo', // route的name设置为表格名，方便获取数据
      component: components.CardInfo,
      meta: {
        role: [],
        isMenu: true,
        icon: 'el-icon-document',
        menuName: '卡片明细'
      }
    }]
  }]
}, {
  path: '*',
  redirect: '/'
}]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router