<template>
  <div class="sjfw">
    <img src="../../../assets/img/anquanhuanbao.png" alt="">
    <div class="timber">
        <h3>关于表面涂装</h3>
        <p>1. 专业软装设计师提供一对一服务。</p>
        <p>2. 全屋软装一站式采购，海量货源。</p>
        <p>3. 整体送货安装，省心省力。</p>
        <p>4. 购买家具即可退回设计费。</p>
        <p>5. 全网价格透明，无捆绑销售。</p>
    </div>
    <div class="timber">
        <h3>服务流程</h3>
        <span >1. 留下您的联系方式</span>
        <p class="btm">设计师会在12小时之内（工作日）与您取得联系，确定服务后，需缴纳设计服务定金。</p>
        <p>注：</p>
        <p>· 如拍下定金在平台购买商品总额达到5000元以上，确认收货后将退回定金。</p>
        <p>· 如未下单购买家具，则设计金作为服务费全额收取。</p>
        <span>2. 提供材料</span>
        <p class="btm">房屋带尺寸户型图，现场照片或视频，风格要求及预算，意向产品链接。</p>
        <span>3. 设计师制作方案</span>
        <p class="btm">设计师48小时之内出图，并发送最终方案。</p>
        <span>4. 方案修改</span>
        <p class="btm">出图后，小处修改可以多次，整体风格可更改1次。</p>
        <span>5. 购买商品</span>
        <p class="btm">商品确定后可在客户端一次下单购买。</p>
        <span>6. 上门安装</span>
        <p class="btm">所有商品到货之后，客服预约安装上门</p>
    </div>
    <div class="timber">
      <h3>服务须知</h3>
      <p>1. 设计服务对象为需要购买至家产品的客户。</p>
      <p>2. 房屋面积200平以上，出图时间多增加24小时，500平以上，出图时间需一周。</p>
      <p>3. 至家产品可搭配的主要风格有现代/日式/新中式/北欧/简美/简欧，其他风格可与客服沟通之后再定。</p>
      <p>4. 购买满足条件的商品可以享受确认收货且不退货的情况下退回设计金，若无购买产品则不予退回。</p>
      <p>5. 设计方案尺寸以客户提供平面图为准，若实际尺寸与图纸尺寸出现偏差，客户需要与客服确认尺寸后再购买</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.sjfw{
  img{
      width: 100%;
      height: 151px;
    }
  .timber{
      width: 90%;
      min-height: 107px;
      margin: auto;
      margin-top: 25px;
      h3{
        font-size: 18px;
        color: #000000;
        margin-bottom: 28px;
      }
      p{
        color: #9FA2A9;
        font-size:12px;
        line-height: 16px;
      }
      span{
         color: #000;
        font-size:12px;
        line-height: 14px;
      }
      .btm{
        margin-bottom: 10px;
      }
      
  }
}
</style>
