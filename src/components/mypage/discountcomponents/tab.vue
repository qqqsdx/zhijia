<template>
    <div class="tab-main">
        <van-tabs v-model="active">
  <van-tab title="未使用">
      <div class="discount-main" >
          <div class="main-top">
          <div class="main-left">
              <p>15</p>
              <span>满49.00可用</span>
          </div>
          <div class="main-right">
              <div>
                  <p>新人专享优惠券</p>
                  <p>有效期至 2020-09-19</p>
              </div>
          </div>
          </div>
          <div class="main-bottom">详细说明</div>
      </div>

  </van-tab>
  <van-tab title="已使用">暂无优惠券</van-tab>
  <van-tab title="已过期">暂无优惠券</van-tab>
 
</van-tabs>

    </div>
</template>
<script>

export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang='scss' scoped>
.tab-main{
    .van-tabs__nav{
        margin-bottom: 15px;
    }
    padding: 0px 15px;
    
    .discount-main{
        width: 100;
        margin-bottom: 15px;

    }
}
</style>