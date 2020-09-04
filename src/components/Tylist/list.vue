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
                <img :src="y" alt="">
                <span>哥本哈根双人床|布料易清洗</span>
                 <p>￥7400.00</p>
            </div>
        </div>
        <div class="comment">
              <span>评论</span>
              <span class="write">
                  <img :src="c" alt="">
                  写评论
               </span>
        </div>
        <div class="btn">
            <van-button type="primary" size="large" color="#FFAD01"  plain>来发布第一条评论吧</van-button>
        </div>
        <div class="involve">
            <span class="home">关于体验家</span>
            <div class="focus">
                <div class="foncus-s">
                    <img :src="t" alt="">
                    <div class="wo">
                        <span>窝窝（京禧奶茶 、烘培原料）</span>
                        <span>这个人很懒，什么都没说</span>
                    </div>
                </div>
                <div class="jia">
                  <span>关注</span>  
                </div>
            </div>
        </div>
    </div>
    
      
</template>
<script>
import y from '@/assets/images/d3.png'
import c from '@/assets/images/d10.png'
import t from '@/assets/images/toux.png'
export default {
    data() {
        return {
            t:t,
            c:c,
            y:y,
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
                width: 133px;
                height: 133px;
            }
            span{
                margin-top: 10px;
            }
            p{
                margin-top: 13px;
            }
        }
        
    }
    .comment{
        display: flex;
        justify-content: space-between;
        margin-top: 37px;
        font-size: 12px;
        .write{
            color: #F8A200;
            img{
                width: 11px;
                height: 10px;
            }
        }
    }
    .btn{
        margin-top: 40px;
    }
    .involve{
        margin-top: 33px;
        display: flex;
        flex-direction: column;
        .home{
            color: #050505;
            font-size: 13px;  
            font-weight: bold;
            line-height: 20px;
        }
        .focus{
            margin-top: 23px;
            display: flex;
            justify-content: space-between;
            .jia{
                span{
                    width: 27px;
                    height: 13px;
                    font-size: 14px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #FFAC04;
                    line-height: 20px;
                }
            }
            .foncus-s{
            display: flex;
            .wo{
                display: flex;
                flex-direction: column;
                font-size: 13px;
                margin-left: 13px;
                color: #050505;
                line-height: 20px;
            }
            }
            
        }
    }
</style>