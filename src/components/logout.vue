<template>
    <div>
      <transition name="drop">
      <div class="modal" v-if="show" @click="closeSelf">
           <div class="content" v-if="show">
             <span class="content-close" @close="closeSelf">×</span>
             <slot>empty</slot>
           </div>
      </div>
      </transition>
    </div>
</template>
<script>
    export default{
        components:{

        },
        props:{
          show:{
            type:Boolean,
            default:true
          }
        },
        data: function () {
            return {
            }
        },
        methods: {
          closeSelf:function(){
           this.$emit('on-close')
          }
        },
        created: function () {

        }
    }
</script>
<style scoped>

  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
  }
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-leave-active {
    transform: translateY(-500px);
  }

.modal{
  position:fixed;
  top:0;
  left: 0;
  right:0;
  bottom:0;
  background-color:rgba(100,100,100,.2);
  z-index: 30;
}
.content{
  position: fixed;
  overflow: auto;
  width:50%;
  top:20%;
  left:30%;
  z-index: 100;
  background-color: #fff;
  border: 2px solid #464068;
  padding:2%;
  line-height:1.6;
  border-radius: 4px;
}
.content-close{
  position: absolute;
  top:3px;
  right: 3px;
  z-index: 102;
  padding:0 6px ;
  border-radius: 50%;
  background-color:#4fc08d;
  cursor:pointer;
}
</style>
