<template>
  <div class="default">
    <div class="welcome">
      <img src="../../assets/img/login.png" alt="">
      <div class="back" @click="goback"></div>
    </div>
    <router-link :to="{name:'log',query: {redirect:redirect}}" tag="div" class="phoneLog">
      <van-icon name="phone-o" size="20" />手机号登录/注册
    </router-link>
    <!-- <div class="phoneLog">
      
    </div>-->
    <div class="weChatLog">
      <van-icon name="phone-o" size="20" />微信登录
    </div>
    <div class="tiaokuan">
      登灵即伐表同意至家
      <router-link :to="{name:'agreement'}">使用协议</router-link>和
      <router-link :to="{name:'privacy'}">隐私条款</router-link>
    </div>
    <div class="other">
      第三方登录
      <van-icon name="down" />
      <div class="weibo"></div>
      <div class="qq"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirect: {}, //从哪里跳转来的
    };
  },
  mounted() {
    this.redirect = this.$route.query;
    console.log(this.redirect.redirect);
  },
  methods:{
    goback(){
      this.$router.replace('/index')
    }
  }
};
</script>

<style lang="scss" scoped>
.default {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #ffca46;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  .welcome {
    width: 320px;
    height: 320px;
    position: relative;
    border-radius: 5px;
    img{
      width: 100%;
      height: 100%;
    }
    .back{
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .phoneLog {
    margin-top: 20px;
    width: 320px;
    background: #fff;
    color: #ffa202;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  .weChatLog {
    margin-top: 20px;
    width: 320px;
    background: #ffad03;
    color: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  .van-icon {
    margin-right: 10px;
  }
  .tiaokuan {
    width: 320px;
    text-align: left;
    padding-left: 20px;
    color: #ffdd6c;
    font-size: 12px;
    margin-top: 20px;
    a {
      color: #fff;
    }
  }
  .other {
    position: relative;
    width: 320px;
    text-align: left;
    padding-left: 20px;
    color: #fff;
    font-size: 18px;
    // font-weight: bold;
    margin-top: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    .van-icon {
      transform: rotate(-90deg);
      margin-left: 10px;
    }
    .weibo,
    .qq {
      position: absolute;
      background: #fff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .weibo {
      right: 90px;
    }
    .qq {
      right: 20px;
    }
  }
}
</style>
