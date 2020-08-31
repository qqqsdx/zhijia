<template>
    <div class="section">
        <div class="section-top"></div>
        <div class="section-bom">
            <div class="bom"></div>
            <div class="bom"></div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
        .section{
            width: 100%;
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .section-top{
                width: 90%;
                height: 47%;
                border: 1px solid black;
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
                .bom{
                    width: 48%;
                    height: 90%;
                    border: 1px solid black;
                    border-radius: 4%;
                }
            }
        }
</style>