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
    <reviews></reviews>
    <guess></guess>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-button
        style="color:#000;font-weight: bold;border-left:1px solid #EDF1F4"
        color="#fff"
        type="warning"
        text="立即购买"
      />
      <van-goods-action-button color="#313131" type="danger" text="加入购物车" @click="showchoose"/>
    </van-goods-action>

    <van-popup
      v-model="show"
      position="bottom"
      closeable
      close-icon="close"
      close-icon-position="top-right"
    >
      <div class="top">
        <div class="title">款式规格</div>
        <div class="msg">
          <img :src="result.imgUrl" alt class="van-hairline--surround" />
          <div class="right">
            <p class="price">￥{{result.currentPrice}}</p>
            <p class="name van-ellipsis">{{result.title}}</p>
            <div class="id">编号：{{result.productId}}</div>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="title">
          款式
          <span>请选择款式</span>
        </div>
        <div class="item">
          <div class="list" v-for="(item,index) in kuanshi" :key="index" @click="active1(index)" :class="{'active':activeindex1 == index}">{{item}}</div>
        </div>
        <div class="title">
          规格
          <span>请选择规格</span>
        </div>
        <div class="item">
          <div class="list" v-for="(item,index) in guige" :key="index" @click="active2(index)" :class="{'active':activeindex2 == index}">{{item}}</div>
        </div>
        <div class="title" style="display:flex;justify-content: space-between;">数量 <van-stepper v-model="addnum" disable-input /></div>
      </div>
      
      <van-button type="primary" block @click="sub">确定</van-button>
    </van-popup>
  </div>
</template>

<script>
import choose from "../components/detail/choose";
import reviews from "../components/detail/reviews";
import guess from "../components/detail/guess";
export default {
  data() {
    return {
      show: true,
      current: 0,
      result: {
        imgArr: [
          "//img13.360buyimg.com/n1/jfs/t1/48329/4/12734/259176/5d9c08a9Ee904347b/d7237760b21fdafa.jpg",
          "//img13.360buyimg.com/n1/jfs/t5587/82/1082141080/260469/6c749161/5923ae24Ne3946a00.jpg",
        ],
        productId: "1001001",
        imgUrl:
          "//img13.360buyimg.com/n1/jfs/t1/48329/4/12734/259176/5d9c08a9Ee904347b/d7237760b21fdafa.jpg",
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
      kuanshi:[
        '脚踏海绵','单人位海绵','双人位海绵','脚踏乳胶','单人位乳胶','双人位乳胶'
      ],
      guige:[
        '80cm*60cm*42cm','100cm*70cm*52cm'
      ],
      activeindex1:'a',
      activeindex2:'a',
      addnum:1
    };
  },

  components: {
    choose,
    reviews,
    guess,
  },

  computed: {},

  mounted() {},

  methods: {
    onChange(index) {
      this.current = index;
    },
    onClickLeft() {
      console.log(1);
    },
    active1(i){
      this.activeindex1=i
    },
    active2(i){
      this.activeindex2=i
    },
    sub(){
      this.show=false
    },
    showchoose(){
      this.show=true
    }
  },
};
</script>
<style lang='scss'>
* {
  text-align: left;
  // color: #000;
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
    li:before {
      content: "";
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
.van-goods-action-button--first {
  color: #000;
}
.van-goods-action-button--first,
.van-goods-action-button--last {
  border-radius: 0;
  height: 100%;
  width: 130px;
}
.van-popup {
  height: 500px;
  padding: 0 20px;
  // padding-top: 0px;
  .van-popup__close-icon {
    color: #000;
  }
  .title {
    color: #000;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    span {
      padding-left: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 12px;
    }
    .van-stepper{
      .van-stepper__minus--disabled, .van-stepper__plus--disabled,.van-stepper__input,.van-stepper__minus, .van-stepper__plus{
        // color: #000;
        background: transparent;
      }
      .van-stepper__plus{
        font-weight: bold;
      }
    }
  }
  .msg {
    display: flex;
    align-items: center;
    color: #000;
    padding-bottom: 15px;
    img {
      width: 100px;
      height: 100px;
      margin-right: 15px;

    }
    .right {
      height: 125px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 5px;
      .price {
        font-weight: bold;
        font-size: 20px;
      }
      .name {
        font-size: 16px;
      }
      .id {
        font-size: 12px;
        color: rgba(69, 90, 100, 0.6);
      }
    }
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    .list {
      background: #EFF3F6;
      padding: 10px 20px;
      font-size: 16px;
      margin-right: 20px;
      margin-bottom: 10px;
      box-sizing: border-box;
      border: 1px solid transparent;
    }
    .active{
      border: 1px solid #F3DD4B;
      background: #FFEF9A;
    }
  }
  
  .top{
    position: relative;
    // top: 0px;
  }
  .middle{
    // margin-top: 285px;
    height: 250px;
    overflow: auto;
  }
  .van-button--block{
    margin-top: 10px;
    background: #FFD902;
    color: #000;
    font-weight: bold;
    border: 0;
  }
}
</style>
