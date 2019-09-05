<template>
    <div class="comment-main">
        <BaseLayer>
            <template>
                <ul class="commentList">
                    <li v-for="item in commentList" :key="item.id">
                        <!-- 绑定style需要{} -->
                        <div class="avatar" :style="{background:item.color}"></div>
                        <div class="content">
                            <p class="name">{{item.title}}</p>
                            <p class="time">{{item.time}}</p>
                            <p class="text">
                                {{item.text}}
                            </p>
                        </div>
                    </li>
                </ul>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
// 引入Mock模拟的数据
import Mock from '@/mock/mock.js';
// 引入commentApi
import commentApi from '@/api/comment/comment.js';
export default {
    name:"Comment",
    components:{
        BaseLayer
    },
    data() {
        return {
            commentList:[]
        }
    },
    created() {
        this.getCommentList();
        this.getlist();
        console.log('评价获取商品id',this.$route.params.id)
    },
    methods:{
        // 获取商品评价列表
        getCommentList(){
            commentApi.commentList({
                goodsId:this.$route.params.id
            })
            .then(res=>{
                console.log('商品评价列表',res);
            })
        },
        // 模拟获取商品评价列表
        getlist(){
            this.commentList=Mock.getComment();
            console.log("Mock商品评价列表",this.commentList);
        },
        // 获取商品评价列表
        getCommentList(){
            this.$ajax.get("/api/zaowu/comments/list")
            .then(res=>{
                console.log("商品评价列表",res);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .comment-main{
        height: 100%;
        .commentList{
            width: 100%;
            height: auto;
            padding:80px 20px 40px;
            box-sizing: border-box;
            li{
                width:100%;
                height: 115px;
                position: relative;
                border-bottom:1px solid #ccc;
                .avatar{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: pink;
                }
                .content{
                    width: 250px;
                    height: 100%;
                    position: absolute;
                    right: 0;
                    top: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    .name{
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 27px;
                        text-align: left;
                        color: #000;
                    }
                    .time{
                        font-size: 14px;
                        line-height: 21px;
                        text-align: left;
                        color: #666;
                    }
                    .text{
                        margin-top:6px;
                        font-size: 12px;
                        line-height: 21px;
                        text-align: left;
                        color: #666;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: 63px;
                    }
                }
            }
        }
    }
</style>