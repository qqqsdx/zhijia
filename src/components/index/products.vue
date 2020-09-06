<template>
    <div class="products">
        <div class="products-top" @click="gotogoods">
            <img src="http://adai.vip/images/index/sofaMax.png" alt="">
        </div>
        <van-tabs active="a" :swipeable='true' line-width='24' title-active-color='#000' :animated='true' color='#000'>
            <van-tab title="推荐" name="a">
                <van-grid column-num="2" :border="false"  >
                   <div class="Warenauswahl" v-for="(item, index) in spList" :key="index">
                       <img :src="item.img" alt="">
                       <h4>{{item.title}}</h4>
                       <span>{{item.price}}</span>
                   </div>
                </van-grid>
            </van-tab>
            <van-tab title="单人沙发" name="b">
                <van-grid column-num="2" :border="false">
                   <div class="Warenauswahl" v-for="(item, index) in armchairList" :key="index">
                       <img :src="item.img" alt="">
                       <h4>{{item.title}}</h4>
                       <span>{{item.price}}</span>
                   </div>
                </van-grid>
            </van-tab>
            
            <van-tab title="双人沙发" name="c">
                <van-grid column-num="2" :border="false">
                   <div class="Warenauswahl" v-for="(item, index) in loveseatList" :key="index">
                       <img :src="item.img" alt="">
                       <h4>{{item.title}}</h4>
                       <span>{{item.price}}</span>
                   </div>
                </van-grid>
            </van-tab>
            
            <van-tab title="多人沙发" name="d">
                <van-grid column-num="2" :border="false">
                   <div class="Warenauswahl" v-for="(item, index) in spLists" :key="index">
                       <img :src="item.img" alt="">
                       <h4>{{item.title}}</h4>
                       <span>{{item.price}}</span>
                   </div>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spList:[
                {
                    img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1226227063,3012624361&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3520719171,421147888&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1226227063,3012624361&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3520719171,421147888&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1226227063,3012624361&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3520719171,421147888&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1226227063,3012624361&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3520719171,421147888&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
            ],
            armchairList:[
                {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2922753852,1775937862&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1846503710,672820185&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2922753852,1775937862&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1846503710,672820185&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2922753852,1775937862&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1846503710,672820185&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2922753852,1775937862&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1846503710,672820185&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
               
            ],
            loveseatList:[
                {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1388132717,4151952659&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167221833,3036015632&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                 {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1388132717,4151952659&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167221833,3036015632&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                 {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1388132717,4151952659&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167221833,3036015632&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                 {
                    img:' https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1388132717,4151952659&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2167221833,3036015632&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
            ],
            spLists:[
                {
                    img:' https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271326097,1156773038&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4229746688,267380115&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:' https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271326097,1156773038&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4229746688,267380115&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:' https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271326097,1156773038&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4229746688,267380115&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
                {
                    img:' https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271326097,1156773038&fm=26&gp=0.jpg',
                    title:'轻奢布艺单人沙发',
                    price:'¥2990.00'
                },
                {
                    img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4229746688,267380115&fm=26&gp=0.jpg',
                    title:'北欧丝绒单人沙发',
                    price:'¥2880.00'
                },
            ]
        }
    },
    methods:{
        gotogoods(){
            this.$router.push({
                path: '/goodslist/goods0',
            })
        }
    }
    
};
</script>
<style lang='scss' scoped>
.products{
    width: 80%;
    position: relative; 
    margin: auto;
    margin-top: 10%;
    .van-tabs__wrap .van-tabs__line {
        width: 15px;
        background-color: #888888;
    }
    .products-top{
        width: 100%;
        height: 105px;
        margin-top: 8px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .Warenauswahl{
        width: 50%;
        height: 136px;

        img{
            width: 50%;
            height: 50%;
            margin-left: 50%;
            transform: translateX(-38px);
        }
        h4{
            font-size: 14px;
            margin: 0;
            line-height: 20px;
            float: left;
            padding-left: 15px;
        }
        span{
            font-size: 12px;
            float: left;
            padding-left: 15px;
        }
    }
    .van-tabs__content--animated{
        margin-top: 10px;
    } 
}

</style>