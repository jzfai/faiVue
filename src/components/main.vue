<template>
  <div id="main">
    <!-- left-->
    <div class="main-left">
      <h2 class="left-header">全部产品</h2>
      <template>
        <h3>pc产品</h3>
        <ul>
          <li>数据统计</li>
          <li>数据预测</li>
          <li>流量分析</li>
          <li>广告发布</li>
        </ul>
        <!--<div v-if="!product.last" class="hr"></div>-->
      </template>
      <!-- 最新消息-->
      <div class="">
        <h2>最新消息</h2>
        <ul>
          <li><a href=""></a></li>
        </ul>
      </div>
    </div>
    <!-- right-->
    <div class="main-right">
      <!-- 轮播插件-->
      <slide :invTime="invTime" :slides="slides"></slide>
      <!-- right-footer-->
      <div class="right-footer">
        <div class="footer-item">
          <img src="../assets/images/4.png" />
          <div class="box-left">
             <h2>开放产品</h2>
             <span>开放产品是一款很好的产品</span>
             <button>立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import slide from '@/components/slide.vue'
  export default{
    components:{
      slide:slide
    },
    data:function(){
      return{
        invTime: 2000,
        //此处数据需从数据库获得
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/forecast'
          }
        ],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ]
      }
    },
    methods:{
    },
    created:function(){
      //发送ajax请求
//       this.$http.get('http://127.0.0.1:8082/slide')
//               .then(function(result){
// //                console.log(result.data)
//                 //?
// //                this.slides=result.data
//               }.bind(this));
//       this.$http.get('http://127.0.0.1:8082/boardList')
//               .then(function(result){
// //                this.boardList=result.data;
//               }.bind(this))


      // var target = { a: 1 };
      //
      // var source1 = { b: 2,d:5,fai:{a:111} };
      // var source2 = { c: 3 };
      // let testObj={};
      // function clone(origin) {
      //     return Object.assign(testObj, source1);
      // }
      // console.log(clone(source1));
      // testObj.fai.a="fai"
      // console.log(source1);
      // console.log(testObj);
      // Object.assign(target, source1, source2);

      // {a:1, b:2, c:3}
      // console.log( target)
      //  var obj = { foo: 'bar', baz: 42 };
      //  console.log(Object.keys(obj));
      //  let z = { a: 3, b: 4 };
      //  let n = { ...z };
      //  console.log(n);
      let propKey = 'foo';

      let obj = {
        [propKey]: true,
        ['a' + 'bc']: 123,
        body:{
          user:"fai",
        }
      };
      // console.log( Object.keys(obj));

      for (var i in obj) {
        if (obj.hasOwnProperty(i) === true) {
          console.log(obj[i])
        }
      }
      //console.log(obj.hasOwnProperty("msg"));//判断对象是否具有这个属性

      /*返回对象的值*/
      console.log(Object.keys(obj));
      console.log( Object.values(obj));
      console.log( Object.entries(obj));//二维数组
      const firstName = (obj
          && obj.body
          && obj.body.user
          && obj.body.user.firstName) || 'default';
      // const firstName = obj.body?.user?.firstName || 'default';
      console.log(firstName)
    }
  }
</script>
<style scoped>
@import '../../static/css/main.css';
</style>
