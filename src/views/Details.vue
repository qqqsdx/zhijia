<template>
<div class="details">
    <van-nav-bar title="设计详情" left-arrow @click-left="onClickLeft">
        <template #right>
            <van-icon name="cart-o" size="18" color="#000" />
        </template>
    </van-nav-bar>
    <div class="pic">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg" alt="">
    </div>
    <div class="user">
        <div class="logo"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg" alt=""></div>
        <p class="user-middle">
            <span>至家新人_87046636</span>
            <span>2月前</span>
        </p>
        <span class="user-right">+关注</span>
    </div>
    <span class="title">气质与品味共存的空间</span>
    <p class="comment">
        <span class="iconfont icon-fenxiang_2">分享</span>
        <span class="iconfont icon-aixin">点赞</span>
        <span class="iconfont icon-pinglun_huabanfuben">评论</span>
    </p>
    <section>
        <h3>可购买商品</h3>
        <van-grid :border="true" :column-num="2">
            <van-grid-item v-for="(item,index) in 10" :key="index" class="  
            customize">
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="img" @click="tocart" />
                <span>￥164.00</span>
            </van-grid-item>
        </van-grid>
    </section>
    <div class="discuss">
        <h2>评论</h2>
        <nav>
            <li>
                <div class="username">
                    <p>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg" alt="">
                        <strong>朗朗</strong>
                    </p>
                    <span>3月前</span>
                </div>
                <span class="words">现代感真好</span>
            </li>
        </nav>
        <van-button class="button-comment" hairline type="primary" block color="#fff" text="查看全部2条评论"></van-button>
        <div class="footer">
            <van-field v-model="sms" center clearable placeholder="写下你的评论">
                <template #button>
                    <van-button size="small" type="primary">发布</van-button>
                </template>
            </van-field>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            sms: ''
        };
    },

    components: {

    },

    computed: {},

    mounted() {},

    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        tocart() {
            this.$router.push('/cart')
        }
    }
};
</script>

<style lang="scss">
.details {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    .pic {
        width: 100%;

        img {
            width: 100%;
            height: 157px;
        }
    }

    .user {
        width: 100%;
        height: 37px;
        display: flex;
        align-items: center;
        font-size: 13px;
        margin-bottom: 10px;
        padding: 20px 31px 0;

        .logo {
            width: 37px;
            height: 37px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .user-middle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 11px;
            height: 100%;
            width: 205px;
        }

        .user-right {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFAD00;
            font-weight: bold;
            flex: 1;
            width: 71px;
            height: 27px;
            background: #FFF5DA;
        }
    }

    .title {
        width: 124px;
        height: 12px;
        font-size: 13px;
        font-weight: 500;
        color: #000000;
        margin: 10px 31px 0;
    }

    .comment {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;

        span {
            font-size: 13px;
        }
    }

    section {
        width: 100%;

        h3 {
            padding: 20px;
            font-size: 16px;
        }

        .customize {
            background-color: #999;
            height: 300px;
        }

        .img {
            width: 50px;
            height: 80px;
            margin-bottom: 60px;
        }

        span {
            font-size: 14px;
            margin-left: -90px;
        }
    }

    .discuss {
        background-color: #fff;
        width: 100%;
        padding: 0 31px 20px;
        margin-bottom: 53px;

        h2 {
            font-size: 16px;
            padding: 20px 0;
        }

        nav {
            width: 100%;

            li {
                display: flex;
                flex-direction: column;
                width: 100%;

                span {
                    font-size: 12px;
                }

                .username {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    p {
                        display: flex;
                        align-items: center;

                        strong {
                            font-size: 14px;
                        }

                        span {
                            font-size: 12px;
                        }

                        img {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                        }
                    }
                }

                .words {
                    display: inline-block;
                    margin: 10px 0;
                }
            }
        }

        .button-comment {
            color: #777 !important;
            border-color: #777 !important;
        }

    }

    .footer {
        width: 100%;
        background-color: #fff;
        padding: 10px 0;
        border-top: 1px solid #ccc;
        position: fixed;
        bottom: 0;
        left: 0;

        .van-cell {
            padding: 0 20px;

            .van-field__control {
                background-color: #f2f3f5;
                padding-left: 10px;
                height: 30px;
            }

            .van-button--primary {
                background-color: #fff;
                color: #ccc;
                border: 0;
            }
        }

    }

}
</style>
