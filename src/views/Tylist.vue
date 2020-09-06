<template>
  <div class="tylist">
    <van-nav-bar
    left-text=""
    left-arrow
    @click-left="onClickLeft" />
    <div class="collect">
        <img :src="img1" alt="" class="xin">
        <img :src="img2" alt="">
    </div>
   <titles />
    <lists />
  </div>
</template>

<script>
// 引入图片
import d1 from '../assets/images/d1.png'
import d2 from '../assets/images/d2.png'
import lists from '../components/Tylist/list'
import titles from '../components/Tylist/title'
export default {
  data() {
    return {
        img1:d1,
        img2:d2,
    };
  },

  components: {
    titles,
    lists
  },

  computed: {},

  mounted() {},

  methods: {
      onClickLeft(){
           this.$router.go(-1)
      }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/style/a.css";
.tylist{
    position: absolute;
    left: 21px;
    right: 21px;
    top: 0;
    bottom: 0;
    .collect{
        position: absolute;
        right: 0;
        top: 50px;
        z-index: 10;
        .xin{
            width: 18px;
            height: 17px;
        }
        img{
            width: 14px;
            height: 14px;
            margin-left: 20px;
        }
    }
 
    
}
</style>
