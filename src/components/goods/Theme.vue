<!-- 主题 -->
<template>
    <div class="theme-container">
        <ul class="theme">
            <li v-for="(item,index) in 16" :key="index" class="van-hairline--surround"
                @click="change"
            >
                <img src="" alt="">
                <section>
                    <p>卧室</p>
                    <p>bedroom</p>
                </section>
            </li>
        </ul>

        <div class="recommended">
            <p>主题推荐</p>
            <ul>
                <li v-for="(item,index) in 8" :key="index" class="van-hairline--surround"
                    @click="tothemedetdils"
                >
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1668542709,1580584016&fm=26&gp=0.jpg" alt="">
                    <span>家具界的百搭单品：可置物、可移动、可招待、可移动、可招待、可移动、可招待</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        change(){
            // console.log(1);
            this.$router.push('/theme/themegoods')
        },
        tothemedetdils(){
            this.$router.push('/theme/themedetails')
        }
    },
}
</script>

<style lang="scss">
.theme-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .theme{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li{
            width: 50%;
            height: 60px;
            display: flex;
            img{
                // display: block;
                width: 50%;
                height: 100%;
                border: 1px solid #000;
            }
            section{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                font-size: 13px;
            }
        }
    }
    .recommended{
        margin-top: 15px;
        width: 300px;
        // height: 700px;
        background: pink;
        // display: flex;
        p{
            width: 100%;
            height: 25px;
            text-align: left;
        }
        ul{
            display: flex;
            flex-direction: column;
            li{
                width: 100%;
                height: 200px;
                margin-bottom: 10px;
                img{
                    width: 100%;
                    height: 150px;
                }
                span{
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 13px;
                }
            }
        }
    }
}
</style>