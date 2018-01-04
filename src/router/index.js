import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import detail from '@/components/detail'


Vue.use(Router)

export default new Router({
  //mode:'history',
  routes: [
    //重定向
    {
      path:'/',
      redirect:'/main'
    },
    {
      path:'/main',
      component:main
    },
    {
      path:'/detail',
      component:detail
    }

  ]
})
