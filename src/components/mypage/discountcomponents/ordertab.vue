<template>
<div class="tab-main_order">
    <van-tabs v-model="active">
        <van-tab :title="item.title" v-for="(item,index) in list"
        :key="index"
        :to="item.to"
        >
           
        </van-tab>
       

    </van-tabs>

</div>
</template>

<script>
import myfamily from '../discountcomponents/myfamily'
import collectmain from '../discountcomponents/collectmain'
export default {
  data() {
    return {
      radio: '1',
       active: 0,
       list:[
           {
               title:'全部',
               to:'/order/all',
           },
           {
               title:'待付款',
               to:'/order/paid'
           },
           {
               title:'待发货',
               to:'/order/shipped'
           },
           {
               title:'待收货',
               to:'/order/received'
           },
           {
               title:'待评价',
               to:'/order/evaluated'
           },
       ]
    };
  },
  components:{
      myfamily,
      collectmain
  },
  
};
</script>

<style lang="scss" scope>
@import '../../../assets/style/a.css';
// .tab-main_order{
// .van-radio--horizontal{
//     font-size: 10px;
// }
// .van-tabs__wrap {
//     margin-bottom: 15px;
//  } 

//      .sort_{
//          .van-radio-group--horizontal{
//              justify-content: center;
//          }
//      }

//  .van-tabs__content{
//      overflow: hidden;
//  }
// .sort_ .van-radio-group--horizontal{  //选着排序组件距离下面收藏商品的距离
//      margin-bottom:15px;

//  }
//  .van-tab__pane,
// .van-tab__pane-wrapper {
//     position: fixed;
//     top: 105px;
//     bottom: 0px;
//     left: 0px;
//     right: 0px;
//     overflow: auto;
//     background: #f8f8f8;
//     padding-top: 15px;
   
// }


//  .van-tab__pane-wrapper{
//     padding:0
// }
// }


</style>
