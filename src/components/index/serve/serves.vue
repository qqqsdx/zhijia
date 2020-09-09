<template>
  <div class="serves">
    <van-nav-bar title="至家服务" left-arrow @click-left="goto" :fixed="true" />
    <main :class="{'sjfss':id==0}">
      <div>
        <van-tabs
          v-model="id"
          title-active-color="#000"
          line-width="55"
          color="#000"
          :swipeable="true"
          :animated="true"
          offset-top="46"
          :sticky="true"
        >
          <van-tab title="设计服务">
            <Sjfw />
          </van-tab>
          <van-tab title="免费送装">
            <Mfsz />
          </van-tab>
          <van-tab title="质量保证">
            <Zlbz />
          </van-tab>
          <!-- 安全环保模块 -->
          <van-tab title="全球环保">
            <Aqhb />
          </van-tab>
        </van-tabs>
      </div>
      <div class="sjserve" v-if="id==0">
        <div class="width90">
          <h3>我需要设计服务</h3>
          <van-field center clearable placeholder="怎么称呼">
            <template #button>
              <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">先生</van-radio>
                <van-radio name="2">女生</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <input type="text" placeholder="联系方式 （11位电话号码）">
          <input type="text" placeholder="装修地址 （精确到省/市/区）">
          <van-button type="primary" color='#666' block>发送给设计师</van-button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Aqhb from "./aqhb";
import Sjfw from "./sjfw";
import Mfsz from "./mfsz";
import Zlbz from "./zlbz";
export default {
  data() {
    return {
      id: "1",
      radio: "1",
    };
  },
  components: {
    Aqhb, //安全环保组件
    Sjfw, //设计服务组件
    Mfsz, //免费送装
    Zlbz, //质量保证
  },
  computed: {
    serveId() {
      return this.$store.state.serveId;
    },
  },
  methods: {
    qqq(id) {
      this.id = this.$route.params.id;
    },
    goto() {
      this.$router.go(-1);
    },
  },
  beforeMount() {
    // this.$store.commit('setServeId',10)
    this.qqq();
  },
};
</script>

<style lang='scss' scoped>
.serves {
  main {
    position: absolute;
    left: 0;
    right: 0;
    top: 46px;
    bottom: 0px;
    overflow: auto;
  }
  .sjfss{
    bottom: 240px;
  }
  main::-webkit-scrollbar {
    display: none;
  }
  .sjserve {
    width: 100%;
    height: 240px;
    position: fixed;
    bottom: 0px;
    border-top: 1px solid #f5f5f5;
    background: #ffffff;
    .width90 {
      width: 90%;
      padding-top: 10px;
      margin: auto;
      h3 {
        font-size: 16px;
        color: #000;
      }
      input{
        padding: 8px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
  .van-cell{
    padding: 0;
  }
}
</style>
