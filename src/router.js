import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component:()=>import('./views/home/index.vue'),
      meta: {
        footerShow: true
      }
    },
    {
      path:'/home/search',
      name:'search',
      component:()=>import('./views/home/search')
    },
    {
      path:'/home/shopCar',
      name:'shopCar',
      component:()=>import('./views/home/shopCar')
    },
    {
      path:'/detail/:id',
      name:'detail',
      redirect:"/detail/:id/info",
      component:()=>import('./views/detail'),
      // beforeEnter: (to, from, next) => {
      //   console.log("from",from.path);
      //   if(to.path=="/home/shopCar"||to.path=="/class/info"){
      //     next();
      //   }else{
      //     next(false);
      //   }
      // },
      children:[
        {
          path:'info',
          name:'info',
          component:()=>import('./views/detail/info'),
        },
        {
          path:'comment',
          name:'comment',
          component:()=>import('./views/detail/comment')
        }
      ]
    },
    {
      path:'/class',
      name:'class',
      component:()=>import('./views/class/index.vue'),
      meta: {
        footerShow: true
      }
    },
    {
      path:'/class/info/:id',
      name:'classInfo',
      component:()=>import('./views/class/info')
    },
    {
      path:'/find',
      name:'find',
      redirect:"/find/recommend",
      component:()=>import('./views/find/index.vue'),
      children:[
        {
          path:'article',
          name:'article',
          component:()=>import('./views/find/article'),
          meta: {
            footerShow: true
          },
        },
        {
          path:'recommend',
          name:'recommend',
          component:()=>import('./views/find/recommend'),
          meta: {
            footerShow: true
          },
        }
      ]
    },
    {
      path:'/my',
      name:'my',
      component:()=>import('./views/my/index.vue'),
      meta: {
        footerShow: true
      }
    },
    {
      path:'/my/register',
      name:'register',
      component:()=>import('./views/my/register/index.vue'),
    },
    {
      path:'/my/login',
      name:'login',
      component:()=>import('./views/my/login/index.vue'),
    },
    {
      path:'/buy',
      name:'buy',
      component:()=>import('./views/buy/index.vue'),
    },
    {
      path:'/buy/success',
      name:"buySuccess",
      component:()=>import('./views/buy/success'),
    },
    {
      path:'/order',
      name:'order',
      component:()=>import('./views/order'),
    }
  ]
})
