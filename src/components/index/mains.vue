<template>
    <div class="index-mains">
        <main>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item >
                   <img src="../../assets/img/lbt1.jpg" alt="">
                   <img src="../../assets/img/lbt2.jpg" alt="">
                </van-swipe-item>
            </van-swipe>
            <Sections :list='sck' />
            <Sections  :list='por'/>
            <van-grid :border='false' :icon-size='16'>
                <van-grid-item
                 :icon="item.icon"
                 :text="item.text" 
                 v-for="(item, index) in serves" 
                 :key="index"
                 @click="tolink(item)"
                  />
            </van-grid>
            <van-divider />
            <Theme/>
            <Slideimg titles="至家新品"/>
            <Slideimg titles="现货推荐"/>
            <Choiceness/>
            <Products/>
        </main>
    </div>
</template>
<script>
import Sections from './section'
import Theme from './theme'
import Slideimg from './slideimg'
import Choiceness from './choiceness'
import Products from './products'
//图片限时秒杀等
import xsms from '../../assets/img/xsms.png'
import jjmj from '../../assets/img/jjmj.png'
import xrzc from '../../assets/img/xrzc.png'
import xpys from '../../assets/img/xpys.png'
import snsq from '../../assets/img/snsq.png'
import xqzs from '../../assets/img/xqzs.png'
export default {
    data() {
        return {
            images:[
                {
                    url:'http://adai.vip/img/lbt1.86987052.jpg'
                },
                {
                    url:'http://adai.vip/img/lbt2.878012f7.jpg'
                }
            ],
            // 开头图片上
            sck:{
                imgbig:'http://adai.vip/img/xsms.323ca085.png',
                imgs:{
                    imgleft:'http://adai.vip/img/jjmj.872513c5.png',
                    imgright:'http://adai.vip/img/xrzc.92317510.png'
                }
            },
            //开头图片下
            por:{
                imgbig:'http://adai.vip/img/xpys.f8448f6c.png',
                imgs:{
                    imgleft:'http://adai.vip/img/snsq.551b8f6f.png',
                    imgright:'http://adai.vip/img/xqzs.752b406e.png'
                }
            },
            serves:[
                {
                    text:'设计服务',
                    icon:'http://adai.vip/images/index/fuwu/sjfw.png',
                    ids:1
                },
                {
                    text:'免费送装',
                    icon:'http://adai.vip/images/index/fuwu/mfsz.png',
                    ids:2
                },
                {
                    text:'质量保证',
                    icon:'http://adai.vip/images/index/fuwu/zlbz.png',
                    ids:3
                },
                {
                    text:'安全环保',
                    icon:'http://adai.vip/images/index/fuwu/aqhb.png',
                    ids:4
                },
            ]
        }
    },
    components:{
        Sections,
        Theme,
        Slideimg,
        Choiceness,
        Products
    },
    methods:{
        tolink(i){
            this.$router.push({
                path:`index/serve/${i.ids}`
            })
        }
    }
}
</script>
<style lang='scss' scoped>
    .index-mains{
        // margin-top: 46px;
        position: absolute;
        top: 46px; bottom: 50px;
        left: 0; right: 0;
        overflow: auto;
        main{
            .my-swipe .van-swipe-item {
                color: #fff;
                font-size: 20px;
                line-height: 240px;
                width: 375px!important;
                img{
                    width: 100%;
                    height: 240px;
                }
            }
            .my-swipe{
                width: 100%;
                height: 240px;
            }
        }
        
        .qqq{
            width: 100%;
            height: 250px;
            border: 1px solid red;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .qqq-top{
                width: 90%;
                height: 47%;
                border: 1px solid black;
                border-radius: 10px;
                margin-top: 8px;
            }
             .qqq-bom{
                width: 90%;
                height: 47%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .bom{
                    width: 48%;
                    height: 90%;
                    border: 1px solid black;
                    border-radius: 4%;
                }
            }
        }
        .van-grid{
            width: 90%;
            margin: auto;
        }
    }
    .index-mains::-webkit-scrollbar {
        display: none;
    }
</style>