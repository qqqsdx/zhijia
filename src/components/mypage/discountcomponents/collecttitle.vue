<template>
    <div class="Title">
        <van-nav-bar
  title="我的收藏夹"
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
.Title{
    [class*=van-hairline]::after{
        border:none;
    }
    .van-nav-bar .van-icon{
        color:#000;
    }
}
    
</style>