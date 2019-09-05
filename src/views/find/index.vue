<template>
    <div class="find-main">
        <div class="header">
            <router-link tag="div" class="article" to="/find/article">精选文章</router-link>
            <router-link tag="div" class="recommend" to="/find/recommend">好物推荐</router-link>
        </div>
      <router-view/>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
export default {
    name:"Find",
    components:{
        BaseLayer
    }
}
</script>
<style lang="scss" scoped>
    .find-main{
        height: 100%;
        .header{
            width: 100%;
            height: 40px;
            display: flex;
            line-height: 40px;
            position: fixed;
            background-color: #fff;
            z-index: 999;
            .article{
                width: 50%;
                height: 100%;
                font-weight: 600;
                font-size: 18px;
                color: #999999;
                letter-spacing: 0;
                text-align: center;
                &.router-link-active{
                    color:#010E0D;
                }
            }
            .recommend{
                width: 50%;
                height: 100%;
                font-weight: 600;
                font-size: 18px;
                color: #999999;
                letter-spacing: 0;
                text-align: center;
                  &.router-link-active{
                    color:#010E0D;
                }
            }
        }
    }
</style>