<template>
    <div class="home-main">
        <Header></Header>
        <BaseLayer>
            <template v-slot:default>
                <!-- banner轮播 -->
                <div class="banner">
                    <div class="swiper-title">
                        <div :class="`title-1${activeClass==1?' active':''}`" @click="addActive(1)">推荐</div>
                        <div :class="`title-1${activeClass==2?' active':''}`" @click="addActive(2)">活动</div>
                        <div :class="`title-1${activeClass==3?' active':''}`" @click="addActive(3)">品牌</div>
                        <div :class="`title-1${activeClass==4?' active':''}`" @click="addActive(4)">定制</div>
                    </div>
                    <swiper :options="swiperOption" class="banner-swiper" @transitionEnd="foo" ref="presell">
                        <swiper-slide><img src="../../assets/imgs/home/swiper-1.png"></swiper-slide>
                        <swiper-slide><img src="../../assets/imgs/home/swiper-2.png"></swiper-slide>
                        <swiper-slide><img src="../../assets/imgs/home/swiper-3.png"></swiper-slide>
                        <swiper-slide><img src="../../assets/imgs/home/swiper-2.png"></swiper-slide>
                    </swiper>
                </div> 
                <!-- 版心 -->
                <div class="main-c">
                     <div class="common-title">
                        <div class="time">TUE 9.20</div>
                        <div class="time-ch">周二品质生活专题</div>
                    </div>
                    <a href="" class="bg1">
                        <img src="../../assets/imgs/home/bg1.png" alt="">
                    </a>
                    <div class="goods">
                        <div class="good-1">
                            <img src="../../assets/imgs/home/goods1.png" alt="">
                            <p class="goodsName">精油香氛</p>
                            <p class="price">¥344</p>
                        </div>
                         <div class="good-1">
                            <img src="../../assets/imgs/home/goods2.png" alt="">
                            <p class="goodsName">山居猎奇</p>
                            <p class="price">¥344</p>
                        </div>
                         <div class="good-1">
                            <img src="../../assets/imgs/home/goods3.png" alt="">
                            <p class="goodsName">北欧国度</p>
                            <p class="price">¥344</p>
                        </div>
                         <div class="good-1">
                            <img src="../../assets/imgs/home/goods4.png" alt="">
                            <p class="goodsName">卡洛卡陶瓷碗盘</p>
                            <p class="price">¥344</p>
                        </div>
                    </div>
                     <div class="common-title">
                        <div class="time">TUE 9.20</div>
                        <div class="time-ch">周一品质生活专题</div>
                    </div>
                    <div class="displayGoods">
                        <img src="../../assets/imgs/home/p1.png" alt="">
                        <img src="../../assets/imgs/home/p2.png" alt="">
                        <img src="../../assets/imgs/home/p3.png" alt="">
                        <img src="../../assets/imgs/home/p4.png" alt="">
                        <img src="../../assets/imgs/home/p5.png" alt="">
                        <img src="../../assets/imgs/home/p6.png" alt="">
                        <img src="../../assets/imgs/home/p7.png" alt="">
                        <img src="../../assets/imgs/home/p8.png" alt="">
                    </div>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
// 引入头部组件
import Header from "@/components/header";
// 引入轮播插件
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    name:"Home",
    components:{
        BaseLayer,
        Header,
        swiper,
        swiperSlide
    },
    data() {
        return {
            // 轮播数据
             swiperOption: {
                slidesPerView: 1.2,
                centeredSlides:true,//居中
            },
            activeClass:1,
        }
    },
    methods:{
        // 轮播事件
        addActive(index){
            this.activeClass=index;//点谁给谁加样式
            this.$refs.presell.swiper.slideTo(index-1, 1000, false);//轮播图滚到相对应的位置
        },
        foo(e){
            console.log(this.$refs.presell.swiper.activeIndex);
            var index=this.$refs.presell.swiper.activeIndex;
            this.activeClass=index+1;//轮播图移动到哪个位置给对应的字加样式
        }
    }
}
</script>
<style lang="scss">
    .home-main{
        height: 100%;
    }
    .baselayer-main{
        height: 100%;//不用写padding,在插槽里面的内容写即可
    }
    // 激活样式
    .active{
        color: #3a817b;
    }
    // banner轮播
    .banner{
        padding-top: 40px;
         .swiper-title{
      
        width: 72%;
        margin:0 auto;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
        }
        .banner-swiper{
            width:100%;
            height: 392px;
            img{
                width: 285px;
            }
        }
    }
    // 版心
    .main-c{
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
        // 公共标题
        .common-title{
            width: 100%;
            height: 48px;
            text-align: center;
            .time{
                font-size: 18px;
                color: #010e0d;
                line-height: 28px;
            }
            .time-ch{
                color: #494949;
                font-size: 14px;
                line-height: 20px;
            }
        }
        .bg1{
            display: block;
            width: 100%;
            height: 221px;
            padding:10px 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .goods{
            width: 100%;
            height: 110px;
            display: flex;
            justify-content: space-between;
            margin-bottom:20px;
            img{
                width: 79px;
                height: 79px;
            }
            p{
                line-height:15px;
            }
        }
        .displayGoods{
            margin-top: 20px;
            width: 100%;
            height: 170px;
            padding-bottom: 100px;
            display: flex;
            justify-content:space-between;
            flex-flow: wrap;
            img{
                width: 79px;
                height: 79px;
            }
        }
    }
</style>