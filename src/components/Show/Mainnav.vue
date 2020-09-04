<template>
<div class="design-navtop">
    <van-nav-bar :border="false" :title="middle" :left-text="title" :right-text="more+'>'" @click-right="onClickRight"/>
</div>
</template>

<script>
export default {
    props: {
        title: String,
        more: String,
        middle:String
    },
    data() {
        return {

        };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
        onClickRight() {
            this.$router.push('/moreall')
        }
    }
};
</script>

<style lang="scss">
.van-nav-bar__left {
    font-weight: 700;
    font-size: 22px;
}

.van-nav-bar__right {
    font-size: 12px;
}
</style>
