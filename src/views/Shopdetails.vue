<template>
<div class="shopdetails">
    <van-nav-bar  title="" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
            <van-icon name="cart-o" size="18" color="#000" />
        </template>
    </van-nav-bar>
    <div class="shopdetails-t">
        <van-swipe @change="onChange">
            <van-swipe-item v-for="(item,index) in list" :key="index">
                <img :src="item.url" alt="">
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                    {{ current + 1 }}/{{list.length?list.length:''}}
                    <span>商品图集></span>
                </div>
            </template>
        </van-swipe>
        <div class="favorable-price">
            <p>￥97.50</p>
            <div class="collect">
                <span class="iconfont icon-wujiaoxing"></span>
                <span class="iconfont icon-fenxiang_2"></span>
            </div>
        </div>
        <div class="marketprice">市场价￥195.50</div>
        <div class="title">豆袋懒人沙发|舒适坐感</div>
        <div class="serve">
            <a href="jacascript:;">·满59包邮</a>
            <a href="jacascript:;">·安装服务</a>
            <a href="jacascript:;">·闪电发货</a>
            <a href="jacascript:;">·贴心售后</a>
        </div>
        <div class="fashion" @click="tofashion">
            <p>款式选择</p>
            <span>10款可选</span>
            <i>></i>
        </div>
        <div class="introduction">
            <p>简介及参数</p>
            <span>尺寸·材质·风格</span>
            <i>></i>
        </div>
        <div class="match">
            <div class="match-t">
                <p>实景搭配</p>
                <span>3套搭配方案</span>
                <i>></i>
            </div>
            <nav>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.url" alt="">
                </li>
            </nav>
        </div>
    </div>
    <div class="art">
        <p><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg" alt=""></p>
        <div class="art-middle">
            <span>UVANART梵艺术</span>
            <i>上架商品685个</i>
        </div>
        <i>></i>
    </div>
    <div class="evaluate">
        <div class="evaluate-t">
            <p>评价嗮图</p>
            <span></span>
            <i>好评度 100.0%></i>
        </div>
        <nav>
            <li>
                <div class="username">
                    <div class="username-t">
                        <h2>
                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg" alt="">
                            <strong>朗朗</strong>
                        </h2>
                        <p>
                            <span class="iconfont icon-wujiaoxing"></span>
                            <span class="iconfont icon-wujiaoxing"></span>
                            <span class="iconfont icon-wujiaoxing"></span>
                            <span class="iconfont icon-wujiaoxing"></span>
                            <span class="iconfont icon-wujiaoxing"></span>
                        </p>
                    </div>
                    <div class="username-m">款式：xxl</div>
                    <div class="username-b">现代感真好</div>
                </div>
            </li>
            <van-button class="button-comment" hairline type="primary" block color="#fff" text="查看全部2条评论"></van-button>
        </nav>
    </div>
    <div class="shopdetails-b">
        <h2>你可能还喜欢</h2>
        <van-grid :border="true" :column-num="2">
            <van-grid-item v-for="(item,index) in 10" :key="index">
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <p>小户型单人沙发|休闲沙发躺 </p>
                <span>￥2554.19</span>
            </van-grid-item>
        </van-grid>
    </div>
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <!-- <van-goods-action-icon icon="shop-o" text="店铺" /> -->
        <van-goods-action-button color="#fff" style="color:#000;border-radius:0;height:100%" type="warning" text="立即购买" />
        <van-goods-action-button style="border-radius:0;height:100%" color="#000" type="danger" text="加入购物车" />
    </van-goods-action>
    <van-sku v-model="show" :sku="sku" :goods="goods"/>
</div>
</template>

<script>
export default {
    data() {
        return {
            back:true,
            current: 0,
            list: [{
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1223020141,2278979842&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985544075,2413291328&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1223020141,2278979842&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985544075,2413291328&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1223020141,2278979842&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985544075,2413291328&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1223020141,2278979842&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985544075,2413291328&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1223020141,2278979842&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985544075,2413291328&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1223020141,2278979842&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985544075,2413291328&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3769290051,364169408&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1223020141,2278979842&fm=26&gp=0.jpg'
                },
                {
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985544075,2413291328&fm=26&gp=0.jpg'
                },
            ],
            show: false,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [{
                    k: '颜色', // skuKeyName：规格类目名称
                    k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    v: [{
                            id: '1', // skuValueId：规格值 id
                            name: '红色', // skuValueName：规格值名称
                            imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                            previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                        },
                        {
                            id: '1',
                            name: '蓝色',
                            imgUrl: 'https://img.yzcdn.cn/2.jpg',
                            previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                        }
                    ],
                    largeImageMode: true, //  是否展示大图模式
                }],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [{
                    id: 2259, // skuId
                    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 110 // 当前 sku 组合对应的库存
                }],
                price: '1580.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [{
                    // // 商品留言
                    // datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                    // multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                    // name: '留言', // 留言名称
                    // type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                    // required: '1', // 是否必填 '1' 表示必填
                    // placeholder: '' // 可选值，占位文本
                }],
                hide_stock: true // 是否隐藏剩余库存
            },
            goods: {
                // 默认商品 sku 缩略图
                picture: 'https://img.yzcdn.cn/1.jpg'
            },
            messageConfig: {
                // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
                uploadImg: () => {
                    return new Promise((resolve) => {
                        setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
                    });
                },
                // 最大上传体积 (MB)
                uploadMaxSize: 3,
                // placeholder 配置
                placeholderMap: {
                    text: 'xxx',
                    tel: 'xxx',

                },
                // 初始留言信息
                // 键：留言 name
                // 值：留言内容
                initialMessages: {
                    // 留言: '留言信息'
                }
            },
        };
    },

    components: {
       
    },

    computed: {},

    mounted() {},

    methods: {
        tofashion() {
            this.show = true;
        },
        onChange(index) {
            this.current = index;
        },
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push('/car')
        }
    }
};
</script>

