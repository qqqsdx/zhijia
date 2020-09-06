<template>
  <div class="choose">
    <div class="choose-warp">
      <van-cell title="款式选择" is-link value="6款式可选" />
      <van-cell title="简介及参数" is-link value="尺寸·材质·风格" />
      <van-cell title="线下体验" is-link value="3处体验点" />
    </div>
    <div class="shop">
      <img src="../../assets/img/detail/logo.jpg" alt />
      <div class="msg">
        <p style="color:#000;">Perch栖息</p>
        <p style="color:#969799">上架商品134个</p>
      </div>
      <van-icon name="arrow" />
    </div>
    <!-- <van-sku v-model="show" :sku="sku" :goods="goods" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      // sku: {
      //   // 数据结构见下方文档
      //   tree: [
      //     {
      //       k: "颜色", // skuKeyName：规格类目名称
      //       k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      //       v: [
      //         {
      //           id: "1", // skuValueId：规格值 id
      //           name: "红色", // skuValueName：规格值名称
      //           imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
      //           previewImgUrl: "https://img.yzcdn.cn/1p.jpg", // 用于预览显示的规格类目图片
      //         },
      //         {
      //           id: "1",
      //           name: "蓝色",
      //           imgUrl: "https://img.yzcdn.cn/2.jpg",
      //           previewImgUrl: "https://img.yzcdn.cn/2p.jpg",
      //         },
      //       ],
      //       largeImageMode: false, //  是否展示大图模式
      //     },
      //   ],
      //   // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      //   list: [
      //     {
      //       id: 2259, // skuId
      //       s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
      //       s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
      //       price: 100, // 价格（单位分）
      //       stock_num: 110, // 当前 sku 组合对应的库存
      //     },
      //   ],
      //   price: "1.00", // 默认价格（单位元）
      //   stock_num: 227, // 商品总库存
      //   collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      //   none_sku: false, // 是否无规格商品
      // },
      // goods: {
      //   // 默认商品 sku 缩略图
      //   picture:
      //     "//img13.360buyimg.com/n1/jfs/t1/48329/4/12734/259176/5d9c08a9Ee904347b/d7237760b21fdafa.jpg",
      // },
      // messageConfig: {
      //   // 数据结构见下方文档
      // },
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.choose {
  margin-top: 10px;
  > .choose-warp {
    .van-cell {
      height: 50px;
      align-items: center;
      padding: 10px 24px;
      .van-cell__title {
        color: #000;
        font-size: 13px;
        font-weight: bold;
      }
      .van-cell__value {
        text-align: left;
        left: -75px;
      }
    }
  }
  .shop {
    height: 74px;
    border: 12px #edf1f4 solid;
    border-left: 0;
    border-right: 0;
    display: flex;
    padding: 0 24px;
    justify-content: space-between;
    align-items: center;
    .van-icon {
      min-width: 1em;
      height: 0.64rem;
      font-size: 0.42667rem;
      line-height: 0.64rem;
      color: #969799;
    }
    .msg{
      font-size: 12px;
      margin-left: -180px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;
    }
    img{
      width: 35px;
      height: 35px;
    }
  }
}
</style>
