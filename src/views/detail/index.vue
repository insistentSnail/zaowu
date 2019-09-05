<template>
    <div class="detail-main">
       <div class="header">
           <div class="header-1">
               <div class="zjt" @click="$router.go(-1)"></div>
               <p>商品详情</p>
               <div class="share"></div>
               <div class="car" @click="$router.push('/home/shopCar')">
                    <van-goods-action-icon icon="cart-o" :info="goodList.length" />
               </div>
           </div>
           <div class="nav">
               <router-link class="info" :to="{name:'info'}">详情</router-link>
               <router-link class="comment" :to="{name:'comment'}">评价</router-link>
           </div>
       </div>
        <router-view></router-view>
        <van-popup v-model="show" position="bottom" class="mask">
            <div class="good" v-for="item in List" :key="item.id">
                <img :src="item.img" alt="">
                <div class="info">
                    <div class="close" @click="show=false"></div>
                    <p class="name">{{item.en}}</p>
                    <p class="describe">{{item.ch}}</p>
                    <p class="price">¥{{item.price}}</p>
                    <p class="inventory">仅剩{{item.num}}件</p>
                </div>
            </div>
            <div class="color">
                <p>颜色</p>
                <div class="color-select">
                    <div :class="`color1${submitList.color=='灰色'?' active':''}`" @click="selectColor(form.color1)"></div>
                    <div :class="`color2${submitList.color=='黑色'?' active':''}`" @click="selectColor(form.color2)"></div>
                </div>
            </div>
            <div class="size">
                <p>规格</p>
                <div class="size-select">
                    <div :class="`size1${submitList.size=='S'?' active':''}`" @click="selectSize(form.size1)">S</div>
                    <div :class="`size2${submitList.size=='M'?' active':''}`" @click="selectSize(form.size2)">M</div>
                    <div :class="`size3${submitList.size=='L'?' active':''}`" @click="selectSize(form.size3)">L</div>
                </div>
            </div>
            <div class="count">
                <p>数量</p>
                <div class="count-select">
                    <div class="reduce" @click="reduce()">-</div>
                    <div class="num">{{form.num}}</div>
                    <div class="plus" @click="add()">+</div>
                </div>
            </div>
            <button class="submit" @click="submit">确定</button>
        </van-popup>
        <div class="footer">
            <div class="like"></div>
            <div class="kf"></div>
            <button class="addCar" @click="showAdd">加入购物车</button>
            <van-button class="buy" @click="showBuy">立即购买</van-button>
        </div>
    </div>  
