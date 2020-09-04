<template>
    <div class="Aftersale">
        <ul>
            <li v-for="(item,index) in after" :key="index" >
                <span><img :src="item.icon" alt="">
                {{item.serve}}</span>
                <p><img class="arrows" :src="item.img" alt=""></p>                
            </li>
        </ul>
    </div>
</template>

<script>
import arrow from '../../assets/images/arrow.png' //右箭头
import aftersales from '../../assets/images/after-sales.png'//我的售后
import appointment from '../../assets/images/appointment.png'//我的预约
import aaddress from '../../assets/images/address.png'//地址管理
import customer from '../../assets/images/customer.png'//至家客服
import setting from '../../assets/images/Settings.png'//设置
export default {
    data(){
        return{
           after:[
               {
                   icon:aftersales,
                   serve:'我的售后',
                   img:arrow
               },
               
               {
                   icon:appointment,
                   serve:'我的预约',
                   img:arrow
               },
               {
                   icon:aaddress,
                   serve:'地址管理',
                   img:arrow
               },
               {
                   icon:customer,
                   serve:'至家客服',
                   img:arrow
               },
                {
                   icon:setting,
                   serve:'设置',
                   img:arrow
               },
               

           ] 
        }
    }
}
</script>
<style lang="scss">
.Aftersale{
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
             font-weight: bold;
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