<!-- 商品页内容 -->

<template>
        <div class="content">
            <section>
                <!-- 侧边导航 -->
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="标签名称" 
                        v-for="(item,index) in 10"
                        :key="index"
                    />
                </van-sidebar>

                <!-- 右边列表 -->
                <ul>
                    <aside class="van-hairline--surround">
                        <img src="" alt="">
                    </aside>
                    <li v-for="(item,index) in 10" :key="index" class="van-hairline--surround">
                        <img src="" alt="">
                        <span>单人沙发</span>
                    </li>
                </ul>
            </section>
        </div>
</template>


<script>
export default {
    data() {
        return {
            activeKey:0
        }
    },
}
</script>


<style lang="scss">
.content{
        section{
            width: 100%;
            display: flex;
            .van-sidebar{
                width: 87px;
                .van-sidebar-item__text{
                    font-size: 12px;
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