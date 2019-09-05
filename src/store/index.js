import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shopCar from "./modules/shopCar"
export default new Vuex.Store({
  modules: {
    shopCar: shopCar, 
  }
})