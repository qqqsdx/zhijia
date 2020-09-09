<template>
<div class="tab-main_collect">
    <van-tabs v-model="active">
        <van-tab title="商品">
            <div class="sort_" >
                <!--排序-->
                <van-radio-group v-model="radio" direction="horizontal">
                    <van-radio name="1">综合排序</van-radio>
                    <van-radio name="2">价格升序</van-radio>
                    <van-radio name="3">价格降序</van-radio>
                </van-radio-group>
                <collectmain/>

            </div>

        </van-tab>
        <van-tab title="文章"></van-tab>
        <van-tab title="体验家">
            <myfamily/>
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
    };
  },
  components:{
      myfamily,
      collectmain
  }
};
</script>

<style lang="scss" scope>
@import '../../../assets/style/a.css';
.tab-main_collect{
.van-radio--horizontal{
    font-size: 10px;
}
.van-tabs__wrap {
    margin-bottom: 15px;
 } 

     .sort_{
         .van-radio-group--horizontal{
             justify-content: center;
         }
     }

 .van-tabs__content{
     overflow: hidden;
 }
.sort_ .van-radio-group--horizontal{  //选着排序组件距离下面收藏商品的距离
     margin-bottom:15px;

 }
 .van-tab__pane,
.van-tab__pane-wrapper {
    position: fixed;
    top: 105px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
    background: #f8f8f8;
    padding-top: 15px;
   
}


 .van-tab__pane-wrapper{
    padding:0
}
}


</style>
