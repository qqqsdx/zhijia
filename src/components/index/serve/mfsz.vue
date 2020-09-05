<template>
  <div class="mfsz">
    <img src="http://adai.vip/images/index/fuwu/mfszimg.png" alt="">
    <div class="timber">
        <h3><van-cell title="关于运输" icon="logistics" /></h3>
        <p>1. 至家承诺，平台内所有商品，满59元包邮，送货区域覆盖全国，详情见 包邮配送表。对于偏远地区产生的实际费用，具体价格咨询客服。</p>
        <p>2. 当您购满3件大件家具（例如：沙发，餐桌，床等），平台可提供统一配送服务。如果用户愿意分开接收商品，平台也可按照您的要求执行。</p>
        <p>3. 平台包邮服务由快递公司和物流公司服务网点正常派送，超出配送区域的，货物将发送至与收货地址最接近的服务网点，请您前往网点提货。</p>
        <p>4. 您在购买商品时所填写的收货地址需包含在平台承诺的送货区域内。</p>
        <p>5. 免费配送安装服务仅限于室内操作，不提供高空作业、吊装等室外作业。</p>
        <p>6. 若您的收货地址所属公共场所、单位或住宅小区谢绝送货安装服务人员进入，由此导致无法免费配送安装等后果，平台不承担未提供免费配送安装服务等相应责任</p>
        <p>7. 若您仅要求搬运安装服务，需保证收货地址所属建筑物本身及其所在环境，包括但不限于大门、楼道、电梯等宽度和高度适合搬运所购商品，应保证楼道内无杂物，便于服务人员将商品送至收货地。</p>
        <p>8. 若因客观原因，包括但不限于电梯空间狭小、电梯无法使用等客观原因导致无法使用电梯，搬运时产生的人工费等相关费用需用户自行承担。收货地址楼层超过3楼且无电梯需收费，具体费用可参考当地市场价格与第三方服务商进行协商，跃层、阁楼按照一层计算。</p>
        <p>9. 若更改收货地址，且更改后的收货地址超出平台承诺的免费配送安装服务范围，由此产生的额外费用，由用户承担；</p>
        <p>10. 因天气、交通管制等不可抗力因素导致无法按时送装，平台将为您顺延送货时间。</p>
        <p>11. 若产生额外支付费用，请您与第三方公司耐心核对，若协商未果导致无法完成送装服务，平台不承担未提供服务的责任。</p>
        <p>12. 为保证您的权益，请您向送装服务人员索要额外费用相关收据或发票并保存，可作为费用支出的凭证。</p>
    </div>
    <div class="timber">
      <h3><van-cell title="关于安装" icon="brush-o" /></h3>
      <p>1. 大件类商品（如电视柜、多人沙发、衣柜等）安装相对复杂，平台将统一免费安装。</p>
      <p>2. 简易组装商品（如椅子、镜子、灯具等），平台将提供详细安装说明，可自行手动操作，如有疑问可联系至家客服为您提供更多支持。</p>
    </div>
    <div class="timber">
      <h3><van-cell title="注意事项" icon="warning-o" /></h3>
      <p class="marno">1.当面验收：</p>
      <p class="marno">为了更好地保障您的自身权益，至家建议您在签收商品前务必进行开箱验收。若验收中发现因外包装损坏导致内部商品出现破损、少件等问题，请您拒绝签收并立即致电至家客服进行核实，至家将协助您处理该问题。</p>
      <p>2.委托他人代收：<br>至家建议用户当面验收所购商品，若您无法当面验收，委托他人代收，请告知被委托人验收流程及相关问题和处理办法。受托人将有权对商品进行签收，至家将按照正常签收标准处理相关售后问题。</p>
    </div>
    <div class="timber">
      <h3 class="btm"><van-cell title="联系至家客服" icon="service-o" /></h3>
      <span>18301291032</span>
      <p class="marno">人工客服时间 早10:00 - 晚8:00</p>
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
.mfsz{
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
        margin-bottom: 28px;
        .van-cell{
          padding: 0;
        }
        i{
          font-size: 18px;
          color: #000000;
        }
        span{
          font-size: 18px;
          color: #000000;
        }
        
      }
      p{
        color: #9FA2A9;
        font-size:14px;
        line-height: 16px;
        margin: 20px 0;
      }
      span{
        color: #E2BB08;
        font-size:14px;
        line-height: 14px;
      }
      .btm{
        margin-bottom: 0px;
      }
      .marno{
        margin: 0;
      }
      .imgbigs{
        width: 100%;
        height: 260px;
        img{
          width: 100%;
          height: 200px;
        }
        .imgtab{
          height: 50px;
          display: flex;
          justify-content: space-between;
          img{
            width: 50px;
            height: 100%;
            border: 2px solid #ffffff;
          }
          .redborder{
            border-color: red;
          }
        }
        
      }
      
  }
}
</style>
