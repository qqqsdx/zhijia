<template>
<div class="tab-main">
    <van-tabs v-model="active">
        <van-tab title="商品">
            <div class="sort_" >
                <!--排序-->
                <van-radio-group v-model="radio" direction="horizontal">
                    <van-radio name="1">综合排序</van-radio>
                    <van-radio name="2">价格升序</van-radio>
                    <van-radio name="3">价格降序</van-radio>
                </van-radio-group>

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
export default {
  data() {
    return {
      radio: '1',
       active: 0,
    };
  },
  components:{
      myfamily
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/style/a.css';
.van-radio--horizontal{
    font-size: 10px;
}
.van-tabs__wrap {
    margin-bottom: 15px;
 } 
 .tab-main{
     .sort_{
         margin: 15px 0px;
         .van-radio-group--horizontal{
             justify-content: center;
         }
     }
 }


</style>
