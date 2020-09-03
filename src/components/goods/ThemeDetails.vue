<!--主题推荐-->

<template>
    <div class="themedetails-container">
        <div class="header">
            <van-nav-bar
                title="主题详情"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>


        <div class="content">
            <div class="img1">
                <img src="../../assets/goods/themedetails/header.png" alt="">
            </div>
            <p class="title">适合小户型的8个家居单品</p>
            <div class="img2">
                <!-- <img src="../../assets/goods/themedetails/矩形 1.png" alt=""> -->
                1111
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    },
}
</script>


<style lang="scss">
    .themedetails-container{
        .header{
            // width: 100%;
            // height: 50px;
            // background: pink;
            .van-icon{
                color: #000;
            }
            .van-ellipsis{
                color: #333333;
                font-size: 16px;
            }
        }
        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .img1{
                width: 100%;
                height: 185px;
                
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .title{
                margin-top: 30px;
                width: 219px;
                height: 18px;
                font-size: 18px;
                color: #333;
            }
            .img2{
                margin-top: 18px;
                width: 343px;
                height: 46px;
                background: url('../../assets/goods/themedetails/矩形 1.png');
            }
        }
    }
</style>