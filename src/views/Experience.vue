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
                <div v-for="(item,index) in 2" 
                :key="index"
                class="van-hairline--surround"
                >
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1825239948,3071618269&fm=26&gp=0.jpg" alt="">
                </div>
            </article>
            <!--hommey 798  -->
            <article class="hommey">
                <span class="lab">Hommey Lab.798</span>
                <p>至家首家线下体验店</p>
                <div class="lun">
                    <van-swipe class="my-swipe"  >
                        <van-swipe-item v-for="(item,index) in list" :key="index">
                            <img :src="item.url" alt="">
                            <div>{{item.title}}</div>
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
import family from '../components/experience/family'
export default {
    data(){
        return{
            list:[
                {url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1825239948,3071618269&fm=26&gp=0.jpg',title:'不同的人生，不同的颜色'},
                {url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1825239948,3071618269&fm=26&gp=0.jpg',title:'不同的人生，不同的颜色'},
                {url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1825239948,3071618269&fm=26&gp=0.jpg',title:'不同的人生，不同的颜色'},
                {url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1825239948,3071618269&fm=26&gp=0.jpg',title:'不同的人生，不同的颜色'},
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
            .lun{
                margin-top: 12px;
                width:100%;
            }
            
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
        div{
            color: #999999;
            font-size: 13px;
        }
    }

</style>