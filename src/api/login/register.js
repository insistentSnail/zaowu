import request from '@/api/request'
// 注册
function register(data){
    return request({
        url:"/api/zaowu/user/doRegister",
        method:"post",
        data
    })
}
export default{
    register
}