<template>
    <div>
        <div class="collectmain">
            <ul>
                <li v-for="(item,index) in list" :key="index" class="van-hairline--surround">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                    <span></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
data(){
    return{
         list:[
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3660011105,278597136&fm=26&gp=0.jpg',
                    title:'豆袋懒人沙发 | 舒适坐感',
                    price:'￥97.50',
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3660011105,278597136&fm=26&gp=0.jpg',
                    title:'豆袋懒人沙发 | 舒适坐感',
                    price:'￥97.50',
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3660011105,278597136&fm=26&gp=0.jpg',
                    title:'豆袋懒人沙发 | 舒适坐感',
                    price:'￥97.50',
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3660011105,278597136&fm=26&gp=0.jpg',
                    title:'豆袋懒人沙发 | 舒适坐感',
                    price:'￥97.50',
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3660011105,278597136&fm=26&gp=0.jpg',
                    title:'豆袋懒人沙发 | 舒适坐感',
                    price:'￥97.50',
                },
                {
                    img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3660011105,278597136&fm=26&gp=0.jpg',
                    title:'豆袋懒人沙发 | 舒适坐感',
                    price:'￥97.50',
                },
         ]

    }
}
}
</script>

<style lang='scss' scoped>
 .collectmain{
             background: #fff;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 50%;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                img{
                    width: 100%;
                    height: 130px;
                }
                p{
                    font-size: 12px;
                    padding-left: 10px;
                }
                span{
                    text-align: left;
                    font-size: 10px;
                    padding-left: 10px;
                }
            }
        }
    }

</style>