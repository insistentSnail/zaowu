<template>
    <div class="info-main">
        <div class="header">
            <div class="header-1">
               <div class="zjt" @click="$router.go(-1)"></div>
               <p>内衣</p>
               <div class="search" @click="$router.push('/home/search')"></div>
               <div class="car" @click="$router.push('/home/shopCar')"></div>
           </div>
           <div class="nav">
               <div class="new">新品</div>
               <div class="sale">销量</div>
               <div class="price">价格
                    <img src="../../../assets/imgs/icons/filter-arr.png" alt="" @click="sort1()" v-show="sortShow==1">
                    <img src="../../../assets/imgs/icons/filter-up.png" alt="" @click="sort2()" v-show="sortShow==2">
                    <img src="../../../assets/imgs/icons/filter-down.png" alt="" @click="sort3()" v-show="sortShow==3">
               </div>
               <div class="filter">筛选</div>
           </div>
        </div>
        <BaseLayer>
            <template v-solt:default>
                <div class="goodsList">
                    <router-link class="good" v-for="item in data" :key="item.id" :to="{'name':'detail',params:{'id':item.id}}">
                       <img :src="item.img1" alt="">
                       <p class="en">{{item.brandId}}</p>
                       <p class="ch">{{item.name}}</p>
                       <p class="price">{{item.priceNow}}</p>
                    </router-link>
                    <!-- 因为用的是flex布局的space-around,为奇数的时候多加一个盒子,不然最后一个会跑中间来 -->
                     <div class="good" v-if="(data.length%2)!=0">
                       <img src="" alt="">
                       <p class="en"></p>
                       <p class="ch"></p>
                       <p class="price"></p>
                    </div>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>
<script>
// 引入滚动组件
import BaseLayer from "@/components/baseLayer";
export default {
    name:"classInfo",
    data() {
        return {
            // 价格排序显示和隐藏
            sortShow:1,
            // 后台获取的数据
            data:[],
            // 编的数据
            dataList:[
                {
                    id:1,
                    img:require("@/assets/imgs/classInfo/detail1.png"),
                },
                {
                    id:2,
                    img:require("@/assets/imgs/classInfo/detail2.png"),
                },
                {
                    id:3,
                    img:require("@/assets/imgs/classInfo/detail3.png"),
                },
                 {
                    id:4,
                    img:require("@/assets/imgs/classInfo/detail4.png"),
                },
                 {
                    id:5,
                    img:require("@/assets/imgs/classInfo/detail5.png"),
                },
                 {
                    id:6,
                    img:require("@/assets/imgs/classInfo/detail6.png"),
                },
                {
                    id:7,
                    img:require("@/assets/imgs/classInfo/detail1.png"),
                },
                 {
                    id:8,
                    img:require("@/assets/imgs/classInfo/detail2.png"),
                },
                 {
                    id:9,
                    img:require("@/assets/imgs/classInfo/detail3.png"),
                },
                 {
                    id:10,
                    img:require("@/assets/imgs/classInfo/detail4.png"),
                }
            ]
        }
    },
    components:{
        BaseLayer
    },
    created() {
        this.getDate();
    },
    methods:{
        // 价格排序 升序
        sort1(){
            this.sortShow=2;
            var params={
                    subKindId:this.$route.params.id,
                    desc:1,
                    sortBy:"priceNow"
                }
                console.log("params",params);
            this.$ajax.get("/api/zaowu/kind/goodsListByKind",{params})
            .then(res=>{
                console.log("价格升序",res.data.data);
                this.data=res.data.data;
            })
        },
         // 价格排序 降序
        sort2(){
            this.sortShow=3;
            var params={
                    subKindId:this.$route.params.id,
                    desc:0,
                    sortBy:"priceNow"
                }
                console.log("params",params);
            this.$ajax.get("/api/zaowu/kind/goodsListByKind",{params})
            .then(res=>{
                console.log("价格降序",res.data.data);
                this.data=res.data.data;
            })
        },
            // 价格不排序 
        sort3(){
            this.sortShow=1;
           this.getDate();
        },
        // 根据分类id获取商品列表
        getDate(){
            this.$ajax.get(`/api/zaowu/kind/goodsListByKind?subKindId=${this.$route.params.id}`)
            .then(res=>{
                console.log("根据分类id获取商品列表",res.data.data);
                this.data=res.data.data;
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .info-main{
        height: 100%;
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
                    background:url("../../../assets/imgs/icons/arr-l.png");
                    background-size: 100% 100%;
                }
                .search{
                    width: 20px;
                    height: 20px;
                    background:url("../../../assets/imgs/icons/search.png");
                    background-size: 100% 100%;
                    margin-left:90px;
                }
                .car{
                    width: 20px;
                    height: 20px;
                    background:url("../../../assets/imgs/icons/cart.png");
                    background-size: 100% 100%;
                    margin-left: 20px;
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
                .new{
                    width: 25%;
                    height: 100%;
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #010E0D;
                    letter-spacing: 0;
                    line-height: 40px;
                    font-weight: 600;
                }
                .sale{
                    width: 25%;
                    height: 100%;
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #010E0D;
                    letter-spacing: 0;
                    line-height: 40px;
                    font-weight: 600;
                }
                .price{
                    width: 25%;
                    height: 100%;
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #010E0D;
                    letter-spacing: 0;
                    line-height: 40px;
                    font-weight: 600;
                    img{
                        width: 11px;
                        height: 15px;
                        vertical-align: middle;
                        margin-top:-3px;
                    }
                }
                .filter{
                    width: 25%;
                    height: 100%;
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #010E0D;
                    letter-spacing: 0;
                    line-height: 40px;
                    font-weight: 600;
                }
            }    
        }
        .goodsList{
            width: 100%;
            height: auto;
            padding:100px 20px 0;
            box-sizing: border-box;
            background: #f5f5f5;
            display: flex;
            justify-content: space-around;
            flex-flow: wrap;
            .good{
                height: 185px;
                width: 130px;
                display: block;
                img{
                    width: 130px;
                    height: 130px;
                }
                .en{
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 18px;
                }
                .ch{
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 18px;
                }
                .price{
                    font-family: PingFangSC-Light;
                    font-size: 12px;
                    color: #494949;
                    letter-spacing: 0;
                    line-height: 18px;
                    font-weight: 600;
                }
            }
        }
    }
</style>