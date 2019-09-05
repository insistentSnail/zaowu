<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.footerShow"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
export default {
  name:"App",
  components:{
    Footer 
  }
}
</script>
<style lang="scss">
 html,body{
    height: 100%; 
    width:100%;
 }
#app {
  height: 100%;//用better-scroll要写height:100%才能继承下来
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
