<template>
    <BaseLayer>
        <template v-solt:default>
            <div class="recommend-main">
                <div class="cards">
                    <div class="card">
                        <img src="../../../assets/imgs/find/good1.png" alt="">
                        <p class="en">NEIWAI2019秋冬 | 针织新品优惠</p>
                        <p class="ch">和Jennifer领略NEIWAI，感受自潮不熄</p>
                    </div>
                    <div class="card">
                        <img src="../../../assets/imgs/find/good2.png" alt="">
                        <p class="en">Paola Paronetto | 手作摆件艺术</p>
                        <p class="ch">这个开启丹麦设计新时代的品牌值得Pick</p>
                    </div>
                    <div class="card">
                        <img src="../../../assets/imgs/find/good3.png" alt="">
                        <p class="en">Hot Wind | 热风</p>
                        <p class="ch">新时代的弄潮</p>
                    </div>
                    <div class="card" v-for="item in list" :key="item.id">
                        <img :src="item.img" alt="">
                        <p class="en">{{item.en}} | {{item.ch}}</p>
                        <p class="ch">{{item.text}}</p>
                    </div>
                </div>
            </div>  
        </template>
    </BaseLayer>
</template>
<script>
// 存在问题 子路由共用高度  解决方法,在两个子路由组件中分别用Better-Scroll
// 引入Mock模拟的数据
import Mock from '@/mock/mock.js';
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
export default {
    name:"Recommend",
    components:{
        BaseLayer
    },
    data() {
        return {
            list:[]
        }
    },
    created(){
        this.int();
        if(this.$root.$BScroll){
            this.$root.$BScroll.scrollTo(0,0,0);
        };
    },
    methods:{
        int(){
            this.list=Mock.getMock();
            console.log("Mock数据==",this.list);
        }
    }
}
</script>
<style lang="scss" scoped>
    .recommend-main{
        width: 100%;
        .cards{
            padding-top: 40px;
            width: 100%;
            padding-bottom:100px;
            .card{
                width: 100%;
                height: 240px;
                img{
                    width: 100%;
                    height: 160px;
                }
                .en{
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #010E0D;
                    letter-spacing: 0.82px;
                    text-align: center;
                    font-weight: 600;
                    line-height: 30px;
                }
                .ch{
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #494949;
                    letter-spacing: 0.82px;
                    text-align: center;
                    line-height: 20px;
                }
            }
        }
    }
</style>