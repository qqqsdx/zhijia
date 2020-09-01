<template>
    <div class="index-mains">
        <main>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in images" :key="index">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </van-swipe>
            <Sections :list='seckill'/>
            <Sections :list='newproduct'/>
            <van-grid :border='false'>
                <van-grid-item icon="edit" text="设计服务" />
                <van-grid-item icon="logistics" text="免费送装" />
                <van-grid-item icon="completed" text="质量保证" />
                <van-grid-item icon="thumb-circle-o" text="安全环保" />
            </van-grid>
            <van-divider />
            <Theme/>
            <Slideimg titles="至家新品"/>
            <Slideimg titles="现货推荐"/>
            <Choiceness/>
            <Sel/>
        </main>
    </div>
</template>
<script>
import Sections from './section'
import Theme from './theme'
import Slideimg from './slideimg'
import Choiceness from './choiceness'
import Sel from './selectedbibliography'
// 引入图片
import sect from '../../assets/img/seckillbig.png'
import secb from '../../assets/img/seckillmin1.png'
import nprot from '../../assets/img/new productmin.png'
import nprob from '../../assets/img/seckillmin1.png'
export default {
    data() {
        return {
            images:[
                {
                    url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3394847204,512220910&fm=26&gp=0.jpg'
                },
                {
                    url:'https://pic.rmb.bdstatic.com/4f7d8e911be2eeb750bcb1fa8b98464e.jpeg@wm_2,t_55m+5a625Y+3L+almuWbveeahOWkqeepug==,fc_ffffff,ff_U2ltSGVp,sz_48,x_30,y_30'
                },
                {
                    url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3518923070,3805890162&fm=11&gp=0.jpg'
                }
            ],
            seckill:
                {
                    img1:sect,
                    img2:secb
                }
            ,
            newproduct: 
                {
                    img1:nprot,
                    img2:nprob
                }
            
        }
    },
    components:{
        Sections,
        Theme,
        Slideimg,
        Choiceness,
        Sel
    }
}
</script>
<style lang='scss' scoped>
    .index-mains{
        margin-top: 46px;
        main{
            .my-swipe .van-swipe-item {
                color: #fff;
                font-size: 20px;
                line-height: 180px;
                img{
                    width: 100%;
                    height: 180px;
                }
            }
            .my-swipe{
                width: 100%;
                height: 180px;
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
    }
</style>