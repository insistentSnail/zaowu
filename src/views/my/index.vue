<template>
    <div class="my-main">
       <BaseLayer>
            <template v-solt:default>
            <div class="bg">
                <div class="avatar"></div>
                <div class="set"></div>
                <div class="btn">
                    <router-link class="register" :to="{name:'register'}" tag="div">注册</router-link>
                    <router-link class="login" :to="{name:'login'}" tag="div">登录</router-link>
                </div>
            </div>
                <div class="mys">
                    <div class="myOrder">
                        <div class="order-title" @click="$router.push('/order')">
                            <span class="mytitle">我的订单</span>
                            <span class="yjt"></span>
                        </div>
                        <div class="myOrder-cards">
                            <div class="myOrder-card">
                                <div class="card-icon1 card-icon">
                                </div>
                                <span>待付款</span>
                            </div>
                             <div class="myOrder-card">
                                <div class="card-icon2 card-icon">
                                </div>
                                <span>待收货</span>
                            </div>
                             <div class="myOrder-card">
                                <div class="card-icon3 card-icon">
                                </div>
                                <span>已完成</span>
                            </div>
                             <div class="myOrder-card">
                                <div class="card-icon4 card-icon">
                                </div>
                                <span>售后</span>
                            </div>
                        </div>
                    </div>
                    <div class="myCollect">
                         <div class="order-title">
                            <span class="mytitle">我的收藏</span>
                            <span class="yjt"></span>
                        </div>
                        <div class="myOrder-cards">
                            <div class="myOrder-card">
                                <div class="card-icon1 card-icon">
                                </div>
                                <span>物品</span>
                            </div>
                             <div class="myOrder-card">
                                <div class="card-icon2 card-icon">
                                </div>
                                <span>品牌</span>
                            </div>
                             <div class="myOrder-card">
                                <div class="card-icon3 card-icon">
                                </div>
                                <span>文章</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <div class="left">
                            <span class="tb"></span>
                            <span class="text">收货地址</span>
                        </div>
                        <div class="right"></div>
                    </li>
                    <li>
                          <div class="left">
                            <span class="tb2 tb"></span>
                            <span class="text">我的优惠卷</span>
                        </div>
                        <div class="right"></div>
                    </li>
                    <li>
                         <div class="left">
                            <span class="tb3 tb"></span>
                            <span class="text">账户与安全</span>
                        </div>
                        <div class="right"></div>
                    </li>
                    <li>
                         <div class="left">
                            <span class="tb4 tb"></span>
                            <span class="text">联系客服</span>
                        </div>
                        <div class="right"></div>
                    </li>
                    <li>
                         <div class="left">
                            <span class="tb5 tb"></span>
                            <span class="text">关于造物</span>
                        </div>
                        <div class="right"></div>
                    </li>
                </ul>
            </template>
       </BaseLayer>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
