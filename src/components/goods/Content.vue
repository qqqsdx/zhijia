<!-- 商品页内容 -->

<template>
        <div class="content">
            <section>
                <!-- 侧边导航 -->
                <van-sidebar v-model="activeKey" class="van-hairline--surround">
                    <van-sidebar-item 
                        v-for="(item,index) in leftList"
                        :key="index"
                        :title="item.title"
                        @click="is=index"
                        :class="{active:is===index}"
                    />
                </van-sidebar>

                <!-- 右边列表 -->
                <ul class="van-hairline--surround">
                    <aside class="van-hairline--surround">
                        <img src="" alt="">
                    </aside>
                    <li v-for="(item,index) in 10" :key="index" class="van-hairline--surround" @click="togoodslist">
                        <img src="" alt="">
                        <span>单人沙发</span>
                    </li>
                </ul>
            </section>
        </div>
</template>


<script>
// import {mapState} from "vuex"

export default {
    data() {
        return {
            activeKey:0,
            is:0,
            leftList:[
                {
                    title:'沙发'
                },
                {
                    title:'床'
                },
                {
                    title:'床品配件'
                },
                {
                    title:'家用凳椅'
                },
                {
                    title:'桌几好物'
                },
                {
                    title:'家居装饰'
                },
                {
                    title:'灯具推荐'
                },
                {
                    title:'餐厨用品'
                },
                {
                    title:'卫浴用品'
                },
                {
                    title:'收纳整理'
                },
                {
                    title:'生活电器'
                }
            ]
        }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
        change(index){
            this.is = index
        },
        togoodslist(){
            this.$router.push('/goodslist')
        }
    },
}
</script>


<style lang="scss">
.active{
    .van-sidebar-item__text{
    color: #000;
    font-size: 13px;
    }
}


.content{
        section{
            width: 100%;
            display: flex;
            .van-sidebar{
                width: 87px;
                .van-sidebar-item__text{
                    font-size: 12px;
                }
                .van-sidebar-item{
                    height: 50px;
                    color: #9DA0A7;
                    background: transparent;
                }
                .van-sidebar-item--select::before{
                    background-color: #ffffff;
                }
            }
        ul{
            width: 287px;
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            // background: pink;
            li{
                // background: red;
                width: 50%;
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                    width: 100px;
                    height: 100px;
                    border: 1px solid black;
                }
                span{
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                }
            }
            aside{
                width: 257px;
                height: 82px;
                margin-top: 21.6px;
            }
        }
    }
}
    
</style>