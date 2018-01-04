<template>
    <div>
         <!--此处调用鼠标进入和移出事件-->
        <div class="slide" @mouseenter="clearInterval()" @mouseleave="startInterval()">
          <!-- 轮播图片-->
          <div class="slide-img">
            <a href="slides[nowIndex].href">
              <transition name="img-transition">
                <img v-if="isShow"  :src="slides[nowIndex].src" />
              </transition>
              <transition name="img-transition-next">
                <img v-if="!isShow" :src="slides[nowIndex].src" />
              </transition>
            </a>
          </div>
          <!-- 当前显示的图片名称-->
          <h2>cc{{slides[nowIndex].title}}</h2>
          <!-- 导航插件-->
          <ul>
            <!-- 左移-->
            <li @click="goTo(prevIndex)">&lt;</li>
            <li v-for="(dish, index) in slides" @click="goTo(index)"
                :class="{on: index=== nowIndex}"
              >
              <a>{{index+1}}</a>
            </li>
            <!-- 右移-->
            <li @click="goTo(nextIndex)">&gt;</li>
          </ul>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
          slides:{
            type:Array,
            default:[]
          },
          invTime:{
            type:Number,
            default:1000
          }
        },
        data: function () {
            return {
              isShow:true,
              nowIndex:0
            }
        },
        computed:{
          //用计算属性监听prev和next的变化（监听函数）
          prevIndex:function(){
            if(this.nowIndex===0){
              return this.slides.length-1
            }
            else{
              return this.nowIndex-1;
            }
          },
          nextIndex:function(){
            if(this.nowIndex===this.slides.length-1){
              return 0
            }
            else{
              return this.nowIndex+1;
            }
          }
        },
        methods: {
          //点击跳转函数
          goTo:function(index){
            this.isShow=false;
            setTimeout(function(){
              this.nowIndex=index;
              this.isShow=true;
            }.bind(this))
          },
          //启动定时器
          startInterval:function(){
            //this.invId自动创建invId变量
            this.invId=setInterval(function(){
              this.goTo(this.nextIndex)
            }.bind(this),this.invTime)
          },
          clearInterval:function(){
            clearInterval(this.invId)
          }

        },
        created: function () {

        },
        mounted:function(){
          this.startInterval();
        }
    }
</script>
<style scoped>
  @import "../../static/css/slide.css";
</style>
