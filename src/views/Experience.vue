<template>
    <div class="experi" >
        <div class="title">
            <div class="left">
            <span class="t">体验</span>
            <span class="b">北京</span>
            </div>
            <div class="right">
                <span>
                   <img src="../assets/experience/gwc.png" alt="">
                </span>
            </div>
        </div>
        <section class="head">
            <article class="heads">
                <div class="van-hairline--surround">
                <img :src="img1" alt="">
                </div>
                <div class="van-hairline--surround">
                <img :src="img2" alt="">
                </div>
            </article>
            <!--hommey 798  -->
            <article class="hommey">
                <span class="lab">Hommey Lab.798</span>
                <p>至家首家线下体验店</p>
            <div class="lun">
                <van-swipe :loop="false" :width="155">
                    <van-swipe-item v-for="(item,index) in list" :key="index">
                                <img :src="item.url" alt="">
                                <div class="titles">{{item.title}}</div>
                    </van-swipe-item>
                <template #indicator>
                        <div class="custom-indicator">
                        </div>
                </template>
                </van-swipe>
            </div>
            
            </article>
            <!-- 体验家 -->
            <family />
         <div>

         </div>
        </section>

    </div>
</template>
<script>
import img1 from '../assets/images/tu1.png'
import img2 from '../assets/images/tu2.png'
import img3 from '../assets/images/tu3.png'
import img4 from '../assets/images/tu4.png'
import family from '../components/experience/family'
export default {
    data(){
        return{
           img1:img1,
           img2:img2,
            list:[
                {url:img3,title:'不同的人生，不同的颜色'},
                {url:img4,title:'不同的人生，不同的颜色'},
                {url:img3,title:'不同的人生，不同的颜色'},
                {url:img4,title:'不同的人生，不同的颜色'},
            ]
        }
    },
    components:{
        family
    }

}
</script>

<style lang="scss" scoped>
@import "../assets/style/a.css";
 .experi {
    position: absolute;
    top: 0;
    left: 21px;
    right: 21px;
    bottom: 0;
    margin: auto;
    background: #fff;
    .title{
        margin-top: 48px;
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-between;;
        .left{
          .t{
            width: 44px;
            height: 21px;
            font-size: 23px;
            font-family: PingFang;
            font-weight: bold;
            color: #000000;
          }
          .b{
            width: 28px;
            height: 14px;
            font-size: 15px;
            font-family: PingFang;
            font-weight: 500;
            color: #000000;
            margin-left: 15px;

          }  
        }
       
        }
    .head{
        margin-top: 47px;
        margin-bottom: 50px;
        .heads{
            display: flex;
            justify-content: space-between;
            div{
                width: 152px;
                height: 99px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .hommey{
            display: flex;
            flex-direction: column;
            align-items:flex-start;
            margin-top: 46px;
            
           .lab{
                float: left;
                font-size: 23px;
                font-family: DINPro;
                font-weight: bold;
                color: #000000;
           }
           p{
               margin-top: 9px;
               color: #989898;
               font-size:13px;
           }
            
        }
    
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        width: 151px;
        height: 123px;
        text-align: center;
        margin-right: 10px;
        img{
            height: 99px;
        }
        .title{
            color: #999999;
            font-size: 13px;
        }
    }
    .lun{
        width: 100%;
        .van-swipe{
            margin-top: 12px;
            width: 100%;
            .van-swipe-item{
                width: 151px;
                height: 120px;
                margin-right: 10px;
                  .titles{
                    font-size: 13px;
                    color: #999999;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap
                }
                img{
                    width: 100%;
                    height: 99px;
                }
            }
        }
    }
    
 }
</style>