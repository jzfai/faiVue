<template>
  <div>
    <div class="ty">
      <!-- 直接使用animated中的动画class名，注意：必须使用animated这个class名，否则动画会无效 -->
      <div class="animated infinite 	fadeIn delay-2s" @click="fade">faidddd</div>
    </div>
  </div>

</template>
<script>
  export default{
    data:function(){
      return{
        classObject:[
          'box','animated' ,'bounceInDown'
        ]
      }
    },
    methods:{
      fade(even){


        // $('#f').addClass('animated bounceOutLeft')
      }
    },
    created:function(){

    }
  }
</script>
<style scoped>

</style>
