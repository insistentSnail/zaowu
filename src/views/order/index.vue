<template>
    <div class="myOrder-main">
        <div class="header">
            <div class="top">
                <div class="zjt" @click="$router.go(-1)"></div>
                <p>我的订单</p>
                <div class="search" @click="$router.push('/home/search')"></div>
            </div>
            <div class="bottom">
                <div :class="`all${activeClass==1?' active':''}`" @click="addActive(1)">待付款</div>
                <div :class="`obligation${activeClass==2?' active':''}`" @click="addActive(2)">已付款</div>
                <div :class="`received${activeClass==3?' active':''}`" @click="addActive(3)">已完成</div>
                <div :class="`finished${activeClass==4?' active':''}`" @click="addActive(4)">申请退款</div>
            </div>
        </div>
        <BaseLayer ref="layer">
            <template v-solt:default>
                <div class="orderSwiper">
                    <swiper :option="swiperOption" @transitionEnd="foo" ref="presell" class="banner-swiper">
                        <!-- 给swiper-slide加类名 它下面的样式不生效 -->
                        <swiper-slide>
                            <ul>
                                <li class="good" v-for="item in list" :key="item.id">
                                    <div class="top">
                                        <span class="top-l">订单编号:{{item.id}}</span>
                                        <span class="top-r">待付款</span>
                                    </div>
                                    <div class="center">
                                        <img src="../../assets/imgs/cart/1.png" alt="">
                                        <div class="text">
                                            <p>
                                                <span class="en">{{item.addTime}}</span>
                                                <span class="price">¥ {{item.price}}</span>
                                            </p>
                                            <p>
                                                <span class="ch">{{item.username}}</span>
                                                <span class="count">X {{item.count}}</span>
                                            </p>
                                            <p class="totalPrice">合计: ¥{{item.count*item.price}}元</p>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <button>查看物流</button>
                                        <button>确认收货</button>
                                    </div>
                                </li>
                            </ul>
                        </swiper-slide>
                        <swiper-slide>
                            <ul>
                               <li class="good" v-for="item in list" :key="item.id">
                                    <div class="top">
                                        <span class="top-l">订单编号:{{item.id}}</span>
                                        <span class="top-r">已付款</span>
                                    </div>
                                    <div class="center">
                                        <img src="../../assets/imgs/cart/1.png" alt="">
                                        <div class="text">
                                            <p>
                                                <span class="en">{{item.addTime}}</span>
                                                <span class="price">¥ {{item.price}}</span>
                                            </p>
                                            <p>
                                                <span class="ch">{{item.username}}</span>
                                                <span class="count">X {{item.count}}</span>
                                            </p>
                                            <p class="totalPrice">合计: ¥{{item.count*item.price}}元</p>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <button>查看物流</button>
                                        <button>确认收货</button>
                                    </div>
                                </li>
                            </ul>
                        </swiper-slide>
                        <swiper-slide>
                            <ul>
                                <li class="good" v-for="item in list" :key="item.id">
                                    <div class="top">
                                        <span class="top-l">订单编号:{{item.id}}</span>
                                        <span class="top-r">已完成</span>
                                    </div>
                                    <div class="center">
                                        <img src="../../assets/imgs/cart/1.png" alt="">
                                        <div class="text">
                                            <p>
                                                <span class="en">{{item.addTime}}</span>
                                                <span class="price">¥ {{item.price}}</span>
                                            </p>
                                            <p>
                                                <span class="ch">{{item.username}}</span>
                                                <span class="count">X {{item.count}}</span>
                                            </p>
                                            <p class="totalPrice">合计: ¥{{item.count*item.price}}元</p>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <button>查看物流</button>
                                        <button>确认收货</button>
                                    </div>
                                </li>
                            </ul>
                        </swiper-slide>
                        <swiper-slide>
                            <ul>
                                <li class="good" v-for="item in list" :key="item.id">
                                    <div class="top">
                                        <span class="top-l">订单编号:{{item.id}}</span>
                                        <span class="top-r">申请退款</span>
                                    </div>
                                    <div class="center">
                                        <img src="../../assets/imgs/cart/1.png" alt="">
                                        <div class="text">
                                            <p>
                                                <span class="en">{{item.addTime}}</span>
                                                <span class="price">¥ {{item.price}}</span>
                                            </p>
                                            <p>
                                                <span class="ch">{{item.username}}</span>
                                                <span class="count">X {{item.count}}</span>
                                            </p>
                                            <p class="totalPrice">合计: ¥{{item.count*item.price}}元</p>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <button>查看物流</button>
                                        <button>确认收货</button>
                                    </div>
                                </li>
                            </ul>
                        </swiper-slide>
                    </swiper>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from '@/components/baseLayer'
