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
                <img src="../../assets/goods/themedetails/矩形 1.png" alt="">
                <p>住在小户型的你，怎么能少的了它们</p>
            </div>

            <div class="editor">
                <div class="editor-box">
                    <img src="../../assets/goods/themedetails/图层 2@2x.png" alt="">
                </div>
                <div class="editor-box1">
                    <img src="../../assets/goods/themedetails/组 2.png" alt="">
                </div>
                <div class="editor-box2">
                    <p>黑加仑</p>
                </div>
            </div>

            <div class="title-P">  
                你觉得进门至少需要一个鞋柜、换鞋凳、衣帽架，但自家<b>户型并没有独立玄关</b>。
            </div>

            <div class="title-Y">  
                你觉得客厅除了沙发和电视柜，至少还需要一个边几、落地灯、杂志架，但<b>除非砸墙否则根本摆不下这么多家具</b>。
            </div>

            <div class="title-S">  
                最终你忍痛放弃了无数的设想和规划，住进布置一新的家里，才发现最头疼的事来了：<b>东西似乎永远比空间多一点，随手一丢然后就再也找不到......</b>
            </div>

            <div class="title-S">  
                我们精选了8个家居单品，能够帮你省钱又省空间，住在小户型的你，快接好！
            </div>


            <div class="porch">
                <p class="title-1">玄关篇</p>
            </div>

            <div class="porch-content">
                <div class="title-AS">- 2 -</div>
                <div class="title-AW">一个可叠放的矮凳</div>
                <div class="title-AP">这组小矮凳看起来简洁大方，平时用作换鞋凳，放在玄关也不显拥挤。如果你喜欢在茶几边看电视边吃饭，那这样的矮凳可以多备几个。</div>
                <div class="img-IQ">
                    <img src="../../assets/goods/themedetails/图层 3.png" alt="">
                </div>
                <div class="title-AO">
                    日常不用的时候叠放起来，不会占用过多空间。
                </div>

                <div class="img-Iw">
                    <img src="../../assets/goods/themedetails/图层 4.png" alt="">
                </div>

                <div class="title-TL">
                    倒过来还能够作为收纳篮，特别适合在有客人到访之前，把家里的杂物收拾进去，然后找个地方藏起来，瞬间天下太平。
                </div>

                <div class="img-IJ">
                    <img src="../../assets/goods/themedetails/矩形 4.png" alt="">
                    <section>
                        <img src="../../assets/goods/themedetails/图层 5.png" alt="">
                    </section>
                    <aside>
                        <!-- <img src="../../assets/goods/themedetails/矩形 5.png" alt=""> -->
                        立即购买
                    </aside>
                    <div class="title-KK">
                        可叠放
                    </div>
                    <div class="title-PP">
                        储物小矮凳
                    </div>
                </div>

                <div class="BOX">
                    
                </div>
            </div>
        </div>


        <div class="comments">
            <!-- <img src="../../assets/goods/themedetails/矩形 6.png" alt="">   -->
            <!-- <van-icon name="eye-o" /> -->
            <!-- <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" /> -->
            <section>
                <span class="iconfont icon-fenxiang_2"></span>
            </section>
            <aside>
                <van-icon name="comment-o" />
            </aside>
            <article>
                <van-icon name="star-o" />
                99+
            </article>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
                // display: flex;
                // justify-content: center;
                // align-items: center;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                p{
                    height: 11px;
                    width: 180px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    font-size: 11px;
                    color: #A6A6A3;
                }
            }
            .editor{
                width: 343px;
                // height: 50px;
                // background: pink;
                position: relative;
                .editor-box{
                    float: left;
                    width: 35px;
                    height: 35px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .editor-box1{
                    margin-left: 5px;
                    float: left;
                    width: 48px;
                    height: 16px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .editor-box2{
                    position: absolute;
                    left: 40px;
                    top: 25px;
                    font-size: 11px;
                }
            }
            .title-P{
                margin-top: 45px;
                width: 343px;
                height: 39px;
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #545454;
                line-height: 24px;
            }
            .title-Y{
                margin-top: 40px;
                width: 343px;
                height: 63px;
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #545454;
                line-height: 24px;
            }
            .title-S{
                margin-top: 40px;
                width: 343px;
                height: 64px;
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #545454;
                line-height: 24px;
            }
            .title-M{
                margin-top: 40px;
                width: 333px;
                height: 39px;
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #545454;
                line-height: 24px;
            }


            .porch{
                width: 343px;
                border-left: 11px solid #FF9800;
                .title-1{
                    margin-left: 15px;
                    color: #FF9800;
                    font-size: 19px;
                }
            }
            .porch-content{
                margin-top: 25px;
                width: 343px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .title-AS{
                    width: 100%;
                    height: 13px;
                    text-align: center;
                    font-size: 13px;
                }
                .title-AW{
                    margin-top: 15px;
                    width: 152px;
                    height: 18px;
                    font-size: 19px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: #000000;
                    line-height: 24px;
                }
                .title-AP{
                    margin-top: 30px;
                    width: 343px;
                    height: 64px;
                    font-size: 15px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #545454;
                    line-height: 24px;
                }
                .img-IQ{
                    margin-top: 15px;
                    width: 343px;
                    height: 229px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .title-AO{
                    margin-top: 10px;
                    width: 296px;
                    height: 15px;
                    font-size: 15px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #545454;
                    line-height: 24px;
                    text-align: left;
                }
                .img-Iw{
                    margin-top: 15px;
                    width: 343px;
                    height: 210px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .title-TL{
                    margin-top: 15px;
                    width: 343px;
                    height: 63px;
                    font-size: 15px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #545454;
                    line-height: 24px;
                }
                .img-IJ{
                    margin-top: 80px;
                    width: 343px;
                    height: 117px;
                    position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    section{
                        width: 124px;
                        height: 124;
                        position: absolute;
                        left: 25px;
                        top: -30px;
                    }
                    aside{
                        width: 139px;
                        height: 30px;
                        position: absolute;
                        left: 164px;
                        top: 67px;
                        text-align: center;
                        line-height: 30px;
                        font-size: 14px;
                        background-image: url('../../assets/goods/themedetails/矩形 5.png');
                        background-size: 100%;
                        color: #fff;
                    }
                    .title-KK{
                        width: 49px;
                        height: 16px;
                        font-size: 16px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #000000;
                        line-height: 24px;
                        position: absolute;
                        top: 15px;
                        left: 164px;
                    }
                    .title-PP{
                        width: 82px;
                        height: 16px;
                        font-size: 16px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        color: #000000;
                        line-height: 24px;
                        position: absolute;
                        top: 38px;
                        left: 164px;
                    }
                }
                .BOX{
                    width: 343px;
                    height: 500px;
                }
            }
        }

        .comments{
            width: 358px;
            height: 58px;
            // background-image:url('../../assets/goods/themedetails/矩形 6.png');
            background: rgb(236, 234, 236);
            position: fixed;
            bottom: 34px;
            display: flex;
            font-size: 14px;
            section{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            aside{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            article{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>