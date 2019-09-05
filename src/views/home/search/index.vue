<template>
    <div class="search-main">
        <div class="header">
            <div class="input-box">
                <span class="search-icon"></span>
                <input type="text" placeholder="搜索">
            </div>
            <span class="cancel" @click="$router.go(-1)">取消</span>
        </div>
        <BaseLayer>
            <template v-slot:default>
                <div class="hot-search">
                    <div class="hot-title">
                        热门搜索
                    </div>
                    <div class="hot-label">
                         <span>香氛</span>
                         <span>项链</span>
                         <span>马克杯</span>
                         <span>手镯</span>
                         <span>包</span>
                         <span>床品</span>
                         <span>香水</span>
                    </div>
                </div>
                 <div class="history-search">
                    <div class="hot-title">
                        历史搜索
                    </div>
                    <div class="hot-label">
                         <span>双肩包</span>
                         <span>iphone XS</span>
                         <span>马克杯</span>
                         <span>手镯</span>
                         <span>包</span>
                         <span>床品</span>
                         <span>香水</span>
                    </div>
                </div>
                <!-- 凑高度 -->
                <div class="box"></div>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
export default {
    name:"Search",
    data() {
        return {
            
        }
    },
    components:{
       BaseLayer 
    }
}
</script>
<style lang="scss" scoped>
    .box{
        height: 600px;
    }
    .search-main{
        height: 100%;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        .header{
            height: 40px;
            width:335px;
            position: fixed;
            text-align: left;
            z-index: 99;
            .input-box{
                width: 274px;
                height: 34px;
                margin-top: 3px;
                background: #F4F4F4;
                border-radius: 8px;
                line-height: 34px;
                position: relative;
                .search-icon{
                    width: 20px;
                    height: 20px;
                    background:url("../../../assets/imgs/icons/search.png");
                    background-size:100% 100%;
                    position: absolute;
                    top:7px;
                    left: 5px;
                }
                input{
                    border: none;
                    outline: none;
                    width: 100%;
                    background: #f4f4f4;
                    text-indent:35px;
                }
            }
            .cancel{
                font-family: PingFangSC-Light;
                font-size: 16px;
                color: #010E0D;
                letter-spacing: 0;
                text-align: right;
                position: absolute;
                right: 0;
                top: 12px;
            }
        }
        .hot-search{
            padding-top: 40px;
            width: 100%;
            .hot-title{
                font-family: PingFangSC-Light;
                font-size: 16px;
                color: #000000;
                letter-spacing: 0;
                text-align:left;
                line-height: 24px;
                margin: 15px 0;
            }
             .hot-label{
                    width: 100%;
                    margin:15px 0;
                    display: flex;
                    flex-flow: wrap;
                    span{
                        background: #F4F4F4;
                        border-radius: 8px;
                        font-family: PingFangSC-Light;
                        font-size: 16px;
                        color: #010E0D;
                        letter-spacing: 0;
                        padding: 5px 8px;
                        margin:6px 10px 6px 0;
                    } 
                }
        }
        .history-search{
             .hot-title{
                font-family: PingFangSC-Light;
                font-size: 16px;
                color: #000000;
                letter-spacing: 0;
                text-align:left;
                line-height: 24px;
                margin: 15px 0;
            }
             .hot-label{
                    width: 100%;
                    margin:15px 0;
                    display: flex;
                    flex-flow: wrap;
                    span{
                        background: #F4F4F4;
                        border-radius: 8px;
                        font-family: PingFangSC-Light;
                        font-size: 16px;
                        color: #010E0D;
                        letter-spacing: 0;
                        padding: 5px 8px;
                        margin:6px 10px 6px 0;
                    } 
                }
        }
    }
</style>