<template>
<nav class="design-navlist" :class="{design: der===1,inspiration:der===0}">
    <li v-for="(item,index) in list" :key="index">
        <div class="pic"><img :src="item.url" alt=""></div>
        <span class="title">气质与品味共存的空间</span>
        <p>
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

    methods: {}
};
</script>

<style lang="scss">
.design-navlist {
    width: 100%;

    li {
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .title {
            font-size: 12px;
            color: #000;
        }

        img {
            width: 100%;
            height: 100%;
        }

        p {
            display: flex;
            justify-content: space-around;

            .iconfont {
                color: #ccc;
                font-size: 14px;
            }
        }
    }
}

.design {
    display: inline-flex;
    overflow: auto;

    .pic {
        width: 100%;
        height: 157px;
    }

    li {
        width: 313px;
        flex-shrink: 0;
        margin-left: 18px;
    }
}

.inspiration {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    li {
        height: 400px;
        width: 100%;
        border-bottom: 1px solid #ccc;

        .pic {
            width: 313px;
            height: 300px;
            margin: 0 auto;
        }

        .title {
            width: 313px;
            margin: 0 auto;
        }

        img {
            width: 313px;
        }
    }
}
</style>
