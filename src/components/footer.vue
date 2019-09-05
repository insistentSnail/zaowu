<template>
    <div class="footer-main">
        <!-- 假如to="/" 则第一个会一直高亮显示 -->
        <router-link class="link-item" to="/home"> 
            <div class="img"></div>
            <span>首页</span> 
        </router-link>
        <router-link class="link-item" to="/class">
            <div class="img"></div>
            <span>分类</span>
        </router-link>
        <router-link class="link-item" to="/find">
             <div class="img"></div>
            <span>发现</span>
        </router-link>
        <router-link class="link-item" to="/my">
            <div class="img"></div>
            <span>我的</span>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
    .footer-main{
        width: 100%;
        height: 80px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        display: flex;
        .link-item{
            width: 25%;
            height: 100%;
           .img{
               width: 40px;
               height: 40px;
                background:url("../assets/imgs/icons/home.png") no-repeat center;
                background-size:100% 100%;
                margin:10px auto 5px;
           }
           &:nth-child(1).router-link-active .img{
                background:url("../assets/imgs/icons/home-active.png") no-repeat center;
                background-size:100% 100%;
           }
           &:nth-child(2) .img{
                background:url("../assets/imgs/icons/kind.png") no-repeat center;
                background-size:100% 100%;
           }
            &:nth-child(2).router-link-active .img{
                background:url("../assets/imgs/icons/kind-active.png") no-repeat center;
                background-size:100% 100%;
           }
            &:nth-child(3) .img{
                background:url("../assets/imgs/icons/find.png") no-repeat center;
                background-size:100% 100%;
           }
            &:nth-child(3).router-link-active .img{
                background:url("../assets/imgs/icons/find-active.png") no-repeat center;
                background-size:100% 100%;
           }
            &:nth-child(4) .img{
                background:url("../assets/imgs/icons/main.png") no-repeat center;
                background-size:100% 100%;
           }
            &:nth-child(4).router-link-active .img{
                background:url("../assets/imgs/icons/main-active.png") no-repeat center;
                background-size:100% 100%;
           }
           &.router-link-active span{
                color: #1c4b47;
           }
           span{
               color: #999;
           }
        }
    }
</style>