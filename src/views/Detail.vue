<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="detail-container">
      <van-swipe class="my-swipe" @change="onChange" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in result.imgArr" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
      </van-swipe>
      <template>
        <div class="custom-indicator">
          <span>{{ current + 1 }}</span>
          /4
          <span style="margin-left:10px">商品图集</span>
        </div>
      </template>

      <div class="price">
        <div class="newprice">
          ￥{{result.currentPrice}}
          <img src="../assets/img/detail/collect.png" class="collect" />
          <img src="../assets/img/detail/share.png" alt class="share" />
        </div>
        <div class="oldprice">市场价￥{{result.originalPrice}}</div>
      </div>
      <div class="name">{{result.title}}</div>
      <ul class="fuwu">
        <li>满59包邮</li>
        <li>安装服务</li>
        <li>闪电服务</li>
        <li>贴心售后</li>
      </ul>
    </div>
    <choose></choose>
  </div>
</template>

<script>
import choose from "../components/detail/choose"
export default {
  data() {
    return {
      current: 0,
      result: {
        imgArr: [
          "//img13.360buyimg.com/n1/jfs/t1/48329/4/12734/259176/5d9c08a9Ee904347b/d7237760b21fdafa.jpg",
          "//img13.360buyimg.com/n1/jfs/t5587/82/1082141080/260469/6c749161/5923ae24Ne3946a00.jpg",
        ],
        productId: "1001001",
        imgUrl:
          "http://haitao.nosdn1.127.net/62c7ca8d68f14920b976ccd7760500e01531725806691jjnxzwi311957.jpg?imageView&thumbnail=800x0&quality=85",
        currentPrice: 15,
        originalPrice: 21,
        title: "豆袋懒人沙发舒适坐感",
        style: [
          {
            pattern: "姜木绿",
            standard: "1",
            count: 1,
          },
        ],
      },
    };
  },

  components: {
      choose,
  },

  computed: {},

  mounted() {},

  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickLeft(){
        console.log(1);
    }
  },
};
</script>
<style lang='scss'>
* {
  text-align: left;
  color: #000;
}
.van-nav-bar .van-icon {
  color: #000;
  font-size: 20px;
}

.van-nav-bar__title {
  font-size: 20px;
  font-weight: bold;
}
.detail-container {
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  position: relative;
  .custom-indicator {
    position: absolute;
    left: 240px;
    top: 290px;
    padding: 2px 10px;
    font-size: 12px;
    background: #eef2f5;
    height: 28px;
    line-height: 28px;
    font-weight: bold;
    border-radius: 10px;
    color: #adaeb5;
    display: flex;
    align-items: center;
    span {
      color: #000;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    position: relative;
    height: 325px;
    width: 325px;
    // border: 1px solid black;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .price {
    margin-top: 27px;
    .newprice {
      position: relative;
      font-size: 30px;
      font-weight: bold;
      display: flex;
      align-items: center;
      img {
        height: 18px;
        width: 18px;
        position: absolute;
      }
      .share {
        right: 5px;
      }
      .collect {
        height: 22px;
        width: 22px;
        right: 40px;
      }
    }
    .oldprice {
      font-size: 13px;
      font-weight: 500;
      color: #a2a2a2;
      margin-top: 8px;
    }
  }
  .name {
    font-size: 17px;
    font-weight: bold;
    margin-top: 14px;
  }
  .fuwu {
    height: 42px;
    background: #f7f8fa;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    font-weight: bold;
    padding: 0 14px;
    margin-top: 27px;
    li:before{
        content: '';
        display: inline-block;
        margin-right: 5px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #000;
        margin-top: -3px;
        position: relative;
        top: -2px;
    }
  }
}
</style>
