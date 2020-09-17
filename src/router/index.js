import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/tech',
          name: 'Tech',
          component: () => import('@/components/type/Tech')
        },{
          path: '/product',
          name: 'Product',
          component: () => import('@/components/type/Product')
        },{
          path: '/about',
          name: 'About',
          component: () => import('@/components/type/About')
        },{
          path: '',
          name: 'Home',
          component: () => import('@/components/type/Home')
        },{
          path: '/detail',
          name: 'Article',
          component: () => import('@/components/Article')
        }
      ]
    }
  ]
})
