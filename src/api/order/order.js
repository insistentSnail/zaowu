import request from '@/api/request'
// 查询订单
function searchOrder(data){
    return request({
        url:"/api/zaowu/order/list",
        method:"get",
        data
    })
}
export default{
    searchOrder
}