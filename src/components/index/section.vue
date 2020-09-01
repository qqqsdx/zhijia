<template>
    <div class="section">
        <div class="section-top">
            <img :src="list.img1" alt="">
        </div>
        <div class="section-bom">
            <img :src="list.img2" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        list:Object
    }
}
</script>
<style lang='scss' scoped>
        .section{
            width: 100%;
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
            }
            .section-top{
                width: 100%;
                height: 47%;
                border-radius: 10px;
                margin-top: 8px;
            }
             .section-bom{
                width: 90%;
                height: 47%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }
</style>