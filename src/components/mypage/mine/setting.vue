

<template>
    <div class="setting">
        <van-nav-bar
  title="设置"
  left-arrow
  placeholder
  fixed
@click-left="onClickLeft"
/>
<ul>
            <li v-for="(item,index) in after" :key="index"  >
                <span>
                {{item.serve}}</span>
                <p><img class="arrows" :src="item.img" alt=""></p>                
            </li>
            
        </ul>
        <div class="setting-button">退出登录</div>

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
                  
                   serve:'编辑个人资料',
                   img:arrow,
                   
               },
                {
                  
                   serve:'账号绑定',
                   img:arrow,
                   
               },
               {
                   
                   serve:'关于至家',
                   img:arrow
               },
                {
                   
                   serve:'给至家平分',
                   img:arrow
               },
                {
                   
                   serve:'清理缓存',
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
.setting{

    [class*=van-hairline]::after{
        border:none;
    }
    .van-nav-bar .van-icon{
        color:#000;
    }
}
.setting{
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
    .setting-button{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 15px;
        color: rgb(245, 83, 55);
        background: #f8f8f8;
    }
}   
</style>