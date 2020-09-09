<template>
<div>
<ul class="Coupon">
    <li v-for="(item,index) in main" :key="index" :to="item.to" @click="onTo(index)" >
        <p>{{item.num}}</p>
        <h3>{{item.name}}</h3>
    </li>
</ul>
</div>
</template>

<!-- 优惠券组件-->

<script>
export default {
    data() {
        return {
            main: [{
                    num: 0,
                    name: '优惠券',                    
                },
                {
                    num: 0,
                    name: '收藏',
                },
                {
                    num: 0,
                    name: '消息'
                },
                {
                    num: 0,
                    name: 'SHOW'
                },
            ],
            
        }
    },
    
    methods: {    
        onTo(index){
            if(index===0){
           this.$router.push('/discount')//跳转到优惠券页面   
           }if(index===1){
               this.$router.push('/collect')//跳转到收藏页面
           }if(index===2){
               this.$router.push('/information')//跳转到消息页面
           }if(index===3){
               this.$router.push('/myshow')//跳转到消息页面
           }
               
    },
}
}
</script>

<style lang="scss">
.Coupon {
    width: 100%;
    height: 38px;
    display: flex;
    margin: 36px 0 26px 0;
    

    >li {
        width: 25%;
        text-align: center;
        p,h3{
            padding: 0;
            margin: 0;
        }

        p {
            height: 13px;
            line-height: 13px;
            font-size: 18px;
            font-family: DINPro;
            font-weight: bold;
            color: #000000;
            margin-bottom: 13px;
        }

        h3 {

            height: 12px;
            line-height: 12px;
            font-size: 13px;
            font-family: PingFang;
            font-weight: bold;
            color: #000000;
        }
    }
}
</style>>