<style lang="scss">
.shopdetails {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;

    .shopdetails-t {
        width: 100%;
        padding: 0 20px;
        background-color: #fff;

        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.1);
        }

        .custom-indicator {
            padding: 8px 12px;
            border-radius: 16px;
            background-color: #ebedf0;

            span {
                margin-left: 5px;
            }
        }

        .van-swipe {
            height: 300px;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .favorable-price {
            padding-top: 10px;
            font-size: 22px;
            color: #000;
            display: flex;
            justify-content: space-between;

            .collect {
                span {
                    margin-left: 10px;
                }
            }
        }

        .marketprice {
            font-size: 12px;
            color: #ccc;
            padding: 10px 0;
        }

        .title {
            font-size: 18px;
            color: #000;
            font-weight: 700;
            padding-bottom: 30px;
        }

        .serve {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #f7f8fa;
            font-size: 12px;
            font-weight: 700;
            color: #000;
        }

        .fashion,
        .introduction,
        .match-t {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f7f8fa;
            width: 100%;
            font-size: 12px;
            padding: 20px 0;

            p {
                font-weight: 700;
                color: #000;
                width: 80px;
            }

            span {
                width: 250px;
            }

        }

        .brand {
            width: 100%;
            font-size: 12px;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 {
                color: #000;
            }

            p {
                margin-left: -50px;
            }
        }

        .match {
            width: 100%;
            border: 0;
            flex-direction: column;
            justify-content: space-around;
            padding-bottom: 20px;

            .match-t {
                border: 0;
            }

            nav {
                width: 100%;
                overflow: auto;
                display: flex;
                height: 70px;

                li {
                    flex-shrink: 0;
                    margin-left: 15px;
                    width: 140px;
                    height: 70px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

    }

    .art,
    .evaluate-t {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        padding: 10px 0;
        width: 100%;
        border-top: 5px solid #f7f8fa;
        border-bottom: 5px solid #f7f8fa;
        padding: 10px 15px;
        background-color: #fff;

        .art-middle {
            display: flex;
            flex-direction: column;
            width: 250px;
            height: 30px;
            justify-content: space-between;

            span {
                font-weight: 700;
            }
        }

        p {
            height: 30px;
            // width: 30px;
            display: flex;
            align-items: center;
            font-weight: 900;

            img {
                width: 30px;
                height: 100%;
            }
        }
    }

    .evaluate-t {
        border-top: 0;
        border-bottom: 1px solid #f7f8fa;
    }

    .evaluate {
        display: flex;
        width: 100%;
        flex-direction: column;
        border-bottom: 1px solid #f7f8fa;

        nav {
            width: 100%;
            background-color: #fff;
            padding: 0 15px;

            li {
                display: flex;
                flex-direction: column;
                width: 100%;

                background-color: #fff;
                border-bottom: 1px solid #dcdee0;
                padding-bottom: 10px;

                span {
                    font-size: 12px;
                }

                .username {

                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    font-size: 12px;

                    .username-t {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        strong {
                            font-size: 14px;
                        }

                        span {
                            font-size: 12px;

                        }

                        p {
                            font-size: 12px;

                            .iconfont {
                                color: yellow;
                            }
                        }

                        img {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                        }
                    }

                    .username-m {
                        padding: 10px 0;
                    }
                }

                .words {
                    display: inline-block;
                    margin: 10px 0;
                }

            }

            .button-comment {
                margin: 20px 0;
                color: #777 !important;
                border-color: #dcdee0 !important;
            }
        }

    }

    .shopdetails-b {
        border-top: 5px solid #f7f8fa;
        background-color: #fff;
        margin-bottom: 50px;

        h2 {
            font-size: 14px;
            padding: 10px 0 16px 10px;
        }

        .van-grid-item__content {
            height: 300px;
            font-size: 12px;

            p,
            span {
                width: 100%;
                text-align: left;
            }

            p {
                margin: 20px 0;
            }

            .van-image {
                width: 80px;
                height: 80px;
            }
        }

    }

    .van-goods-action {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 10;

        .van-button {
            margin: 0;
        }

        .van-button__content {
            border-top: 1px solid #f7f8fa;
            border-left: 1px solid #f7f8fa;
        }

        .van-goods-action-icon {
            border-top: 1px solid #f7f8fa;
            height: 40px;
        }
    }

}
</style>
