<template>
  <div class="guess">
    <van-cell title="猜你喜欢" />
    <div class="container">
      <div class="li van-hairline--surround" v-for="(item,index) in list" :key="index">
        <img v-lazy="item.img" alt />
        <p class="name van-ellipsis">{{item.name}}</p>
        <div class="price">￥{{item.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vant, { Lazyload } from "vant";
export default {
  data() {
    return {
      list: [
        {
          name: "北欧简约双人床高箱储物床布艺软靠",
          img:
            "//img14.360buyimg.com/n1/jfs/t14470/315/1107663882/443152/121e6037/5a449d4fN6600074a.jpg",
          price: 999,
        },
        {
          name:
            "家逸实木餐桌清漆餐桌椅组合现代简约小户型长方形饭桌松木一桌四椅",
          img:
            "//img14.360buyimg.com/n1/jfs/t15571/346/950443252/347234/609b10d2/5a449d70N4ac67979.jpg",
          price: 128,
        },
        {
          name: "现代简约客厅小户型伸缩电视柜",
          img:
            "//img11.360buyimg.com/n7/jfs/t1/14496/38/14735/191969/5ca9ec19E75214c95/eae4a5f5790ab830.jpg",
          price: 345,
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.guess {
  .van-cell {
    height: 50px;
    align-items: center;
    padding: 10px 30px;
    .van-cell__title {
      color: #000;
      font-size: 13px;
      font-weight: bold;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    > div {
      padding: 0 20px;
      padding-top: 19px;
      padding-bottom: 77px;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 146px;
        height: 146px;
        margin-bottom: 14px;
      }
      .name {
        margin-bottom: 13px;
      }
      .name,
      .price {
        font-size: 13px;
        font-weight: 600;
        color: #000000;
        width: 100%;
      }
    }
  }
}
</style>
