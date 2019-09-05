<template>
    <div class="register-main">
        <div class="header">
            <div class="zjt" @click="$router.go(-1)">
            </div>
            <p>登录</p>
        </div>
        <img src="../../../assets/imgs/login/1.png" alt="" class="logo">
        <div class="input-box">
            <form action="">
                <!-- <van-cell-group>
                    <van-field
                        v-model="username"
                        label="用户名"
                        placeholder="请输入用户名"
                        error
                    />
                    <van-field
                        v-model="tel"
                        label="手机号"
                        placeholder="请输入手机号"
                        :error-message="text"
                        @blur="yzTel()"
                    />
                </van-cell-group> -->
                <div class="phone">
                    <input type="tel" placeholder="请输入账号或手机号" v-model="tel">
                </div>
                 <div class="password">
                    <input type="password" placeholder="请输入密码" v-model="psd">
                </div>
                <div class="zc">
                    <router-link :to="{name:'register'}">注册账号</router-link>
                    <a href="">忘记密码</a>
                </div>
                <button class="register-btn" @click="login" type="button">登录</button>
            </form>
        </div>
    </div>
</template>
<script>
import loginApi from '@/api/login/login.js'
export default {
    name:"Login",
    data() {
        return {
            tel:"",
            psd:"",
            text:""
        }
    },
    methods:{
        // vant插件 表单验证
        // yzTel(){
        //     if(this.tel==""||this.tel=="8888"){
        //         this.text="手机号格式错误"
        //     }else{
        //         this.text=""
        //     }
        // },
        login(){
            loginApi.login({
                 zaowuUser:{
                    username:this.tel,
                    password:this.psd
                }
            })
            .then(res=>{
                console.log("登录成功");
                window.localStorage.setItem("userId",this.tel);
                this.$router.push("/");//跳转至首页
            })
        }
    }
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
            .zc{
                height: 42px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                a{
                    color: #494949;
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