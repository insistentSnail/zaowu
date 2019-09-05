<template>
     <BaseLayer>
        <template v-solt:default>
        <div class="recommend-main">
            <div class="cards">
                <div class="card" v-for="item in list" :key="item.id">
                    <p class="title">{{item.title}}</p>
                    <p class="time">{{item.date}}</p>
                    <p class="text">{{item.text}}</p>
                    <img :src="item.img" alt="">
                    <div class="icon">
                        <div class="eye">
                            <img src="../../../assets/imgs/icons/view-count.png" alt="">
                            <span>{{item.num1}}</span>
                        </div>
                        <div class="pink">
                            <img src="../../../assets/imgs/icons/comment-count.png" alt="">
                            <span>{{item.num2}}</span>
                        </div>
                        <div class="edit">
                            <img src="../../../assets/imgs/icons/zan-count.png" alt="">
                            <span>{{item.num3}}</span>
                        </div>
                    </div>
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
    name:"Artical",
     components:{
        BaseLayer
    },
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.int();
        if(this.$root.$BScroll){
            this.$root.$BScroll.scrollTo(0,0,0); //子路由之间切换回到顶部
        };
    },
    methods:{
        int(){
            this.list=Mock.getArticle();
            console.log("Mock==",this.list);
        }
    }
}
</script>
<style lang="scss" scoped>
    .recommend-main{
        .cards{
            padding: 40px 20px 100px;
            background-color:#f5f5f5;
            box-sizing: border-box;
            .card{
                width: 100%;
                height: 400px;
                margin-top: 20px;
                background-color: #fff;
                text-align: center;
                overflow: hidden;
                .title{
                    font-size:18px;
                    color: #000;
                    font-weight: 700;
                    text-indent: 10px;
                    line-height: 30px;
                    text-align: left;
                }
                .time{
                    font-size: 14px;
                    color: #666;
                    text-indent: 10px;
                    line-height: 20px;
                    text-align: left;
                }
                .text{
                    font-size: 16px;
                    color: #666;
                    text-indent: 10px;
                    line-height: 22px;
                    text-align: left;
                }
                img{
                    text-indent: 10px;
                }
                .icon{
                    width: 100%;
                    height: 20px;
                    position: relative;
                    .eye{
                        height: 20px;
                        width: 50px;
                        position: absolute;
                        left: 10px;
                        line-height: 20px;
                        img{
                            width: 16px;
                        }
                        span{
                            margin: 0 5px;
                        }
                    }
                    .edit{
                        height: 20px;
                        width: 40px;
                        position: absolute;
                        right: 10px;
                        line-height: 20px;
                        img{
                            width: 16px;
                            height: 16px;
                        }
                        span{
                            margin: 0 5px;
                        }
                    }
                    .pink{
                        height: 20px;
                        width: 40px;
                        position: absolute;
                        right:50px;
                        line-height: 20px;
                        img{
                            width: 16px;
                            height: 16px;
                        }
                        span{
                            margin: 0 5px;
                        }
                    }
                }
            }
        }
    }
</style>