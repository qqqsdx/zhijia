<template>
  <div class="seek">
    <van-nav-bar  :fixed="true" right-text="取消" @click-right='goto'>
        <template #left>
            <!-- 导航左搜索框 -->
            <van-search  placeholder="请输入搜索关键词" @focus.stop="show = true" @blur="show = false" v-model="value"/>
        </template>
    </van-nav-bar>
    <van-number-keyboard
        :show="show"
        v-model="value"
    />
    <div class="hot">
        <h3>热门搜索</h3>
        <div class="hots">
            <a href="javascript:;" v-for="(item, index) in hotsList" :key="index">{{item}}</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        hotsList:['木泽','沙发','电视柜','头层牛皮','四件套'],
        show: false,
        value:'',
        btns:[]
    };
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    goto(){
        this.$router.go(-1)
    }
  }
};
</script>
<style lang='scss' scoped>
.seek{
    width: 100%;
    height: 100%;
    padding-top: 46px;
    .van-search{
        padding-left: 0;
        background: none;
        .van-field__left-icon{
            .van-icon{
                color: #969799;
            }
        }
    }
    .van-search{
        width: 277px;
    }
    .hot{
        width: 90%;
        height: 100%;
        margin: auto;
        padding-top: 30px;
        h3{
        padding-left: 10px;
        text-align: left;
        line-height: 30px;
        font-size: 19px;
        margin-bottom: 22px;
        }
        .hots{
            width: 100%;
            a{
                display: block;
                float: left;
                width: 50%;
                padding-left: 10px;
                font-size: 15px;
                margin-bottom: 12px;
            }
        }
    }
}
</style>
