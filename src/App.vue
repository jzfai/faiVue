<template>
   <div>
     <div class="app-header">
      <div class="app-header-inner">
       <!-- logo图片-->
       <router-link :to="{path:'/'}" class="header-logo">
         <img src="./assets/logo.png" />
       </router-link>
       <!-- 右侧导航条 登陆注册 -->
       <div class="header-nav">
         <ul class="nav-list">
           <li @click="showLogout('showLogin')">登录</li>
           <li class="nav-pill ">|</li>
           <li @click="showLogout('showReg')">注册</li>
           <li class="nav-pill">|</li>
           <li @click="showLogout('showAbout')">关于</li>
         </ul>
       </div>
      </div>
     </div>
     <!-- contain部分-->
     <div class="container">
       <keep-alive>
         <router-view></router-view>
       </keep-alive>
     </div>

     <div class="app-footer">
       <p>{{not_show}}</p>
     </div>
     <!--logout部分包括login reg about组件-->
     <logout :show="showLogin" @on-close="hideLogout('showLogin')">
       <login></login>
     </logout>
     <logout :show="showReg" @on-close="hideLogout('showReg')">
       <reg></reg>
     </logout>
     <logout :show="showAbout" @on-close="hideLogout('showAbout')">
       <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
     </logout>
   </div>
</template>

<script>
 import logout from '@/components/logout'
 import login from '@/components/login'
 import reg from '@/components/reg'

 import { mapGetters } from 'vuex';



export default {
  components:{
    logout:logout,
    login:login,
    reg:reg
  },
  data:function(){
    return{
      showLogin:false,
      showReg:false,
      showAbout:false
    }
  },
  methods:{
    showLogout:function(param){
     //此处必须用【】括号
      this[param]=true;
    },
    hideLogout:function(param){
      this[param]=false;
    },
  },

  mounted:function () {
      console.log(this.$store.state.cartStore.show);
      console.log(this.$store.getters.not_show);
      this.$store.dispatch('switch_dialog',true)
  },

  computed :{
    //这里的三点叫做 : 扩展运算符
    //这里的三点叫做 : 扩展运算符
    ...mapGetters([
      'not_show',
      // ...
    ])
  }
}
</script>

<style >
@import '../static/css/app.css';
</style>
