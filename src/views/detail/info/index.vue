<template>
    <BaseLayer>
        <template v-solt:default>
            <div class="info-main">
                <div class="banner">
                    <swiper :options="swiperOption" class="banner-swiper">
                        <swiper-slide v-for="(item,index) in swiperList" :key="index"><img :src="item"></swiper-slide>
                    </swiper>
                    <!-- 这里注意给图片加个盒子,因为better-scroll不计算图片的高 -->
                    <div class="box">
                        <img src="@/assets/imgs/detail/bigImg.png" alt="">
                    </div>
                </div>
            </div>
        </template>
    </BaseLayer>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
// 引入轮播插件
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    name:"Info",
    components:{
        BaseLayer,
        swiper,
        swiperSlide
    },
    created(){
        console.log("每件商品id",this.$route.params.id);
        this.getGoodsDetail();
    },
    data() {
        return {
            swiperOption: {
                autoplay: true,
                loop : true,//环路
                slidesPerView: 1.3,
                centeredSlides:true,//居中
            },
            swiperList:[]
        }
    },  
    methods:{
        // 获取商品明细
        getGoodsDetail(){
            this.$ajax.get("/api/zaowu/kind/goodsDetail",{
                params:{
                    id:this.$route.params.id
                }
            })
            .then(res=>{
                this.swiperList=res.data.data.imgs;
                console.log("商品详情",res.data.data);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .info-main{
        height: 100%;
        .banner{
            padding-top:90px;
            background-color: #f5f5f5;
            padding-bottom: 45px; //要预留高度必须给最外层盒子加padding
            .banner-swiper{
                height: 346px;
                width: 100%;
                img{
                    height:346px;
                    width:275px;
                }
            }
            .box{
                height: 602px;
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>