<template>
    <div class="slideimg">
        <h3>{{titles}}</h3>
        <div class="slide-img">
            <van-swipe @change="onChange" :loop='false' :show-indicators='false' :width="300">
            <van-swipe-item v-for="(item, index) in slideImg" :key="index">
                <img :src="item.img">
                <div class="title">{{item.title}}</div>
                <span>{{item.tex}}</span>
            </van-swipe-item>
            <div class="qqq" v-if="current==5"></div>
            </van-swipe>
            <template >
                <div class="custom-indicator">
                <i>{{ current + 1 }}</i>/5
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
  props:{
    titles:String
  },
  data() {
    return {
      current: 0,
      slideImg:[
        {
            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=919663030,1946386614&fm=26&gp=0.jpg',
            title:'CODA床 | 黑金色调',
            tex:'中性风格 | 奢品触感 | 质感鲜明'
        },
        {
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2496186521,2393687524&fm=26&gp=0.jpg',
            title:'芒果木电视柜 | 水泥嵌铜',
            tex:'现代简约风格 | 便于散热 | 开放式层架'
        },
        {
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3520981349,3793838560&fm=26&gp=0.jpg',
            title:'百搭布艺沙发 | 双面可拆洗',
            tex:'百搭布艺沙发 | 双面可拆洗 '
        },
        {
            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2633066983,272223045&fm=26&gp=0.jpg',
            title:'储物收纳化妆桌 | 亚克力...',
            tex:'存储空间大 | 承重稳固耐用 | 美观实用'
        },
        {
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2424542906,3388794067&fm=26&gp=0.jpg',
            title:'镜子置物盒 | 小清新收纳盒',
            tex:'轻松拿取 | 智能双控 | 舒适把手'
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>
<style lang='scss' scoped>
.slideimg{
    width: 100%;
    position: relative;
    margin-top: 40px;
    h3{
        padding-left: 8%;
        text-align: left;
        line-height: 30px;
        font-size: 19px;
        margin-bottom: 32px;
        color: #000;
    } 
    .qqq{
      width: 15%;
      height: 100%;
    }  
    .slide-img{    
    height: 180px;
    .van-swipe{
        height: 100%;
        padding-left: 9%;
        padding-right: 9%;
        img{
            width: 95%;
            height: 80%;
            margin: 0;
        }
        .title{
            width: 95%;
            padding-left: 7px;
            height: 10%;
            margin: 0;
            text-align: left;
            font-size: 14px;
        }
        span{
            float: left;
            margin-left: 7px;
            text-align: left;
            font-size: 12px;
            color: #C6C6C8;
        };
    }
    .custom-indicator {
    position: absolute;
    right: 8%;
    top: 5px;
    padding: 2px 5px;
    font-size: 16px;
    color: #A8A8AA;
    i{
      font-size: 20px;
      color: #000;
    }
    }
  }
}

</style>