<template>
    <div class="public-nav">
        <van-nav-bar  :fixed="true" >
            <template #right>
                <img src="../../assets/img/gouwuche.png" alt="">
            </template>
            <template #left>
                <!-- 导航左搜索框 -->
                <van-search  placeholder="请输入搜索关键词"  />
            </template>
        </van-nav-bar>
    </div>
</template>
<style lang='scss' scoped>
.public-nav{
    .van-search{
        padding-left: 0;
        background: none;
        .van-field__left-icon{
            .van-icon{
                color: #969799;
            }
        }
    }
    .van-search{
        width: 277px;
    }
    .van-nav-bar__right{
    img{
        width: 16px;
        height: 16px;
    }
    }
}
</style>