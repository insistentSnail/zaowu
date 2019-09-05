<template>
    <div class="buy-main">
        <div class="header">
            <div class="zjt" @click="$router.go(-1)"></div>
            <p>确认订单</p>
        </div>
        <BaseLayer>
            <template v-solt:default>
                <div class="address">
                    <p>添加收货地址</p>
                    <div class="yjt"></div>
                </div>
                <div class="good">
                    <img src="../../assets/imgs/classInfo/detail6.png" alt="">
                    <div class="goodInfo">
                        <p class="en">{{list.en}}</p>
                        <p class="ch">{{list.ch}}</p>
                        <div class="bottom">
                            <div class="price">¥{{list.price}} 颜色: {{list.color}} 尺寸: {{list.size}}</div>
                            <div class="count">×{{list.num}}</div>
                        </div>
                    </div>
                </div>
                  <div class="discount">
                    <p>优惠卷</p>
                    <div class="yjt"></div>
                </div>
                <div class="remark">
                    <span class="remark1">备注</span>
                    <span class="choose">选填</span>
                </div>
                <div class="cost">
                    <p class="totalPrice">
                        <span>商品总额</span>
                        <span>¥{{totalPrice}}</span>
                    </p>
                    <p class="freight">
                        <span>运费</span>
                        <span>¥10.0</span>
                    </p>
                </div>
                <div class="actual">
                    <div class="actualPrice">实付金额: ¥{{actualPrice}}</div>
                </div>
                <div class="pay">
                    <van-radio-group v-model="radio">
                        <div class="wx">
                            <div class="box">
                                <img src="../../assets/imgs/buy/wx.png" alt="">
                                <div class="text">
                                    <p class="top">微信支付</p>
                                    <p class="bottom">微信安全支付</p>
                                </div>
                            </div>
                            <van-radio name="1"></van-radio>
                        </div>
                        <div class="zfb">
                            <div class="box">
                                <img src="../../assets/imgs/buy/zfb.png" alt="">
                                <div class="text">
                                    <p class="top">支付宝支付</p>
                                    <p class="bottom">支付宝安全支付</p>
                                </div>
                             </div>
                            <van-radio name="2"></van-radio>
                        </div>
                    </van-radio-group>
                </div>
                <button @click="$router.push('/buy/success')">立即支付 ¥{{actualPrice}}</button>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
export default {
    name:"Buy",
    components:{
       BaseLayer 
    },
    computed:{
        totalPrice(){
            return this.list.num*this.list.price;
        },
        actualPrice(){
             return this.list.num*this.list.price+10;
        }
    },
    data() {
        return {
            list:{},
            radio: '1'
        }
    },
    created() {
        this.getInfo();
    },
    methods:{
        getInfo(){
            this.list=JSON.parse(window.localStorage.getItem("buyList"));
            console.log(this.list);
        }
    }
}
</script>
<style lang="scss" scoped>
    .buy-main{
        height: 100%;
        .header{
            width: 100%;
            height: 40px;
            padding: 0 20px;
            box-sizing: border-box;
            position: fixed;
            top: 0;
            left: 0;
            background: #F9F9F9;
            z-index: 99;
            .zjt{
                width: 20px;
                height: 20px;
                background: url('../../assets/imgs/icons/arr-l.png');// 为啥用@/assets不管用
                background-size: 100% 100%;
                position: absolute;
                left: 20px;
                top: 10px;
            }
            p{
                font-family: PingFangSC-Regular;
                font-size: 18px;
                color: #010E0D;
                letter-spacing: 0;
                line-height: 40px;
                font-weight: 600;
            }
        }
        .address,.discount{
            width: 100%;
            height: 80px;//注意这里高度给80px;
            padding: 0 20px;
            box-sizing: border-box;
            padding-top:40px;
            position: relative;
            border-bottom: 1px solid #e5e5e5;
            p{
                font-family: PingFangSC-Light;
                font-size: 16px;
                color: #010E0D;
                letter-spacing: 0;
                line-height: 40px;
                text-align: left;
            } 
            .yjt{
                width: 20px;
                height: 20px;
                background: url('../../assets/imgs/icons/arr-r-1.png');// 为啥用@/assets不管用
                background-size: 100% 100%;
                position: absolute;
                right: 20px;
                bottom: 10px;
            }
        }
        .discount{
            height: 40px;
            padding-top:0px; 
        }
        .good{
            width: 335px;
            height: 115px;
            margin: 20px auto;
            background-color: #f9f9f9;
            border-radius: 4px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                width: 78px;
                height: 78px;
            }
            .goodInfo{
                width: 200px;
                height: 78px;
                p.en{
                    font-family: PingFangSC-Light;
                    font-size: 14px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 21px;
                    text-align: left;
                }
                p.ch{
                    font-family: PingFangSC-Light;
                    font-size: 14px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 21px;
                    text-align: left;
                }
                .bottom{
                    margin-top: 10px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    line-height: 21px;
                    .price{
                        font-family: PingFangSC-Medium;
                        font-size: 12px;
                        color: #1C4B47;
                        letter-spacing: 0;
                        font-weight: 600;
                    }
                    .count{
                        font-family: PingFangSC-Light;
                        font-size: 12px;
                        color: #010E0D;
                        letter-spacing: 0;
                        font-weight: 600;
                    }
                }
            }
        }
        .remark{
            height: 40px;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #e5e5e5;
            line-height: 40px;
            text-align: left;
            .remark1{
                font-family: PingFangSC-Light;
                font-size: 16px;
                color: #494949;
                letter-spacing: 0;
            }
            .choose{
                font-family: PingFangSC-Thin;
                font-size: 14px;
                color: #494949;
                letter-spacing: 0;
                margin-left: 35%;
            }
        }
        .cost{
            height: 60px;
            width: 100%;
            border-bottom: 1px solid #e5e5e5;
            padding: 0 20px;
            box-sizing: border-box;
            p{
                height: 50%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    font-family: PingFangSC-Light;
                    font-size: 16px;
                    color: #494949;
                    letter-spacing: 0;
                }
            }
        }
        .actual{
            height: 60px;
            width: 100%;
            border-bottom: 1px solid #e5e5e5;
            padding: 0 20px;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            font-family: PingFangSC-Light;
            font-size: 16px;
            color: #000000;
            letter-spacing: 0;
            line-height: 30px;
        }
        .pay{
            height: 120px;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            img{
                width: 20px;
                height: 20px;
            }
            .wx,.zfb{
                height: 60px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .box{
                    display: flex;
                    align-items: center;
                    .text{
                        margin-left:10px;
                        text-align: left;
                        .top{
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #010E0D;
                            letter-spacing: 0;
                            font-weight: 500;
                            line-height: 21px;
                        } 
                        .bottom{
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #999999;
                            letter-spacing: 0;
                        }
                    }
                }
            }
        }
        button{
            background: #1C4B47;
            border: 1px solid #979797;
            border-radius: 4px;
            width: 185px;
            height: 44px;
            margin-top:50px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 600;
            outline: none;
        }
    }
</style>