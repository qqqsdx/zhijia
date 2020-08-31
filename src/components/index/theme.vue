<template>
    <div class="theme">
        <h3>主题推荐</h3>
        <div class="theme-recommend">
            <div class="recommends" v-for="(item, index) in 4" :key="index">
                <div class="recommends-left">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2281527570,819906317&fm=26&gp=0.jpg" alt="">
                    <div class="recommends-left-name">
                        <h5>沙发</h5>
                        <span>sofa</span>
                    </div>
                </div>
                <div class="recommends-right">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2606282915,3994745661&fm=26&gp=0.jpg" alt="">
                    <div class="recommends-right-name">
                        <h5>卫浴</h5>
                        <span>bathroom</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.theme{
    width: 90%;
    margin: 0 auto;
    
    h3{
        padding-left: 10px;
        text-align: left;
        line-height: 30px;
    }
    .theme-recommend{
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .recommends{
            width: 100%;
            height: 20%;
            display: flex;
            .recommends-left{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                border-right: 1px solid #f5f5f5;
                img{
                    width: 50%;
                    height: 90%;
                    margin-left: 5px;
                }
                .recommends-left-name{
                    width: 100%;
                    height: 90%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    h5{
                        margin: 0;
                    }
                    span{
                        margin-top: 2px;
                        font-size: 12px;
                        color: #f5f5f5;
                    }
                }
            }
            .recommends-right{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                img{
                    width: 50%;
                    height: 90%;
                    margin-left: 5px;
                }
                .recommends-right-name{
                    width: 100%;
                    height: 90%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    h5{
                        margin: 0;
                    }
                    span{
                        margin-top: 2px;
                        font-size: 12px;
                        color: #f5f5f5;
                    }
                }
            }
        }
    }
}
</style>