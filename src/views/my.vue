<template>
<div class="My-wrap">
    <div class="My-Wrap_top">
        <div class="top">
            <van-nav-bar left-text="我的" fixed placeholder />
            <img class="cart" src="http://adai.vip/images/wode/cart.png" alt=""><!--右上角购物车图标(定位)-->
        </div>
        <!--右边的是一个购物车图标 -->
        <div class="My-name">
            <div class="My-name_left">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>
            <div class="My-name_right">
                <h2>然而、然而</h2>
                <p>这个人很懒，什么也没说</p>
            </div>
        </div>
        <coupon />
        <!--优惠券部分-->
    </div>
    <div class="My-Wrap_main">
        <div class="order">
            <p>
                <span><img :src="order" alt=""></span>
                <span >我的订单</span>
            </p>
            <p>
                <span @click="onOrder()">全部订单</span>
                <span><img :src="arrow" alt="" ></span>
            </p>
        </div>
        <!--待付款待发货-->
        <van-grid>
            <van-grid-item :icon="item.icon" :text="item.event" v-for="(item,index) in wait" :key="index"
            :to="item.to" />

        </van-grid>
        <aftersale />

    </div>

</div>
</template>

<script>

import coupon from '../components/mypage/coupon'
import aftersale from '../components/mypage/aftersale'
//引入图标
import payment from '../assets/images/Payment.png' //待付款
import delivery from '../assets/images/delivery.png' //待发货
import receipt from '../assets/images/receipt.png' //待收货
import evaluation from '../assets/images/evaluation.png' //待评价
import cart from '../assets/images/cart.png' //购物车图标
import arrow from '../assets/images/arrow.png' //右箭头
import order from '../assets/images/order.png' //我的订单

export default {
    data() {
        return {
            active:0,
            wait: [{
                    icon: payment,
                    event: '待付款',
                    to:'/order/paid'
                },
                {
                    icon: delivery,
                    event: '待发货',
                     to:'/order/shipped'
                },
                {
                    icon: receipt,
                     event: '待收货',
                    to: '/order/received',
                },
                {
                    icon: evaluation,
                    event: '待评价',
                    to:'/order/evaluated'
                },
            ],
            cart,
            arrow,
            order,


        }
    },
    components: {
        coupon,
        aftersale,

    },
    methods:{
        onOrder(){
             this.$router.push('/order/all')
            
        },
        

    }
    
}
</script>

<style lang="scss">
.My-wrap {
       .My-Wrap_top {
        background: #EDDEDE;
        width: 100%;
        // height: 280px;
        overflow: hidden;
    }
    .cart{
            position: fixed;
            right: 22px;
            top :18px;
            z-index: 10;
        }
    .van-nav-bar {
        // background: transparent;
         background: #EDDEDE;
        height: 46px;
         //我的导航距离顶部的距离
    }

    .van-hairline--bottom::after {
        border-bottom-width: 0px; //取消导航默认底部边框
    }

    .van-nav-bar__left span {
        color: #000;
        font-size: 20px; //"我的"文字的大小
        font-family: PingFang-SC-Bold;
    }

    .My-name {
        width: 100%;
        height: 79px;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        .My-name_left {
            width: 79px;
            height: 79px;
            border-radius: 50%;
            background: pink;
            margin: 0px 11px 0px 22px;
        }

        .My-name_right {
            width: 265px;
            height: 100%;
            text-align: left;

            h2 {
                //用户名

                height: 16px;
                font-size: 17px;
                font-family: PingFang;
                font-weight: bold;
                color: #000000;
                margin-bottom: 13px;
                margin-top:20px
            }

            p {
                //用户说明   
                margin: 0;
                font-size: 14px;
                height: 13px;
                font-size: 13px;
                font-family: PingFang;
                font-weight: 500;
                color: #000000;
            }

        }
    }

    .My-Wrap_main {

        //我的订单
        .order {
            height: 65px;
            display: flex;
            padding: 0px 31px 0px 38px;
            justify-content: space-between;
            line-height: 65px; //垂直居中

            p,
            span {
                margin: 0;
                padding: 0;
            }

            p:nth-child(1) span:nth-child(2) {
                //选择order下第一个p中的第二个span    
                height: 14px;
                font-size: 15px;
                font-family: PingFang;
                font-weight: bold;
                color: #000000;
                margin-left: 17px;

            }

            p:nth-child(2) span:nth-child(1) {
                //选择order下第二个p中的第一个span
                height: 12px;
                font-size: 12px;
                font-family: PingFang;
                font-weight: 500;
                color: #000000;
                margin-right: 7px;
                margin-bottom: 1px;
            }
        }

        [class*=van-hairline]::after {
            border: none;
        }

    }

    .van-icon__image {
        width: 19px;
        height: 18px;
    }

    .van-grid-item__text {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
    }
}
</style>
