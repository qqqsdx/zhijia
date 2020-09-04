<template>
<nav class="design-navlist" :class="{design: der===1,inspiration:der===0}">
    <li v-for="(item,index) in list" :key="index">
        <img class="pic" :src="item.url" alt="" @click="todetails">
        <span class="title">气质与品味共存的空间</span>
        <p class="comment">
            <span class="iconfont icon-fenxiang_2">分享</span>
            <span class="iconfont icon-aixin">30</span>
            <span class="iconfont icon-pinglun_huabanfuben">3</span>
        </p>
    </li>
</nav>
</template>

<script>
export default {
    props: {
        der: Number,
        list: Array
    },
    data() {
        return {

        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        todetails(){
            this.$router.push('/Showdetails')
        }
    }
};
</script>

<style lang="scss">
// 热门设计 精选灵感公共样式
.design-navlist {
    width: 100%;

    li {
        display: flex;
        flex-direction: column;

        .title {
            font-size: 12px;
            color: #000;
        }

        .comment {
            display: flex;
            justify-content: space-around;

            .iconfont {
                color: #ccc;
                font-size: 14px;
            }
        }
    }
}
// 热门设计 
.design {
    display: inline-flex;
    overflow: auto;

    li {
        justify-content: space-around;
        height: 250px;
        margin-bottom: 20px;
    }

    .pic {
        width: 100%;
        height: 157px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    li {
        width: 313px;
        flex-shrink: 0;
        margin-left: 18px;
    }
}
// 精选灵感
.inspiration {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    li {
        padding-top: 20px;
        width: 100%;
        border-bottom: 1px solid #ccc;

        .pic {
            width: 313px;
            margin: 0 auto;
        }

        .title {
            width: 313px;
            margin: 10px auto 0;
        }

        .comment {
            margin: 20px 0;
        }

        img {
            width: 313px;
        }
    }
}
</style>
