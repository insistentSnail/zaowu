import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
// 初始化 html的font-size
import 'lib-flexible';
// 初始化 css样式
import '@/assets/style/reset.scss'
//引入axios
import axios from "@/api/index.js"
Vue.prototype.$ajax=axios; //调用 $ajax.post
// 引入字体库 没用到
import 'font-awesome/css/font-awesome.css'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
