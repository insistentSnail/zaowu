import request from '@/api/request'
// 商品评价列表
function commentList(data){
    return request({
        url:"/api/zaowu/comments/list",
        method:"get",
        data
    })
}
export default{
    commentList
}