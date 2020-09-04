<template>
<div class="tab-main">
    <div>
    </div>
    <van-tabs v-model="active">
        <van-tab title="未使用">
            <div class="discount-main" v-for="(item,index) in 6" :key="index">
                <div class="main-top">
                    <div class="main-left">
                        <p>￥15</p>
                        <span>满49.00可用</span>
                    </div>
                    <div class="main-right">
                        <div>
                            <p>新人专享优惠券</p>
                            <p>有效期至 2020-09-19</p>
                        </div>
                        <div class="btn">去使用</div>
                    </div>
                </div>
                <div class="main-bottom" @click="onClick(index)" v-show="show2" :class="{active:isActive===index}">详细说明</div>
                <div class="main-bottom_one" v-show="show1" @click="onClickone(index)">新人专享优惠券</div>
            </div>

        </van-tab>
        <van-tab title="已使用">暂无优惠券</van-tab>
        <van-tab title="已过期">暂无过期优惠券</van-tab>

    </van-tabs>

</div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            show: false,
            show2: true,
            show1: false,
            isActive: 1

        };
    },
    methods: {
        onClick(index) {
            this.show2 = false;
            this.show1 = true
            console.log(index)
        },
        onClickone() {
            this.show2 = true;
            this.show1 = false

        }
    },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/style/a.css';

.tab-main {

    .discount-main {
        //优惠券整张外围
        width: 100%;
        margin-bottom: 15px;

        .main-top {
            //优惠券上面部分
            width: 100%;
            height: 104px;
            display: flex;
            flex-grow: 0;
            border-bottom: 1px solid #EDF1F4;

            .main-left {
                //优惠券左边部分
                width: 100px;
                height: 104px;
                background: #FFD801;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                >p {

                    font-size: 25px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: #000000;
                }

                >span {

                    font-size: 10px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #665700;
                }
            }

            .main-right {
                //优惠券右边"新人专享优惠券部分"
                width: 245px;
                height: 100%;
                background: #fff;
                display: flex;
                position: relative;
                padding: 10px 0px 10px 10px;

                div {
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    align-items: center;

                    p:nth-child(1) {

                        font-size: 12px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        color: #000000;
                    }

                    p:nth-child(2) {

                        font-size: 10px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #AAAAAA;
                    }
                }
            }

            .btn {
                //优惠券右边"去使用"按钮部分
                width: 71px;
                height: 25px;
                background: #FFD801;
                border-radius: 13px;
                text-align: center;
                line-height: 40px;
                position: absolute;
                right: 10px;
                top: 40px;
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: bold;
                color: #000000;

            }

        }

        //优惠券下面部分"详细说明"
        .main-bottom {
            width: 100%;
            height: 25px;
            line-height: 25px;
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #959595;
            text-align: center;
            background: #fff;
        }

        .main-bottom_one {
            width: 100%;
            height: 30px;
            font-size: 12px;
            line-height: 30px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #959595;
            text-align: center;
            background: #fff;
        }
    }
.van-tab__pane,
.van-tab__pane-wrapper {
    padding: 0px 15px;
}

.tab-main[data-v-8a3282de] {
    background: #f8f8f8;
}





.van-tab__pane,
.van-tab__pane-wrapper {
    position: fixed;
    top: 105px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
    background: #f8f8f8;
    padding-top: 15px;
}
}


</style>
