<template>
<div>
    <Mytitle />
    <!--类别-->
    <!--遮罩部分-->
    <div class="help">
        <van-button type="primary" text="?" @click="show = true" />
        <van-overlay :show="show" @click="show = false">

            <div class="wrapper" @click="show = false">
                <div class="help-main">
                    <!-- 头部 -->
                    <h2>优惠券使用说明</h2>
                    <div class="rule">
                        <p>1、优惠券面额大于支付金额,差额不找零,不退还.</p>
                        <p>2、没张优惠券仅能使用一次,不支持同时使用多张.</p>
                        <p>3、优惠券有品类,品牌及金额的限制,需要在对应的限制内才可使用;每张优惠券的使用条件请查看对应的优惠券详细说明.</p>
                        <p>4、优惠券有品类,品牌及金额的限制,需要在对应的限制内才可使用;每张优惠券的使用条件请查看对应的优惠券详细说明.</p>
                        <p>5、优惠券有品类,品牌及金额的限制,需要在对应的限制内才可使用;每张优惠券的使用条件请查看对应的优惠券详细说明.</p>
                    </div>
                    <div class="btnn">知道了</div>

                </div>

            </div>
        </van-overlay>

    </div>
    <Mytab />
    <!--tab切换-->
</div>
</template>

<script>
import Mytitle from '../discountcomponents/title'
import Mytab from '../discountcomponents/tab'
export default {
    data() {
        return {
            show: false

        }
    },
    components: {
        Mytitle,
        Mytab,

    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.help-main {
    width: 300px;
    height: 400px;
    background-color: #fff;

    h2 {
        width: 100%;
        height: 35px;
        font-size: 14px;
        text-align: center;
        line-height: 35px;
        font-weight: 500;
        margin-bottom: 15px;
        border-bottom: 1px solid #ccc;
    }

    .rule {
        height: 280px;
        padding: 0px 20px;
      

        p {
            width: 100%;
            font-size: 14px;
            margin-bottom: 15px;
            ;

        }
    }

    .btnn {
        width: 260px;
        height: 45px;
        background: #FFD801;
        position: relative;
        bottom: -10px;
        left: 20px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        line-height: 40px;
    }

}
.van-button--primary {
    width: 20px;
    height: 20px;
    border-radius: 50% 50%;
    border: 1px solid #000;
    background: #fff;
    color: #000;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 2;
}
.van-button--normal {
    padding: 0;
}


</style>
