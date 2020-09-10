<template>
    <div class="after">
        <van-nav-bar
  title="我的售后"
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
         this.$router.go(-1) 
     
   
      }
    
  },
};
</script>
<style lang="scss">
.after{
    [class*=van-hairline]::after{
        border:none;
    }
    .van-nav-bar .van-icon{
        color:#000;
    }
}
    
</style>