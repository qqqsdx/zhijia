<template>
    <div class="selectedbibliography">
        <h3>精选目录</h3>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
    </div>
</template>
<script>
import Products from './products'
export default {
    components:{
        Products
    }
}
</script>
<style lang="scss">
    .selectedbibliography{
        h3{
        padding-left: 10%;
        text-align: left;
        line-height: 30px;
    } 
    }
</style>