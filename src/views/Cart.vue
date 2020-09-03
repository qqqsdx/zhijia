<template>
<div class="cart">
    <van-nav-bar title="" left-arrow @click-left="onClickLeft">
        <template #right>
            <van-icon name="cart-o" size="18" color="#000" />
        </template>
    </van-nav-bar>
    <div class="cart-t">
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
        <div class="fashion">
            <p>款式选择</p>
            <span>10款可选</span>
            <i>></i>
        </div>
        <div class="introduction">
            <p>简介及参数</p>
            <span>尺寸·材质·风格</span>
            <i>></i>
        </div>
        <div class="brand">
            <h2>简介及参数</h2>
            <p>
                <span>Perch栖息</span>
                <span>上架商品134个</span>
            </p>
            <i>></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
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
            ]
        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        onChange(index) {
            this.current = index;
        },
        onClickLeft() {
            this.$router.go(-1)
        }
    }
};
</script>

<style lang="scss">
.cart {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .cart-t {
        width: 100%;
        padding: 0 20px;

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
        }

        .favorable-price {
            margin-top: 10px;
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
            margin: 10px 0;
        }

        .title {
            font-size: 18px;
            color: #000;
            font-weight: 700;
        }

        .serve {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 30px;
            background-color: #ebedf0;
            font-size: 12px;
            font-weight: 700;
            color: #000;
        }

        .fashion,
        .introduction {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            width: 100%;
            font-size: 12px;
            height: 50px;

            p {
                font-weight: 700;
                color: #000;
            }

            span {
                margin-left: -150px;
            }

        }
        .brand{
            width: 100%;
            font-size: 12px;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2{
                color: #000;
            }
            p{
               margin-left: -50px; 
            }
        }

        .introduction {
            border: 0;
        }
    }

}
</style>
