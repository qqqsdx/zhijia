

<template>
    <div class="customer">
        <van-nav-bar
  title="请选择客服组"
  left-arrow
  placeholder
  fixed
@click-left="onClickLeft"
/>
<ul>
            <li v-for="(item,index) in after" :key="index"  >
                <span><img :src="item.icon" alt=""
               
                >
                {{item.serve}}</span>
                <p><img class="arrows" :src="item.img" alt=""></p>                
            </li>
        </ul>

    </div>
</template>
<script>
import arrow from '../../../assets/images/arrow.png' //右箭头
import aftersales from '../../../assets/images/after-sales.png'//我的售后
import appointment from '../../../assets/images/appointment.png'//我的预约
export default {
    data(){
        return{
           
           after:[
               {
                   icon:aftersales,
                   serve:'售前客服',
                   img:arrow,
                   
               },
               {
                   icon:appointment,
                   serve:'我的预约',
                   img:arrow
               },
           ],
        }
    },
    components:{
        
    },
  methods: {
      onClickLeft(){
         this.$router.go(-1) 
     
   
      }
    
  },
};
</script>
<style lang="scss">
.customer{
    [class*=van-hairline]::after{
        border:none;
    }
    .van-nav-bar .van-icon{
        color:#000;
    }
}
.customer{
    border-top: 1px solid #EDF1F4;
    span,p,img,ul,li{
        margin: 0;
        padding: 0;
    }
    
    ul{
        box-sizing: border-box;
        width: 100%;
        padding: 0px 35px;
       
        li{
            width: 100%;
             display: flex;
            justify-content: space-between;
            line-height: 64px;
            span{
             font-size: 15px;
             font-family: PingFang;
             color: #000000;
            img{
                width: 14px;
                height: 14px;
                margin: auto;
                margin-right: 10px;
            }           

        }
        .arrows{
                width: 7px;
                height: 13px;
                text-align: right;
            }
        
        }
        

    }
}   
</style>