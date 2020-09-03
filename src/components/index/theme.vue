<template>
    <div class="theme">
        <h3>主题推荐</h3>
        <div class="theme-recommend">
            <div class="recommends" v-for="(item, index) in zhutiList" :key="index">
                <div class="recommends-left">
                    <img :src="item.left.imgs" alt="">
                    <div class="recommends-left-name">
                        <h5>{{item.left.name}}</h5>
                        <span>{{item.left.ename}}</span>
                    </div>
                </div>
                <div class="recommends-right">
                    <img :src="item.right.imgs" alt="">
                    <div class="recommends-right-name">
                        <h5>{{item.right.name}}</h5>
                        <span>{{item.right.ename}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getcomClassList} from '../../utils/api'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        zhutiList () {
            return this.$store.state.zhutiList
        }
    },
    mounted() {
        this.$store.dispatch('getComClassLists')
    },
}
</script>
<style lang='scss' scoped>
.theme{
    width: 90%;
    margin: 0 auto;
    h3{
        padding-left: 10px;
        text-align: left;
        line-height: 30px;
        font-size: 19px;
        margin-bottom: 32px;
    }
    .theme-recommend{
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .recommends{
            width: 100%;
            height: 20%;
            display: flex;
            .recommends-left{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                border-right: 1px solid #f5f5f5;
                img{
                    width: 57px;
                    height: 35px;
                    margin-left: 24px;
                }
                .recommends-left-name{
                    width: 100%;
                    height: 90%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    h5{
                        margin: 0;
                        font-size: 16px;
                        text-align: center;
                    }
                    span{
                        margin-top: 2px;
                        font-size: 12px;
                        color: #A4A2AA;
                        text-align: center;
                    }
                }
            }
            .recommends-right{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                img{
                    width: 57px;
                    height: 35px;
                    margin-left: 24px;
                }
                .recommends-right-name{
                    width: 100%;
                    height: 90%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    h5{
                        margin: 0;
                        font-size: 16px;
                        text-align: center;
                    }
                    span{
                        text-align: center;
                        margin-top: 2px;
                        font-size: 12px;
                        color:#A4A2AA;
                    }
                }
            }
        }
    }
}
</style>