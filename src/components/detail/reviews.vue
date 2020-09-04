<template>
  <div class="reviews">
    <van-cell title="评价晒图" is-link />
    <div class="content">
      <div class="information">
        <img src="../../assets/img/detail/head.png" alt />
        <p class="name">颜落大人</p>
        <van-rate v-model="value" :size="11" color="#ffd21e" void-icon="star" void-color="#eee" />
      </div>
      <div class="which">款式：四件套；规格：组合款</div>
      <div class="msg">
        <p>很满意，质感很好，质量也棒</p>
        <img src="//img13.360buyimg.com/n1/jfs/t1/48329/4/12734/259176/5d9c08a9Ee904347b/d7237760b21fdafa.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.5,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
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
.content {
  padding: 5px 35px;
  padding-bottom: 30px;
  .information {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 22px;
      height: 22px;
    }
    .name {
      font-size: 12px;
      font-weight: bold;
      color: #000000;
      position: absolute;
      left: 32px;
    }
  }
  .which {
    font-size: 12px;
    font-weight: bold;
    color: #9da1a8;
    margin: 13px 0;
  }
  .msg {
    p {
      font-size: 12px;
      font-weight: bold;
      color: #474747;
      margin-bottom: 12px;
    }
    img{
        width: 100px;
        height: 100px;
    }
  }
}
</style>
