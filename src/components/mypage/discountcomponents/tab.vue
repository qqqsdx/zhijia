<template>
<div class="tab-main">
    <div>
    </div>
    <van-tabs v-model="active">
        <van-tab title="未使用">
            <div class="discount-main" v-for="(item,index) in datum" :key="index">
                <div class="main-top">
                    <div class="main-left">
                        <p>￥{{item.denomination}}</p>
                        <span>满{{item. require}}可用</span>
                    </div>
                    <div class="main-right">
                        <div>
                            <p>{{item. type}}</p>
                            <p>有效期至 {{item. indate}}</p>
                        </div>
                        <div class="btn">去使用</div>
                    </div>
                </div>
                <div class="main-bottom" @click.stop="onClick(index)"  v-show="true" >详细说明</div>
                <div class="main-bottom_one" v-if="show ===index" @click="onClickone(item)" >{{item.explain}}</div>
            </div>

        </van-tab>
        <van-tab title="已使用">
            <div class="discount-main discount-main_used" v-for="(item,index) in used" :key="index">
                <div class="main-top">
                    <div class="main-left">
                        <p>￥{{item.denomination}}</p>
                        <span>满{{item. require}}可用</span>
                    </div>
                    <div class="main-right">
                        <div>
                            <p>{{item. type}}</p>
                            <p>有效期至 {{item. indate}}</p>
                        </div>
                        <div class="btn">已使用</div>
                    </div>
                </div>
                <div class="main-bottom" v-show="true" @click="onClick(index)"  >详细说明</div>
                <div class="main-bottom_one" v-if="show===index" @click="onClickone(index)">{{item.explain}}</div>
            </div>
            
           

        </van-tab>
        <van-tab title="已过期">
            <div class="discount-main discount-main_overdue" v-for="(item,index) in overdue" :key="index">
                <div class="main-top">
                    <div class="main-left">
                        <p>￥{{item.denomination}}</p>
                        <span>满{{item. require}}可用</span>
                    </div>
                    <div class="main-right">
                        <div>
                            <p>{{item. type}}</p>
                            <p>有效期至 {{item. indate}}</p>
                        </div>
                        <div class="btn">已过期</div>
                    </div>
                </div>
                <div class="main-bottom" @click="onClick(index)" v-show="true" >详细说明</div>
                <div class="main-bottom_one" v-if="show===index" @click="onClickone(index)">{{item.explain}}</div>
            </div>
            
               
</van-tab>

    </van-tabs>

</div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            show:-1,
            isActive: true,
            datum:[
                {
                    denomination:"15",  //面额
                    type:'新人专享优惠券',//类型
                    indate: '2020-09-19',//使用期限
                    explain:'新人专享优惠券',  //详细说明
                    require:'49.00',//满减要求金额
                                    },
                {
                    denomination:"25",  //面额
                    type:'新人专享优惠券',//类型
                    indate: '2020-09-19',//使用期限
                    explain:'新人专享优惠券',  //详细说明
                    require:'100.00',//满减要求金额
                                    },
                {
                    denomination:"70",  //面额
                    type:'新人专享优惠券',//类型
                    indate: '2020-09-19',//使用期限
                    explain:'新人专享优惠券',  //详细说明
                    require:'750.00',//满减要求金额
                                    },
                 {
                    denomination:"70",  //面额
                    type:'新人专享优惠券',//类型
                    indate: '2020-09-19',//使用期限
                    explain:'新人专享优惠券',  //详细说明
                    require:'750.00',//满减要求金额
                                    },
                 {
                    denomination:"70",  //面额
                    type:'新人专享优惠券',//类型
                    indate: '2020-09-19',//使用期限
                    explain:'新人专享优惠券',  //详细说明
                    require:'750.00',//满减要求金额
                                    },
                
            ],
            used:[
                {
                    denomination:"20",  //面额
                    type:'新人专享优惠券',//类型
                    indate: '2020-09-19',//使用期限
                    explain:'新人专享优惠券',  //详细说明
                    require:'49.00',//满减要求金额
                                    },
                
            ],
            overdue:[
                {
                    denomination:"200",  //面额
                    type:'新人专享优惠券',//类型
                    indate: '2020-08-19',//使用期限
                    explain:'新人专享优惠券',  //详细说明
                    require:'490.00',//满减要求金额
                                    },
                
            ],


        };
    },
    methods: {
        onClick(index) {
            this.show=index  
        },
        onClickone(index) {        
            this.show=false           
        }
    },
};
</script>

<style lang="scss" scope>
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
//已使用优惠券界面
.tab-main .discount-main_used .main-top .btn {
    background:#ddd;
}
//已过期优惠券面额颜色
.tab-main .discount-main_used .main-top .main-left{
    background:#ddd;

}


//已过期按钮颜色
.tab-main .discount-main_overdue .main-top .btn {
    background:#ccc;
}
//已过期优惠券面额颜色
.tab-main .discount-main_overdue .main-top .main-left{
    background:#ccc;

}

</style>
