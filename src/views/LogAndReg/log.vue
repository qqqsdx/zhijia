<template>
  <div class="log-container">
    <van-nav-bar title="手机号登录" left-arrow @click-left="onClickLeft" />
    <div class="msg">
      <van-field v-model="phoneNum" name="手机号" label="+86" label-width="40px" placeholder="请输入手机号" />
      <van-field class="short" v-model="yzm" name="验证码" placeholder="请输入验证码" />
      <!-- #FFEAB5 -->
      <van-button
        type="warning"
        color="#FEAC02"
        :disabled="Numdisabled"
        @click="sendyzm"
      >{{send?msg:'重新发送'+ count +'s'}}</van-button>
    </div>
    <van-button
      type="primary"
      size="large"
      color="#FEAC02"
      :disabled="Yzmdisabled"
      @click="login"
    >登录</van-button>
  </div>
</template>

<script>
import { userlogin } from "../../utils/api";
export default {
  data() {
    return {
      redirect: {}, //从哪里跳转来的
      msg: "发送验证码",
      phoneNum: "",
      yzm: "",
      Numdisabled: true,
      Yzmdisabled: true,
      phoneNumreg: /^1[3-9][0-9]{9}$/,
      yzmreg: /^\d{6}$/,
      send: true,
      count: 60,
      timer: null,
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.redirect = this.$route.query;
    console.log("111:", this.redirect);
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    sendyzm() {
      this.$toast("发送成功");
      //   Toast("发送成功");
      this.send = false;
      this.Numdisabled = true;
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= 60) {
          this.count--;
        } else {
          this.Numdisabled = false;
          clearInterval(this.timer);
          this.count = 60;
          this.timer = null;
          this.send = true;
        }
      }, 1000);
    },
    async login() {
      const result = await userlogin({
        phone: this.phoneNum,
      });
      console.log(result);
      localStorage.setItem("token", result.result.token);
      this.$router.replace(this.redirect.redirect.redirect)
    },
  },

  watch: {
    phoneNum: function (val) {
      // console.log(1);
      this.phoneNum = val.replace(/\D/g, "");
      if (this.phoneNumreg.test(this.phoneNum)) {
        this.Numdisabled = false;
      } else {
        this.Numdisabled = true;
        this.Yzmdisabled = true;
      }
    },
    yzm: function (val) {
      if (this.yzmreg.test(this.yzm) && this.phoneNumreg.test(this.phoneNum)) {
        this.Yzmdisabled = false;
      } else {
        this.Yzmdisabled = true;
      }
    },
  },
};
</script>
<style lang='scss' >
.log-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  .van-nav-bar .van-icon {
    color: #000;
    font-size: 20px;
  }

  .van-nav-bar__title {
    font-size: 20px;
    font-weight: bold;
  }
  .msg {
    margin-top: 40px;
    position: relative;
    .van-cell {
      padding-left: 25px;
      height: 60px;
      font-size: 18px;
      display: flex;
      align-items: center;
    }
    .short {
      margin-top: 15px;
      width: 220px;
    }
    .van-button {
      position: absolute;
      right: 20px;
      bottom: 10px;
      width: 110px;
      height: 50px;
    }
  }
  .van-button {
    width: 340px;
    margin: 0 auto;
    margin-top: 30px;
  }
}
</style>
