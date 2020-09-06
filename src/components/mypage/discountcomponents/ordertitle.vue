<template>
    <div class="myorder">
        <van-nav-bar
  title="我的订单"
  left-arrow
  placeholder
  fixed
@click-left="onClickLeft"
/>

    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
  methods: {
      onClickLeft(){
         this.$router.push('/my') 
            
      
   
      }
    
  },
};
</script>
<style lang="scss">
.myorder{
    [class*=van-hairline]::after{
        border:none;
    }
    .van-nav-bar .van-icon{
        color:#000;
    }
}
    
</style>