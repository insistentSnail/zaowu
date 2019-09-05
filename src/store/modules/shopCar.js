const moduleA = {   // moduleA
    namespaced: true, //只有state是模块化的 其他的诸如 getters mutations actions不是模块化,所以需要加上命名空间
    state: {
        // 购物车列表
        goodList:[
            {
                en:"CRYSTALS",
                ch:"零敏洛丽无钢圈内衣",
                price:399,
                num:1,
                img:require("@/assets/imgs/cart/1.png"),
                isChecked:false,
                id:1
            },
             {
                en:"JUDYHUA",
                ch:"女士高端网纱交叠无钢圈内衣",
                price:180,
                num:1,
                img:require("@/assets/imgs/cart/2.png"),
                isChecked:false,
                id:2
            },
              {
                en:"NEIWAI",
                ch:"Cozy女士家居服莫代尔棉",
                price:99,
                num:1,
                img:require("@/assets/imgs/cart/3.png"),
                isChecked:false,
                id:3
            }
        ],
        // 等待加入购物车的商品
        List:[
            {
                en:"CRYSTALS",
                ch:"情趣内衣",
                price:219,
                num:10,//库存
                img:require("@/assets/imgs/cart/1.png"),
                isChecked:false,
                id:4
            }
        ]
    },
    mutations: {  
        // 加入购物车
        addCar(state,val){
            // 商品页
            var item=state.List.find(ele=>ele.id==val.id);
            if(item.num==0){
                alert("没货了");
                return;
            }else{
                item.num-=val.num;//库存减少
            }
            // 购物车页面
            if(state.goodList.some(ele=>ele.id==val.id)){
                var carItem=state.goodList.find(ele=>ele.id==val.id);
                carItem.num+=val.num;
            }else{
                   var obj={
                id:val.id,
                en:val.en,
                isChecked:val.isChecked,
                ch:val.ch,
                img:val.img,
                num:val.num,
                price:val.price
            }
            state.goodList.push(obj);
            }
        },
        // 点击选中按钮
        check(state,id){
            var item=state.goodList.find(ele=>ele.id==id);
            item.isChecked=!item.isChecked;
        },
        // 点击全选按钮
        allCheck(state){
            if(state.goodList.every(ele=>ele.isChecked==true)){
                state.goodList.forEach(ele=>ele.isChecked=false);
            }else{
                state.goodList.forEach(ele=>ele.isChecked=true);
            }
        },
        // 购物车减操作
        reduce(state,id){
            // 先找到需要操作的那一件商品
            var item=state.goodList.find(ele=>ele.id==id);
            // 库存页
            var carItem=state.List.find(ele=>ele.id==id);
            if(item.num==0){
                return
            }else{
                item.num--;//购物车数量--
                carItem.num++;//库存数量++
            }
        },
        //购物车加操作
        add(state,id){
             // 先找到需要操作的那一件商品
             var item=state.goodList.find(ele=>ele.id==id);
            // 库存页
            var carItem=state.List.find(ele=>ele.id==id);
            if(carItem.num==0){
                return
            }else{
                item.num++;//购物车数量++
                carItem.num--;//库存数量--
            }
        },
        // 购买操作
        buy(state,val){
            var buyItem=state.List.find(ele=>ele.id==val.id);
            buyItem.num-=val.num;
        }
    },
    actions: { 
       
    },
    getters: { 
           // 总价
           totalPrice(state){
            // 过滤出被勾选的商品列表
            var checkedList=state.goodList.filter(ele=>ele.isChecked==true);
            console.log("勾选商品列表==",checkedList);
            // 累加求和 求总价
            return checkedList.reduce(function(a,b){
               return a+b.num*b.price
            },0)
        },
           // 监听是否全选
           allChecked(state){
            if(state.goodList.every(ele=>ele.isChecked==true)){
                return true;
            }else{
                return false;
            }
        }
    }
}
export default moduleA