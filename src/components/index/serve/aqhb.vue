<template>
  <div class="aqhb">
    <img src="../../../assets/img/anquanhuanbao.png" alt="">
    <div class="timber">
        <h3>关于用材</h3>
        <p>平台中80%的大件家具选用实木，家具使用天然木材，结实、耐用、绿色环保，不含人工添加剂,没有污染隐患。外观自然，纹理清晰，手感顺滑。</p>
    </div>
    <div class="timber">
        <h3>关于工艺</h3>
        <p>大件家具多为结实耐用的传统榫卯结构，小件类产品用金属五金件有效牢固链接，极大限度的减少产品用胶量，提高产品的环保度。</p>
        <div class="craft">
            <img src="../../../assets/img/gongyi1.png" alt="">
            <img src="../../../assets/img/gongyi2.png" alt="">
            <img src="../../../assets/img/gongyi3.png" alt="">
        </div>
    </div>
    <div class="timber">
        <h3>关于表面涂装</h3>
        <p>大件家具多为结实耐用的传统榫卯结构，小件类产品用金属五金件有效牢固链接，极大限度的减少产品用胶量，提高产品的环保度。</p>
    </div>
    <div class="timber">
        <h3>关于环保</h3>
        <p>平台在甄选家具类商家时均要求商家提供家具检测报告，家具类产品均达</p>
        <div class="envPro ">
          <table border="1">
            <tr>
              <td>
                <h3>环保等级</h3>
              </td>
              <td>
                <h3>甲醛释放量</h3>
              </td>
            </tr>
            <tr>
              <td>
                （欧盟标准）E0
              </td>
              <td>
                ≤0.3～0.5mg/L
              </td>
            </tr>
            <tr>
              <td>
                （国标）E1
              </td>
              <td>
                ≤1.5mg/L
              </td>
            </tr>
            <tr>
              <td>
                （国标）E2
              </td>
              <td>
                ≤5.0mg/L
              </td>
            </tr>
            <tr>
              <td>
                （日本）F4星级
              </td>
              <td>≤0.3mg/L</td>
            </tr>
        </table>
        </div>
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
  .aqhb{
    img{
      width: 100%;
      height: 151px;
    }
    .timber{
      width: 90%;
      min-height: 107px;
      margin: auto;
      margin-top: 30px;
      h3{
        font-size: 19px;
        color: #000000;
        margin-bottom: 36px;
      }
      p{
        color: #9FA2A9;
        font-size:12px;
        line-height: 14px;
      }
      .craft{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        margin: 33px 0;
        img{
          width: 100px;
          height: 100px;
        }
      }
      .envPro{
        width: 100%;
        height: 171px;
        margin: 30px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
          font-size:18px;
          margin: 0;
        }
        td{
          width: 145px;
          height: 34px;
          font-size: 15px;
          color: #ACAEB0;
          text-align: center;
        }
      }
    }
  }
</style>
