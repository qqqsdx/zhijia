<template>
    <div class="goodslist-container">
        <div class="nav">
            <div class="public-nav">
                <van-nav-bar  :fixed="true"  left-arrow @click-left="goback" placeholder>
                    <template #right>
                        <van-icon name="search" size="18" />
                    </template>
                    <template #title >
                        <!-- 导航左搜索框 -->
                        <van-search  placeholder="请输入搜索关键词" />
                    </template>
                </van-nav-bar>
            </div>
        </div>

        <div class="content">
            <van-tabs v-model="active">
                <van-tab title="全部"></van-tab>
                <van-tab title="单人沙发"></van-tab>
                <van-tab title="多人沙发"></van-tab>
                <van-tab title="双人沙发"></van-tab>
            </van-tabs>

            <ul>
                <li v-for="(item,index) in 3" :key="index" 
                @click="is=index"
                >
                    <p :class="{CG:is==index}"></p>
                    <span>综合排序</span>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            active: 1,
            is:0
         }
    },
    methods: {
        goback(){
            this.$router.go(-1)
        },
        changeColor(){
            console.log(1);
        }
    },
}
</script>



<style lang="scss">
.goodslist-container{
    .nav{
        width: 100%;
        height: 46px;
    }
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 99;
    .van-search{
            width: 277px;
            height: 35px;
            position: absolute;
            left: 35px;
            top: 8px;
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
            .van-nav-bar__left{
                .van-nav-bar__arrow{
                    color: black;
                    position: absolute;
                    left: 10px;
                    top: 15px;
                }
            }
        }
    .content{
        .van-tabs__line{
            background: #000;
        }
        ul{
            display: flex;
            li{
                width: 33.3%;
                height: 25px;
                // border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
                p{
                    width: 8px;
                    height: 8px;
                    border: 1px solid black;
                    border-radius: 50%;
                }
                .CG{
                    background: yellow;
                }
                span{
                    font-size: 12px;
                    margin-left: 5px;
                }
            }
        }
    }
}

</style>