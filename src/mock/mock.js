import Mock from 'mockjs';
// 获取 mock.Random 对象
const Random = Mock.Random;
// 好物推荐
function getMock(){
    var list=[];
    for(var i = 0 ; i< 5 ; i++){
        var obj = {
            id:Random.natural(),
            en:Random.name(),
            ch:Random.cname(),
            img : Random.dataImage('375x160'),
            text : Random.ctitle(),
        }
        list.push(obj)
    }
    return list;
}
// 精选文章
function getArticle(){
    var list=[];
    for(var i = 0 ; i< 10 ; i++){
        var obj = {
            id:Random.natural(),
            title:Random.ctitle(),
            date:Random.date(),
            img : Random.dataImage('315x300'),
            text :Random.csentence(),
            num1:Random.natural(1,100),
            num2:Random.natural(1,100),
            num3:Random.natural(1,100),
        }
        list.push(obj)
    }
    return list;
}
// 评论
function getComment(){
    var list=[];
    for(var i=0;i<6;i++){
        var obj={
            id:Random.natural(),
            time:Random.date(),
            color:Random.color(),
            text:Random.cparagraph(),
            title:Random.ctitle(),
        }
        list.push(obj);
    }
    return list;
}
// 我的订单 全部
function myOrder(){
    var list=[];
    for(var i=0;i<10;i++){
        var obj={
            id:Random.natural(),
            en:Random.name(),
            ch:Random.cname(),
            num1:Random.natural(1,10),
            num2:Random.natural(100,500)
        }
        list.push(obj);
    }
    return list;
}
function myOrder2(){
    var list=[];
    for(var i=0;i<5;i++){
        var obj={
            id:Random.natural(),
            en:Random.name(),
            ch:Random.cname(),
            num1:Random.natural(1,10),
            num2:Random.natural(100,500)
        }
        list.push(obj);
    }
    return list;
}
function myOrder3(){
    var list=[];
    for(var i=0;i<6;i++){
        var obj={
            id:Random.natural(),
            en:Random.name(),
            ch:Random.cname(),
            num1:Random.natural(1,10),
            num2:Random.natural(100,500)
        }
        list.push(obj);
    }
    return list;
}
function myOrder4(){
    var list=[];
    for(var i=0;i<5;i++){
        var obj={
            id:Random.natural(),
            en:Random.name(),
            ch:Random.cname(),
            num1:Random.natural(1,10),
            num2:Random.natural(100,500)
        }
        list.push(obj);
    }
    return list;
}
export default{
    getMock,
    getArticle,
    getComment,
    myOrder,
    myOrder2,
    myOrder3,
    myOrder4
}