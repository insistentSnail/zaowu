<template>
    <div class="header-main">
        <router-link class="search" tag="div" to="/home/search"></router-link>
        <p class="title">ZAOWU造物</p>
        <div class="talk"></div>
        <router-link class="shopCar" to="/home/shopCar">
             <van-goods-action-icon icon="cart-o" :info="goodList.length" />
        </router-link>
    </div>
</template>
<script>
// 引入vuex
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
export default {
    name:"Header",
    computed:{
          //  购物车列表
        ...mapState({
            goodList:state=>state.shopCar.goodList,
        }),
    }
}
</script>
<style lang="scss" scoped>
    .header-main{
        width: 100%;
        height: 40px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        background-color: #f5f5f5;
        .search{
            width: 20px;
            height: 20px;
            background:url("../assets/imgs/icons/search.png");
            background-size:100% 100%;
            position:absolute;
            left: 20px;
            top: 10px;
        }
        .title{
            font-size: 20px;
            color: #000;
            height: 40px;
            line-height: 40px;
        }
        .talk{
            width: 20px;
            height: 20px;
            background:url("../assets/imgs/icons/chat.png");
            background-size:100% 100%;
            position:absolute;
            top: 10px;
            right: 55px;
        }
        .shopCar{
            width: 24px;
            height: 24px;
            // background:url("../assets/imgs/icons/cart.png");
            // background-size:100% 100%;
            position:absolute;
            display: block;
            top: 10px;
            right: 20px;
            .van-goods-action-icon{
                width: 100%;
                height: 100%;
                background-color: #f5f5f5;
            }
        }
    }
</style>