export default {
    name:"My",
    components:{
        BaseLayer,
    }
}
</script>
<style lang="scss" scoped>
    .my-main{
        height: 100%;
    }
    .bg{
        height: 237px;
        width: 100%;
        position: fixed;
        z-index: 9;
        background:url("../../assets/imgs/main/bg.png") no-repeat;
        background-size: contain;
        .avatar{
            width: 74px;
            height: 74px;
            border-radius: 50%;
            top: 54px;
            left:50%;
            transform:translateX(-50%); 
            position: absolute;
            background:url("../../assets/imgs/main/logo.png");
            background-size: 100% 100%;
        }
        .set{
            width: 24px;
            height: 24px;
            position: absolute;
            right: 24px;
            top: 55px;
            background:url("../../assets/imgs/main/set.png");
            background-size:100% 100%;
            z-index: 11;
        }
        .btn{
            width: 94px;
            height: 33px;
            top: 147px;
            left: 50%;
            transform:translateX(-50%); 
            position: absolute;
            background:#fff;
            display: flex;
            .register,.login{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #010E0D;
                letter-spacing: 0;
                text-align: center;
                width: 50%;
                height: 100%;
                line-height: 33px;
            }
            .register{
                border-right: 1px solid #ccc;
            }
        }
    }
    .mys{
        padding-top: 237px;
        width: 100%;
        height: 223px;
        background-color: #f5f5f5;
        position: relative;
    }
    .myOrder{
        width: 336px;
        height: 119px;
        background-color: #fff;
        border-radius:5px;
        position: absolute;
        top: 197px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
        .order-title{
            height: 39px;
            width: 100%;
            border-bottom: 1px solid #ccc;
            position: relative;
            line-height: 39px;
            .mytitle{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #010E0D;
                letter-spacing: 0;
                position: absolute;
                left: 10px;
            }
            .yjt{
                display: block;
                width: 20px;
                height: 20px;
                background:url("../../assets/imgs/icons/arr-r-1.png");
                background-size: 100% 100%;
                position:absolute;
                right: 10px;
                top: 10px;
            }
        }
    .myOrder-cards{
        height: 79px;
        width: 100%;
        bottom: 0;
        left: 0;
        display: flex;
        position: absolute;
        .myOrder-card{
            width:25%;
            height: 100%;
            display:flex;
            flex-flow: column;
            .card-icon{
                width: 28px;
                height: 28px;
                background:url("../../assets/imgs/main/payment.png");
                background-size: 100% 100%;
                margin: 10px auto;
            }
            .card-icon2{
                background:url("../../assets/imgs/main/car.png");
                background-size: 100% 100%;
            }
            .card-icon3{
                background:url("../../assets/imgs/main/done.png");
                background-size: 100% 100%;
            }
            .card-icon4{
                background:url("../../assets/imgs/main/after.png");
                background-size: 100% 100%;
            }
            span{
                font-size: 14px;
                color: #494949;
                letter-spacing: 0;
                text-align: center;
                font-weight: 600;
                font-family: PingFangSC-Regular;
            }
        }
    }
    }
    .myCollect{
        width: 336px;
        height: 119px;
        background-color: #fff;
        border-radius:5px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
        .order-title{
            height: 39px;
            width: 100%;
            border-bottom: 1px solid #ccc;
            position: relative;
            line-height: 39px;
            .mytitle{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #010E0D;
                letter-spacing: 0;
                position: absolute;
                left: 10px;
            }
            .yjt{
                display: block;
                width: 20px;
                height: 20px;
                background:url("../../assets/imgs/icons/arr-r-1.png");
                background-size: 100% 100%;
                position:absolute;
                right: 10px;
                top: 10px;
            }
        }
        .myOrder-cards{
        height: 79px;
        width: 100%;
        bottom: 0;
        left: 0;
        display: flex;
        position: absolute;
        .myOrder-card{
            width:33%;
            height: 100%;
            display:flex;
            flex-flow: column;
            .card-icon{
                width: 28px;
                height: 28px;
                background:url("../../assets/imgs/main/collect.png");
                background-size: 100% 100%;
                margin: 10px auto;
            }
            .card-icon2{
                background:url("../../assets/imgs/main/brand.png");
                background-size: 100% 100%;
            }
            .card-icon3{
                background:url("../../assets/imgs/main/article.png");
                background-size: 100% 100%;
            }
            span{
                font-size: 14px;
                color: #494949;
                letter-spacing: 0;
                text-align: center;
                font-weight: 600;
                font-family: PingFangSC-Regular;
            }
        }
    }
    }
    ul{
        width:100%;
        padding-bottom:100px; 
        li{
            width: 375px;
            height: 52px;
            margin: 0 auto;
            border: 1px solid #e5e5e5;
            position: relative;
            .left{
                height: 100%;
                width:auto;
                position: absolute;
                left: 20px;
                line-height: 52px;
                .tb{
                    width: 22px;
                    height: 22px;
                    position: absolute;
                    top:15px;
                    background:url("../../assets/imgs/main/position.png");
                    background-size: 100% 100%;
                }
                .tb2{
                    background:url("../../assets/imgs/main/ticket.png");
                    background-size: 100% 100%; 
                }
                .tb3{
                    background:url("../../assets/imgs/main/account.png");
                    background-size: 100% 100%; 
                }
                .tb4{
                    background:url("../../assets/imgs/main/tel.png");
                    background-size: 100% 100%; 
                }
                .tb5{
                    background:url("../../assets/imgs/main/about.png");
                    background-size: 100% 100%; 
                }
                .text{
                    margin-left: 30px;
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #494949;
                    letter-spacing: 0;
                    text-align: center;
                }
            }
            .right{
                width: 20px;
                height: 20px;
                position: absolute;
                background: url("../../assets/imgs/icons/arr-r-1.png");
                background-size: 100% 100%;
                right:22px;
                top: 16px;
            }
        }
    }
</style>