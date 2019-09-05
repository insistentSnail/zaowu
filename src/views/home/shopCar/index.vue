<template>
    <div class="shopCar-main">
        <div class="header">
            <div class="zjt" @click="$router.go(-1)"></div>
            <p>购物车</p>
        </div>
        <BaseLayer>
            <template v-solt:default>
                <ul class="carList">
                    <li v-for="item in goodList" :key="item.id">
                        <div class="checkbox">
                            <!-- 不能直接在当前页面修改vux的数据 -->
                            <input type="checkbox" :checked="item.isChecked" @click="check(item.id)"> 
                        </div>
                        <router-link :to="{name:'detail',params:{id:item.id}}" class="good">
                            <img :src="item.img" alt="">
                        </router-link>
                        <div class="right">
                            <p>{{item.en}}</p>
                            <p>{{item.ch}}</p>
                            <div class="price">
                                <span class="goodPrice">¥{{item.price}}</span>
                                <div class="count">
                                    <span class="reduce" @click="reduce(item.id)"></span>
                                    <span class="num">{{item.num}}</span>
                                    <span class="add" @click="add(item.id)"></span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="maybeLike">
                    <span class="line"></span>
                    <span class="title">你可能还会喜欢</span>
                    <span class="line"></span>
                </div>
                <div class="likeGoods">
                    <div class="good">
                        <a href="">
                            <img src="@/assets/imgs/cart/goods1.png" alt="">
                        </a>
                    </div>
                    <div class="good">
                         <a href="">
                            <img src="@/assets/imgs/cart/goods2.png" alt="">
                        </a>
                    </div>
                </div>
            </template>
        </BaseLayer>
        <div class="footer">
            <div class="footer-l">
                 <label for="" @click="allCheck">
                    <input type="checkbox" :checked="allChecked">
                    全选
                </label>
            </div>
           <div class="footer-r">
               <span class="totalPrice">总价: ¥ {{totalPrice}}</span>
               <button>立即购买</button>
           </div>
        </div>
    </div>
</template>
<script>
// 引入vuex
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
export default {
    name:"shopCar",
    components:{
        BaseLayer
    },
    computed:{
        //  购物车列表
        ...mapState({
            goodList:state=>state.shopCar.goodList,
        }),
        ...mapGetters({
        allChecked:"shopCar/allChecked",//全选 shopCar模块下的allChecked属性
        totalPrice:"shopCar/totalPrice"//总价
        })
    },
    methods:{
        ...mapMutations({
            allCheck:"shopCar/allCheck",//点击全选按钮
            reduce:"shopCar/reduce",//减操作
            add:"shopCar/add",//加操作
            check:"shopCar/check"//勾选操作
        })
    },
    updated(){
        console.log(this.goodList);
    },
    created() {
        // console.log(JSON.parse(window.localStorage.getItem("addList")));
        // var obj=JSON.parse(window.localStorage.getItem("addList"));
        // this.goodList.push(obj);
    },
    data() {
        return {
          
        }
    },
}
</script>
<style lang="scss" scoped>
    .shopCar-main{
        height: 100%;
        background-color:#f4f4f4;
        .header{
            height:40px;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            position:fixed;
            line-height:40px;
            z-index: 99;
            background-color:#f4f4f4;
            .zjt{
                width: 20px;
                height: 20px;
                background:url("../../../assets/imgs/icons/arr-l.png");
                background-size: 100% 100%;
                position: absolute;
                left:20px;
                top:10px;
            }
            p{
                font-family: PingFangSC-Regular;
                font-size: 18px;
                color: #010E0D;
                letter-spacing: 0;
                text-align: center;
            }
        }
        .carList{
            padding-top: 40px;
            width: 100%;
            height: 100%;
            li{
                width: 293px;
                height: 84px;
                padding: 15px 20px;
                background: #fff;
                margin: 20px auto;
                position: relative;
                .checkbox{
                    width: 14px;
                    height: 14px;
                    position: absolute;
                    left:20px;
                    top:50%;
                    transform: translateY(-50%);
                }
                .good{
                    width: 76px;
                    height: 76px;
                    display: block;
                    position: absolute;
                    left:50px;
                    top:50%;
                    transform: translateY(-50%);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    height: 76px;
                    width: 170px;
                    position: absolute;
                    right:25px;
                    top:50%;
                    transform: translateY(-50%);
                    p{
                        font-family: PingFangSC-Light;
                        font-size: 12px;
                        color: #494949;
                        letter-spacing: 0;
                        text-align:left;
                        line-height: 20px;
                    }
                    .price{
                        width: 100%;
                        height: 30px;
                        text-align: left;
                        line-height: 30px;
                        position: relative;
                        .goodPrice{
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            color: #1C4B47;
                            letter-spacing: 0;
                        }
                        .count{
                            height: 30px;
                            position: absolute;
                            right: 0;
                            top: 0;
                            display: flex;
                            .reduce{
                                display: block;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                background:url("../../../assets/imgs/cart/reduce.png");
                                background-size: 100% 100%;
                            }
                            .num{
                                font-family: PingFangSC-Medium;
                                font-size: 14px;
                                color: #1C4B47;
                                letter-spacing: 0; 
                                margin: 0 10px;
                            }
                            .add{
                                display: block;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                background:url("../../../assets/imgs/cart/plus.png");
                                background-size: 100% 100%;
                            }
                        }
                    }
                }
            }
        }
        .maybeLike{
            margin-top:20px;
            width: 100%;
            height: 30px;
            line-height: 30px;
            position: relative;
            display: flex;
            justify-content: space-between;
            .title{
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #010E0D;
                letter-spacing: 0;
            }
            .line{
                width: 125px;
                height: 2px;
                background: #E5E5E5;
                display: block;
                margin-top: 14px;
            }
        }
        .likeGoods{
            width: 100%;
            height: 208px;
            padding: 0 20px 40px;
            box-sizing: border-box;
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            .good{
                width: 45%;
                height: 100%;
                a{
                    display: block;
                    height: 100%;
                    width: 100%;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
        .footer{
            width: 100%;
            height: 40px;
            padding: 0 20px;
            box-sizing: border-box;
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: #fff;
            z-index: 99;
            .footer-l{
                width: 100px;
                height: 100%;
                line-height: 40px;
                position: absolute;
                left:0;
                top: 0;
            }
            .footer-r{
                width: 250px;
                height: 100%;
                line-height:40px;
                position: absolute;
                right:0;
                top: 0;
                display: flex;
                justify-content: space-around;
                .totalPrice{
                    width: 100px;
                    display: block;
                }
                button{
                    background: #1C4B47;
                    border-radius: 4px;
                    height: 35px;
                    width: 100px;
                    font-family: PingFangSC-Light;
                    font-size: 15px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    outline: none;
                    border: none;
                }
            }
        }
    }
</style>