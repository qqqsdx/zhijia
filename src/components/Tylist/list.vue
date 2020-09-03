<template>
    <div class="list">
        <div class="tab">
        <van-tabs v-model="active">
            <van-tab :title="item.title" v-for="(item,index) in list" :key="index"></van-tab>
        </van-tabs>
        </div>
        <div class="topic">
            <h2>所有单品</h2>
        </div>
        <div class="lists">
            <div class="bed" v-for="(item,index) in 7" :key="index">
                <img src="https://pimg.wzj.com/wzj/product/spu/b51bd402-a17a-4152-a829-fe3ac71ae247.jpg?x-oss-process=style/w800-webp" alt="">
                <span>哥本哈根双人床|布料易清洗</span>
                 <p>￥7400.00</p>
            </div>
        </div>
    </div>
    
      
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            list:[{title:'单品'},{title:'评论'}]
        }
    },
}
</script>


<style lang="scss">
    .tab{
        width: 100px;
        margin: auto;
        margin-top: 71px;
    }
      .topic{
            margin-top: 16px;
            font-size: 15px;
        }
    .lists{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .bed{
            margin-top: 10px;
            width: 48%;
            display: flex;
            flex-direction: column;
            font-size: 12px;
            img{
                width: 100%;
                height: 176px;
            }
            span{
                margin-top: 10px;
            }
            p{
                margin-top: 13px;
            }
        }
        
    }
</style>