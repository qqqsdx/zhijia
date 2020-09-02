<template>
    <div class="choiceness">
        <h3>精选体验家</h3>
        <div class="choiceness-top">
            <img src="../../assets/img/jxzhijia.png" alt="">
        </div>
        <van-swipe @change="onChange" :loop='false' :show-indicators='false' :width="152">
            <van-swipe-item v-for="(item, index) in slideImg" :key="index">
                <img :src="item.img">
                <div class="title">{{item.title}}</div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slideImg:[
        {
            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=919663030,1946386614&fm=26&gp=0.jpg',
            title:'人生不一定单调',
        },
        {
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2496186521,2393687524&fm=26&gp=0.jpg',
            title:'人生不一定单调',
        },
        {
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3520981349,3793838560&fm=26&gp=0.jpg',
            title:'人生不一定单调',
        },
        {
            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2633066983,272223045&fm=26&gp=0.jpg',
            title:'人生不一定单调',
        },
        {
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2424542906,3388794067&fm=26&gp=0.jpg',
            title:'人生不一定单调',
        }
      ]
        }
    },
    methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>
<style lang='scss' scoped>
.choiceness{
    width: 100%;
    position: relative;
    h3{
        padding-left: 10%;
        text-align: left;
        line-height: 30px;
        font-size: 24px;
    } 
    .choiceness-top{
        width: 80%;
        height: 105px;
        border-radius: 10px;
        margin-top: 8px;
        margin: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .van-swipe{
        margin-top: 10px;
        height:105px;
        padding-left: 9%;
        padding-right: 9%;
        img{
            width: 95%;
            height: 80%;
            margin: 0;
        }
        .title{
            width: 95%;
            padding-left: 15px;
            height: 10%;
            margin: 0;
            text-align: left;
            font-size: 14px;
        }
        span{
            float: left;
            margin-left: 15px;
            text-align: left;
            font-size: 12px;
            color: #F5f5f5;
        };
    }
    .custom-indicator {
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 2px 5px;
    font-size: 16px;
    }
}

</style>