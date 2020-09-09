<template>
    <div class="public-nav">
        <van-nav-bar  :fixed="true" >
            <template #right>
                <img src="../../assets/img/gouwuche.png" alt="">
            </template>
            <template #left>
                <!-- 导航左搜索框 -->
                <van-search @focus='linkseek'  placeholder="搜索你想要的"  />
            </template>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    methods:{
        linkseek(){
            this.$router.push({
                path:`/index/seek`
            })
        }
    }
}
</script>
<style lang='scss' scoped>
.public-nav{
    .van-search{
        padding-left: 0;
        background: none;
        width: 277px;
        .van-field__left-icon{
            .van-nav-bar .van-icon{
                color: #969799;
            }
        }
    }
    .van-nav-bar__right{
    img{
        width: 16px;
        height: 16px;
    }
    }
}
</style>