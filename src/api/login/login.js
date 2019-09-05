import request from '@/api/request'
// 登录
function login(data){
    return request({
        url:"/api/zaowu/user/doLogin",
        method:"post",
        data
    })
}
export default{
    login
}