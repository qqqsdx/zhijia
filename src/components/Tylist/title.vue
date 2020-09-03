<template>
    <div>
        <div class="title" >
        <h2>窝窝（京禧奶茶丶烘培原料）得体验</h2>
        <p>现代一室一厅·108m²</p>
          <van-swipe :loop="false" >
                    <van-swipe-item v-for="(item,index) in list" :key="index">
                                <img :src="item.url" alt="">
                    </van-swipe-item>
                <template #indicator>
                        <div class="custom-indicator">
                        </div>
                </template>
            </van-swipe>
    </div>
    </div>
</template>

<script>
import img3 from '../../assets/images/tu3.png'
export default {
    data(){
        return{
              //拿到数据替换list
        list:[{url:img3},{url:img3},{url:img3}]
        }
    }
}
</script>

<style lang="scss" scoped>
       .title{
        line-height: 20px;
        h2{
            margin-top: 21px; 
            color: #050505;
            font-size: 19px;
        }
        p{
            margin-top: 13px;          
            color: #A5A5A5;
            font-size: 13px;
        }
    }
</style>