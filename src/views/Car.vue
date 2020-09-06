<template>
<div class="car">
    <van-nav-bar title="购物车" right-text="领券" fixed left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-card :num="num" price="1580.00" desc="款式：黑色 " title="现代简约实木藤编背休闲椅" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #tags>
            <van-tag plain type="danger">规格:57cm*71cm*72cm</van-tag>
            <!-- <van-tag plain type="danger">标签</van-tag> -->
        </template>
        <template #footer>
            <van-button size="mini" @click="subtract">-</van-button>
            <input type="text" value="1">
            <van-button size="mini" @click="add">+</van-button>
        </template>
    </van-card>
    <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <!-- <template #tip>
            你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
        </template> -->
    </van-submit-bar>
</div>
</template>

<script>
export default {
    data() {
        return {
            num: 0,
            checked:''
        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight() {
            Toast('按钮');
        },
        add() {
            let input = document.querySelector('input');
            this.num = input.value;
            this.num++;
            input.value = this.num;
        },
        subtract() {
            let input = document.querySelector('input');
            this.num--;
            if (this.num < 0) {
                this.num = 0
            }
            input.value = this.num
        },
        onSubmit(){

        }
    },
};
</script>

<style lang="scss" scoped>
.car {
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 50px;

    .van-card {
        background-color: #fff;

        input {
            width: 20px;
            border: 0;
            text-align: center;
        }
    }

}
</style>
