import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect:'/login',
    hidden:true,
    meta:{
      name:'主页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    hidden:true,
    component: () => import ('../views/Login/index.vue'),
    meta:{
      name:'登录'
    }
  },
  {
    path: '/qq',
    name: 'QQ',
    hidden:true,
    component: () => import ('../views/QQ/index.vue'),
    meta:{
      name:'QQ登录'
    }
  },
  {
    path: '/layout',
    name: 'Layout',
    redirect:'/networkClass',
    component: Layout,
    meta:{
      name: '主页',
      icon:'icon-yibiaopan1'
    },
    children: [
      {
        path: '/networkClass',
        name: 'NetworkClass',
        component: () => import ('../views/NetworkClass/index.vue'),
        meta:{
          name:'上课',
          isExploit:''
        }
      },
      {
        path: '/selectCourse',
        name: 'SelectCourse',
        component: () => import ('../views/SelectCourse/index.vue'),
        meta:{
          name:'选课',
          isExploit:''
        }
      },
      {
        path: '/schedule',
        name: 'Schedule',
        component: () => import ('../views/Schedule/index.vue'),
        meta:{
          name:'日程表',
          isExploit:''
        }
      },
      {
        path: '/courseTable',
        name: '',
        component: () => import ('../views/CourseTable/index.vue'),
        meta:{
          name:'社区',
          isExploit:'（敬请期待）'
        }
      },
      {
        path: '/courseTable',
        name: '',
        component: () => import ('../views/CourseTable/index.vue'),
        meta:{
          name:'商城',
          isExploit:'（敬请期待）'
        }
      },
      {
        path: '/courseTable',
        name: '',
        component: () => import ('../views/CourseTable/index.vue'),
        meta:{
          name:'活动',
          isExploit:'（敬请期待）'
        }
      },
      {
        path: '/occupation',
        name: 'Occupation',
        component: () => import ('../views/Occupation/index.vue'),
        meta:{
          name:'职业',
          isExploit:''
        }
      },
      // {
      //   path: '/courseTable',
      //   name: '',
      //   component: () => import ('../views/CourseTable/index.vue'),
      //   meta:{
      //     name:'用户中心',
      //     isExploit:''
      //   }
      // }
    ]
  },
  {
    path: '/live',
    name: 'Live',
    hidden:true,
    component: () => import ('../views/Live/index2.vue'),
    meta:{
      name:'直播'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
