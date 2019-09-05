<template>
    <div class="class-main">
        <Header></Header>
        <BaseLayer ref="layer">
            <template v-solt:default>
                <div class="goods">
                    <div class="good" v-for="item in dataList" :key="item.zaowuGoodsKind.id">
                        <img :src="item.zaowuGoodsKind.img" alt="" @click="open(item.zaowuGoodsKind.id)">
                             <ul v-show="menuShow==item.zaowuGoodsKind.id">
                            <router-link v-for="tem in item.list" :key="tem.id" tag="li" 
                            :to="{'name':'classInfo',params:{'id':tem.id}}">
                                <span>{{tem.title}}</span> <span>></span>
                            </router-link>
                        </ul>
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
export default {
      name:"Class",
      components:{
        BaseLayer,
        Header
    },
    data() {
        return {
            menuShow:-1,
            dataList:[]
        }
    },
    methods:{
        open(id){
            console.log(id);
            if(this.menuShow==id){
                this.menuShow=-1;//同一个东西点两次也隐藏
            }else{
                this.menuShow=id;//点谁让谁显示,其他隐藏
            }
        },
        // 获取数据列表
        getList(){
            this.$ajax.get("/api/zaowu/kind/list")
            .then(res=>{
                console.log(res.data.data);
                this.dataList=res.data.data;
                // 页面渲染完之后再重新获取高度
                this.refresh();
            })
        },
        refresh(){
            this.$nextTick(()=>{
            //重新计算
            this.$refs.layer.$BScroll.refresh();
            })    
        }
    },
    created(){
        this.getList();
    },
    watch: {
        // 监听下拉框是否展开
        menuShow(nv,ov){
            if(nv!=ov){
                this.$nextTick(()=>{
                 //重新计算
                this.refresh();
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .class-main{
        width: 100%;
        height: 100%;
        background-color:#f5f5f5;
        .goods{
            width: 100%;
            box-sizing: border-box;
            padding: 40px 20px 100px;
            background-color:#f5f5f5;
            .good{
                width: 100%;
                padding: 20px 0;
                img{
                    width: 100%;
                    height: 120px;
                }
                ul{
                    li{
                        height: 37px;
                        border-bottom: 1px solid #e5e5e5;
                        display: flex;
                        justify-content: space-between;
                        line-height: 37px;
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>