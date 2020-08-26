import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/home',
    component:() => import('@/views/home/Home')
  },
  {
    path:'/category',
    component:() => import('@/views/category/Category')
  },
  {
    path:'/shopcar',
    component:() => import('@/views/shopcar/Shopcar')
  },
  {
    path:'/profile',
    component:() => import('@/views/profile/Profile')
  },
  {
    path:'/selldetails/:id',
    component:() => import('@/views/selldetails/SellDetails'),
    props:true
  },
  {
    path:'/login',
    component:() => import('@/views/user/Login')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

//导出

export default router
