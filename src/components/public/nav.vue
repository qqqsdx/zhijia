<template>
    <div class="public-nav">
        <van-nav-bar  :fixed="true" >
        <template #right>
            <van-icon name="search" size="18" />
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
}
</style>