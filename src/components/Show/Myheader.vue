<template>
<div class="header">
<van-nav-bar title="" left-text="SHOW" :border="false" fixed>
        <template #right>
            <van-icon name="cart-o" size="18" color="#000" />
        </template>
    </van-nav-bar>
</div>
    
</template>

<script>
export default {
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

<style lang="scss" >
.header {
    width: 100%;
    height: 50px;
    z-index: 10;
}

.van-nav-bar__text {
    color: #000;
    font-size: 16px;
}
</style>
