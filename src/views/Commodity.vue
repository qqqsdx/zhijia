<!-- 商品页 -->

<template>
    <div class="commodity-container">
        <div class="nav">
            <div class="public-nav">
                <van-nav-bar  :fixed="true" >
                    <template #right>
                        <van-icon name="search" size="18" />
                    </template>
                    <template #left>
                        <!-- 导航左搜索框 -->
                        <van-search  placeholder="请输入搜索关键词" />
                    </template>
                </van-nav-bar>
            </div>
        </div>


        <!-- Tab切换 -->
        <div class="tab">
            <van-tabs v-model="active" 
                color="black"
                @click="onChange"
            >
                <van-tab title="分类" class="font" ></van-tab>
                <van-tab title="主题" class="font"></van-tab>
            </van-tabs>
        </div>
        <router-view></router-view>
        

        <!-- <section>
            侧边导航
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="标签名称" 
                    v-for="(item,index) in 10"
                    :key="index"
                />
            </van-sidebar>

            右边列表
            <ul>
                <aside class="van-hairline--surround">
                    <img src="" alt="">
                </aside>
                <li v-for="(item,index) in 10" :key="index" class="van-hairline--surround">
                </li>
            </ul>
        </section> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            active: 0
            // activeKey:0,
            // List:[
            //     {
            //         title:'沙发'
            //     },
            //     {
            //         title:'床'
            //     },
            //     {
            //         title:'床品配件'
            //     },
            //     {
            //         title:'家用椅凳'
            //     },
            // ]
        }
    },
    methods: {
        onChange(name){
            
            if(name==0){
                this.$router.push('/commodity/content')
            }
            if(name==1){
                this.$router.push('/commodity/theme')
            }
        },
        
    },
    
}
</script>


<style lang='scss'>
.commodity-container{
        .nav{
        width: 100%;
        height: 30px;
        .van-search{
            width: 277px;
            height: 35px;
        }
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
    }
    .tab{
        .van-tab__text{
            font-size: 14px;
        }
        .van-tabs__line{
            border-radius: none;
        }
        .van-tabs__nav{

        }
    }
}





</style>