</template>
<script>
// 引入vuex
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
export default {
    name:"Detail",
    data() {
        return {
            show: false,
            form:{
                color1:"灰色",
                color2:"黑色",
                size1:"S",
                size2:"M",
                size3:"L",
                num:0,
                isBuy:true,
            },
            // 用户选择提交的数据
            submitList:{
                color:"",
                size:"",
                img:require("@/assets/imgs/cart/1.png"),
                en:"CRYSTALS",
                ch:"情趣内衣",
                price:219,
                num:"",
                isChecked:false,
                id:4
            }
        }
    },
    created(){
        console.log(this.$route.params.id);
    },
    computed:{
        ...mapState({
            List:state=>state.shopCar.List,
            goodList:state=>state.shopCar.goodList,
        }),
    },
    methods:{
        ...mapMutations({
           addCar:"shopCar/addCar",
           buy:"shopCar/buy"
        }),
        // 点击加入购物车打开弹窗
         showAdd() {
             this.show = true;
             this.form.isBuy=false;
             console.log("点击加入购物车",this.form)
        },
        // 点击立即购买打开弹窗
        showBuy(){
            this.show = true;
            this.form.isBuy=true; 
            console.log("点击立即购买",this.form)
        },
        // 点击确定按钮  加入购物车
        submit(){
            this.show = false; 
            // 是购买
            if(this.form.isBuy){
                this.buy(this.submitList);
                window.localStorage.setItem("buyList",JSON.stringify(this.submitList));
                this.$router.push("/buy");
            }else{
                this.addCar(this.submitList);
            // 是添加进购物车
                // window.localStorage.setItem("addList",JSON.stringify(this.submitList));
            }
        },
        // 挑选颜色
        selectColor(color){
            console.log("选择了",color);
            this.submitList.color=color;
        },
        // 挑选尺寸
        selectSize(size){
            console.log("选择了",size,"码");
            this.submitList.size=size;
        },
        // 减操作
        reduce(){
            if(this.form.num==0){
                return
            }else{
                // this.List[0].num++;//库存++
                this.form.num--;//准备添加购物车数量--
            }
            this.submitList.num=this.form.num;
        },
        // 加操作
        add(){
            if(this.form.num<this.List[0].num){
                // this.List[0].num--;//库存--
                this.form.num++;//准备添加购物车数量++
                this.submitList.num=this.form.num;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .active{
        border:2px solid #f40;
    }
    // 弹窗样式
    .mask{
        width: 335px;
        height: 480px;
        margin-left: 20px;
        margin-bottom:45px;
        border-radius: 10px;
        .good{
            width: 100%;
            height: 144px;
            padding: 15px;
            box-sizing: border-box;
            position: relative;
            display: flex;
            justify-content: space-between;
            img{
                width: 114px;
                height: 114px;;
            }
            .info{
                width: 160px;
                text-align: left;
                position: relative;
                .name{
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 24px;
                }
                .describe{
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 24px;
                }
                .price{
                    font-family: PingFangSC-Medium;
                    font-size: 16px;
                    color: #010E0D;
                    letter-spacing: 0;
                    line-height: 32px;
                }
                .inventory{
                    font-family: PingFangSC-Light;
                    font-size: 14px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 28px;
                }
                .close{
                    width: 20px;
                    height: 20px;
                    background:url("../../assets/imgs/detail/close.png");
                    background-size:100% 100%;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
        .color{
            height: 100px;
            padding: 15px;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            p{
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0;
                line-height: 21px;
                text-align: left;
            }
            .color-select{
                display: flex;
                .color1{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    background-color:#ebe7dc;
                }
                .color2{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    background-color:#000;
                    margin-left: 15px;
                }
            }
        }
        .size{
            height: 100px;
            padding: 15px;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            p{
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0;
                line-height: 21px;
                text-align: left;
            }
            .size-select{
                display: flex;
            .size1{
                width: 35px;
                height: 35px;
                background-color:#fff;
                box-shadow: 0 5px 3px 0 #e9e9e9;
                font-family: PingFangSC-Light;
                font-size: 16px;
                color: #000000;
                letter-spacing: 0;
                font-weight: 600;
                line-height: 35px;
                }
            .size2{
                    width: 35px;
                    height: 35px;
                    background-color:#fff;
                    margin-left: 15px;
                    box-shadow: 0 5px 3px 0 #e9e9e9;
                    font-family: PingFangSC-Light;
                    font-size: 16px;
                    color: #000000;
                    letter-spacing: 0;
                    font-weight: 600;
                    line-height: 35px;
                }
            .size3{
                    width: 35px;
                    height: 35px;
                    background-color:#fff;
                    margin-left: 15px;
                    box-shadow: 0 5px 3px 0 #e9e9e9;
                    font-family: PingFangSC-Light;
                    font-size: 16px;
                    color: #000000;
                    letter-spacing: 0;
                    font-weight: 600;
                    line-height: 35px;
                }
            }
        }
        .count{
            height: 80px;
            padding: 15px;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
               p{
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0;
                line-height: 21px;
                text-align: left;
            }
             .count-select{
                    display: flex;
                    .reduce{
                        width: 20px;
                        height: 20px;
                        background-color:#fff;
                        box-shadow: 0 3px 3px 0 #e9e9e9;
                        font-family: PingFangSC-Light;
                        font-size: 14px;
                        color: #000000;
                        letter-spacing: 0;
                        font-weight: 600;
                        line-height: 20px;
                    }
                    .num{
                        width: 30px;
                        height: 20px;
                        background-color:#fff;
                        box-shadow: 0 3px 3px 0 #e9e9e9;
                        font-family: PingFangSC-Light;
                        font-size: 14px;
                        color: #000000;
                        letter-spacing: 0;
                        font-weight: 600;
                        line-height: 20px;
                        margin: 0 7px;
                    }
                    .plus{
                        width: 20px;
                        height: 20px;
                        background-color:#fff;
                        box-shadow: 0 3px 3px 0 #e9e9e9;
                        font-family: PingFangSC-Light;
                        font-size: 14px;
                        color: #000000;
                        letter-spacing: 0;
                        font-weight: 600;
                        line-height: 20px;
                    }
                }
        }
        .submit{
            width: 177px;
            height: 40px;
            background: #1C4B47;
            border-radius: 4px;
            font-family: PingFangSC-Light;
            font-size: 15px;
            color: #FFFFFF;
            letter-spacing: 0;
            border: none;
            outline: none;
        }
    }
    // 主体内容
    .detail-main{
        height:100%;
        .header{
            width: 100%;
            height: 80px;
            position: fixed;
            top: 0;
            left:0;
            z-index: 99;
            background-color: #fff;
            .header-1{
                width: 100%;
                height: 40px;
                padding: 0 20px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                p{
                    margin-left:110px;
                    font-family: PingFangSC-Regular;
                    font-size: 18px;
                    color: #010E0D;
                    letter-spacing: 0;
                }
                .zjt{
                    width: 20px;
                    height: 20px;
                    background:url("../../assets/imgs/icons/arr-l.png");
                    background-size: 100% 100%;
                }
                .share{
                    width: 20px;
                    height: 20px;
                    background:url("../../assets/imgs/icons/share.png");
                    background-size: 100% 100%;
                    margin-left: 70px;
                }
                .car{
                    width: 20px;
                    height: 20px;
                    // background:url("../../assets/imgs/icons/cart.png");
                    background-size: 100% 100%;
                    margin-left: 20px;
                    .van-goods-action-icon{
                        width: 100%;
                        height: 100%;
                        margin-top: 5px;
                        justify-content: flex-start;
                    }
                }
            }
            .nav{
                width: 100%;
                height: 40px;
                padding: 0 20px;
                box-sizing: border-box;
                display: flex;
                align-items: center; 
                justify-content: space-between;
                .router-link-active{
                    font-weight: 700;
                    color: #000;
                }
                .info{
                    width: 50%;
                    height: 100%;
                    display: block;
                    line-height:40px;
                    font-family: PingFangSC-Regular;
                    font-size: 17px;
                    color: #1C4B47;
                    letter-spacing: 0;
                }
                .comment{
                    width: 50%;
                    height: 100%;
                    display: block;
                    line-height:40px;
                    font-family: PingFangSC-Regular;
                    font-size: 17px;
                    color: #1C4B47;
                    letter-spacing: 0;
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
            left:0;
            z-index: 99;
            background-color: #fff;
            display: flex;
            align-items: center;
            .like{
                width: 25px;
                height: 25px;
                background:url("../../assets/imgs/icons/like.png");
                background-size:100% 100%;
                margin-right: 20px;
            }
            .kf{
                width: 25px;
                height: 25px;
                background:url("../../assets/imgs/icons/kf.png");
                background-size:100% 100%;
                margin-right: 35px;
            }
            .addCar{
                height: 100%;
                width: 100px;
                border: 1px solid #1C4B47;
                border-radius: 4px;
                background-color: #fff;
                outline: none;
                font-family: PingFangSC-Light;
                font-size: 15px;
                color: #1C4B47;
                letter-spacing: 0;
                margin-right: 10px;
            }
            .buy{
                height: 100%;
                width: 100px;
                border-radius: 4px;
                background-color: #1C4B47;
                outline: none;
                border: none;
                font-family: PingFangSC-Light;
                font-size: 15px;
                color: #fff;
                letter-spacing: 0;
            }
        }
    }
</style>