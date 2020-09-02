<template>

          <article class="family">
              <span class="f-title">体验家</span>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value2" :options="option2" />
                    <van-dropdown-item v-model="value3" :options="option3" />
                </van-dropdown-menu>
                <div class="f-img">
                <van-grid :border="false" >
                    <van-image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1825239948,3071618269&fm=26&gp=0.jpg" />
                    <van-grid-item  text="" />
                    <van-grid-item  text="文字" />
                </van-grid>
                </div>
            </article>

</template>

<script>
export default {
    data(){
        return{
            value1: 0,
            value2: 'a',
            value3:'a',
            option1: [
                { text: '默认排序', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '位置', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
               option3: [
                { text: '风格', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
        .family{
            margin-top: 43px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .f-title{
                float: left;
                font-size: 23px;
                font-family: DINPro;
                font-weight: bold;
                color: #000000;
            }
            .f-img{
                margin-top: 31px;
                // img{
                //     width: 313px;
                //     height: 209px;
                // }
            }
        }
        .van-dropdown-menu{
            width: 100%;
        }
       
</style>