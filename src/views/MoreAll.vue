<template>
<div class="more-all">
    <van-nav-bar title="" left-arrow @click-left="onClickLeft" fixed />
    <ul class="list">
        <li v-for="(item,index) in list" :key="index">
            <div class="user">
                <div class="logo"><img :src="item.url" alt=""></div>
                <p class="user-middle">
                    <span>至家新人_87046636</span>
                    <span>2月前</span>
                </p>
                <span class="user-right">+关注</span>
            </div>
            <img class="pic" :src="item.url" alt="">
            <span class="title">气质与品味共存的空间</span>
            <p class="comment">
                <span class="iconfont icon-fenxiang_2">分享</span>
                <span class="iconfont icon-aixin">点赞</span>
                <span class="iconfont icon-pinglun_huabanfuben">评论</span>
            </p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
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

    components: {

    },

    computed: {},

    mounted() {
       
    },

    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }

    }
};
</script>

<style lang="scss">
.more-all {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;

    .van-nav-bar .van-icon {
        color: #000;
    }

    .list {
        width: 100%;
        background-color: #fff;

        li {
            width: 100%;
            padding: 40px 31px 0;
            border-bottom: 1px solid #ccc;

            .user {
                width: 100%;
                height: 37px;
                display: flex;
                align-items: center;
                font-size: 13px;
                margin-bottom: 10px;

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

            .pic {
                width: 313px;
            }

            .pic {
                width: 313px;
                margin: 0 auto;
            }

            .title {
                width: 124px;
                height: 12px;
                font-size: 13px;
                font-weight: 500;
                color: #000000;
                margin: 10px auto 0;
            }

            .comment {
                display: flex;
                justify-content: space-around;
                margin: 20px 0;

                span {
                    font-size: 13px;
                }
            }
        }
    }
}
</style>
