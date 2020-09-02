<template>
<div class="more">
    <van-nav-bar title="热门设计" left-arrow @click-left="onClickLeft" fixed />
    <ul class="list">
        <li>
            <div class="user">
                <div class="logo">
                  <img src="" alt="">
                </div>
                <p class="user-middle">
                    <span>至家新人_87046636</span>
                    <span>2月前</span>
                </p>
                <span class="user-right">+关注</span>
            </div>
            <!-- <Navlist :list="list" /> -->
        </li>
    </ul>
</div>
</template>

<script>
import Navlist from '../components/Show/Navlist'
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
        Navlist
    },

    computed: {},

    mounted() {},

    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }

    }
};
</script>

<style lang="scss">
.more {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
    // .van-nav-bar{
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    // }
}

.van-nav-bar .van-icon {
    color: #000;
}
</style>
