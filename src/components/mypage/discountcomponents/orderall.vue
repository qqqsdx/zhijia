<template>
<div class="all">
    <ul>
        <li>
            <p>已取消</p>
            <p>
                <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
            </p>
            <button>重新购买</button>
        </li>
    </ul>
</div>
</template>

<style lang="scss" scoped>
.all{
    li{
        width: 100%;       
        border: 1px solid #ccc;
        background-color: #fafafa;
        overflow: hidden;
        margin-top: 10px;
        p:nth-child(1){
            width: 100%;
            font-size: 15px;
            margin:5px 0px 5px 30px;
        }
        button{
            width: 80px;
            height: 40px;
            font-size: 15px;
            float:right;
            background: #FFD801;
            border:none;
        }
         p:nth-child(2){
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }
    }

}
</style>
