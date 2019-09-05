<template>
    <div class="success-main">
        <div class="header">
            <div class="zjt" @click="$router.go(-1)"></div>
        </div>
        <div class="success">
        </div>
        <p class="text">恭喜你支付成功</p>
        <button class="order" @click="$router.push('/order')">查看我的订单</button>
        <button class="home" @click="$router.push('/')">返回首页</button>
    </div>
</template>
<script>
export default {
    name:"BuySuccess"
}
</script>
<style lang="scss" scoped>
    .success-main{
        position: relative;
        height: 100%;
        .header{
        width: 100%;
        height: 40px;
        position: fixed;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 99;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .zjt{
            width: 20px;
            height: 20px;
            background: url("../../../assets/imgs/icons/arr-l.png");
            background-size: 100% 100%;
        }
    }
    .success{
        width: 88px;
        height: 88px;
        position: fixed;
        top: 130px;
        left: calc(50% - 44px);
        background:url("../../../assets/imgs/buy/success.png");
        background-size: 100% 100%;
    }
    .text{
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #494949;
        letter-spacing: 0;
        height: 30px;
        position: fixed;
        top: 250px;
        left:50%;
        transform: translateX(-50%);
    }
    .order{
        width: 229px;
        height: 57px;
        background: #1C4B47;
        border-radius: 4px;
        line-height: 57px;
        outline: none;
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 600;
        border:none;
        position: fixed;
        top: 330px;
        left:calc(50% - 114px);//两边要有空格
    }
    .home{
        border: 1px solid #999;
        border-radius: 4px;
        width: 229px;
        height: 57px;
        outline: none;
        background-color: #fff;
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #999;
        letter-spacing: 0;
        font-weight: 600;
        position: fixed;
        top: 420px;
        left:calc(50% - 114px);//两边要有空格
    }
}
</style>