<template>
    <div class="register-main">
        <div class="header">
            <div class="zjt" @click="$router.go(-1)">
            </div>
            <p>注册</p>
        </div>
        <img src="../../../assets/imgs/login/1.png" alt="" class="logo">
        <div class="input-box">
            <form action="">
                <div class="phone">
                    <input type="tel" placeholder="请输入手机号" @blur="doRegister" v-model="tel" maxlength="11">
                </div>
                <div class="yzm">
                    <div class="yzm-input">
                        <input type="text" placeholder="请输入验证码">
                    </div>
                    <button class="getYzm">获取验证码</button>
                </div>
                 <div class="password">
                    <input type="password" placeholder="请输入密码" v-model="psd">
                </div>
                <button class="register-btn" @click="register" type="button">注册</button>
                <!-- 不是form默认提交,而是自定义事件进行提交要type="button" -->
            </form>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Notify } from 'vant';
Vue.use(Notify);
import registerApi from '@/api/login/register.js'
export default {
    name:"register",
    data() {
        return {
          tel:"",
          psd:""
        }
    },
    methods: {
        // 检测用户名是否可用
        doRegister(){
            this.$ajax.post("/api/zaowu/user/checkUserName",{'username':this.tel})
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code=="S"&&this.tel!=""){
                    Notify({ type: 'success', message: '该用户名可用' });
                }else{
                    Notify('该用户名已被注册');
                }
            })
        },
        // 注册账号
        register(){
            registerApi.register({
                 zaowuUser:{
                    username:this.tel,
                    password:this.psd
                }
            })
            .then(res=>{
                console.log("注册成功");
                this.$router.push("/my/login");//跳转至登录页
            })
            // 朱老师封装的request有问题,用丁老师封装的
            // this.$ajax.post("/api/zaowu/user/doRegister", {
            //     zaowuUser:{
            //         username:this.tel,
            //         password:this.psd
            //     }
            // })
            // .then(res=>{
            //     console.log("注册成功");
            //     this.$router.push("/my/login");//跳转至登录页
            // })
        }
    },
}
</script>
<style lang="scss" scoped>
    .register-main{
        height: 100%;
        .header{
            height: 40px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            padding: 0 20px;
            z-index: 99;
            box-sizing: border-box;
            background-color:rgb(244, 244, 244);
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                font-size: 16px;
                font-weight: 600;
                color: #000;
            }
            .zjt{
                width: 20px;
                height: 20px;
                background:url("../../../assets/imgs/icons/arr-l.png");
                background-size:100% 100%;
                position: absolute;
                top: 10px;
                left: 20px;
            }
        }
        .logo{
            width: 150px;
            height: 150px;
            margin:120px auto 0;
        }
        .input-box{
            width: 272px;
            height: 220px;
            margin: 50px auto;
            .phone{
                height: 42px;
                width: 100%;
                border-bottom: 1px solid #ccc;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                input{
                    width: 100%;
                    border: none;
                    height: 25px;
                }
            }
            .yzm{
                height: 42px;
                width: 100%;
                display: flex;
                justify-content:space-between;
                align-items: center;
                .yzm-input{
                    height:100%;
                    width: 188px;
                    border-bottom:1px solid #ccc;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    input{
                        width: 100%;
                        border: none;
                        height: 25px; 
                    }
                }
                .getYzm{
                    width: 82px;
                    height: 33px;
                    background-color:#1c4b47;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                    color: #fff;
                    font-size:14px;
                }
            }
            .password{
                height: 42px;
                width: 100%;
                border-bottom: 1px solid #ccc;
                display: flex;
                justify-content: flex-start;
                align-items: center; 
                input{
                    width: 100%;
                    border: none;
                    height: 25px;
                }
            }
            .register-btn{
                width: 264px;
                margin: 40px auto;
                height: 48px;
                background-color:#1c4b47;
                border-radius: 5px;
                border: none;
                outline: none;
                color: #fff;
                font-size:16px;
                font-weight: 600;
            }
        }
    }
</style>