// 引入轮播组件
import 'swiper/dist/css/swiper.css';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
// 引入订单api
import orderApi from '@/api/order/order.js';
// 引入Mock
import Mock from '@/mock/mock.js';
export default {
    name:"Order",
    components:{
        swiper,
        swiperSlide,
        BaseLayer
    },
    data() {
        return {
            swiperOption:{
                centeredSlides:true,
                loop:true //无效
            },
            activeClass:1,
            // list1:[],
            // list2:[],
            // list3:[],
            // list4:[],
            list:[],
            id:""
        }
    },
    created(){
        // this.list1=Mock.myOrder();// 回退问题
        // this.list2=Mock.myOrder2();
        // this.list3=Mock.myOrder3();
        // this.list4=Mock.myOrder4();
        this.id=window.localStorage.getItem("userId");
        console.log("用户名",this.id);
        this.getlist1(this.activeClass-1);
    },
    methods:{
        // 获取订单列表
        // 待付款订单
        getlist1(index){
            if(index==3){
                index=9;
            }
            console.log("status==",index);
            orderApi.searchOrder({
                userId:this.id,
                status:index
            })
            .then(res=>{
                console.log("代付款订单",res);
                this.list=res.data.list;
            })
        },
        foo(e){
            // 每次滚动也得重新计算高度
            var index=this.$refs.presell.swiper.activeIndex;
            console.log(index);
            this.activeClass=index+1;
            this.getlist1(this.activeClass-1);
             this.refresh();
        },
        addActive(index){
            // 每次点击得重新计算高度 这里是轮播,所以会取最长的高度,重新计算也没用 
            //解决办法写4个better-scroll
            this.activeClass=index;
            this.getlist1(this.activeClass-1);
            this.$refs.presell.swiper.slideTo(index-1,1000,false);
            this.refresh();
        },
        refresh(){
            this.$nextTick(()=>{
                this.$refs.layer.$BScroll.refresh();
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .myOrder-main{
        height: 100%;
       .header{
        width: 100%;
        height: 80px;
        padding: 0 20px;
        box-sizing:border-box;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        background-color: #f9f9f9;
        .top{
            height: 40px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .zjt{
                width: 20px;
                height: 20px;
                background:url("../../assets/imgs/icons/arr-l.png");
                background-size: 100% 100%;
            }
            .search{
                width: 20px;
                height: 20px;
                background:url("../../assets/imgs/icons/search.png");
                background-size: 100% 100%;
            }
            p{
                font-family: PingFangSC-Regular;
                font-size: 18px;
                color: #151515;
                letter-spacing: 0;
                font-weight: 600;
            }
        }
        .bottom{
            height: 40px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center; 
            .all{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #151515;
                letter-spacing: 0;
            }
            .all.active{
                font-weight: 600;
                color: #1C4B47;
            }
            .obligation{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #151515;
                letter-spacing: 0;
            }
            .obligation.active{
                font-weight: 600;
                color: #1C4B47;
            }
            .received{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #151515;
                letter-spacing: 0;
            }
            .received.active{
                font-weight: 600;
                color: #1C4B47;
            }
            .finished{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #151515;
                letter-spacing: 0;
            }
            .finished.active{
                font-weight: 600;
                color: #1C4B47;
            }
        }
       }
       .orderSwiper{
           padding-top: 80px;
           width:100%;
           background-color:#f9f9f9;
           .banner-swiper{
               width: 100%;
                .good{
                    width: 335px;
                    height: 186px;
                    margin:20px;
                    background-color: #fff;
                    .top{
                        height: 40px;
                        width: 100%;
                        padding: 0 10px;
                        box-sizing: border-box;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .top-l{
                            font-family: PingFangSC-Light;
                            font-size: 10px;
                            color: #494949;
                            letter-spacing: 0;
                        }
                        .top-r{
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            color: #034C46;
                            letter-spacing: 0;
                            font-weight: 600;
                        }
                    }
                    .center{
                        height: 80px;
                        width: 100%;
                        padding: 0 10px;
                        box-sizing: border-box;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        img{
                            height: 78px;
                            width: 78px;
                        }
                        .text{
                            height: 80px;
                            width: 220px;
                            text-align: left;
                            p{
                                height:25px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                font-family: PingFangSC-Light;
                                font-size: 14px;
                                color: #494949;
                                letter-spacing: 0;
                            }
                            .totalPrice{
                                justify-content: flex-end;
                            }
                        }
                    }
                    .bottom{
                        margin-top:15px;
                        height: 30px;
                        width: 100%;
                        padding: 0 10px;
                        box-sizing: border-box;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        button{
                            border: 1px solid #999999;
                            border-radius: 100px;
                            width: 78px;
                            height: 28px;
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #494949;
                            letter-spacing: 0;
                            background-color: #fff;
                            outline: none;
                            margin-left: 8px;
                        }
                    }
                }
           }
       }
    }
</style>