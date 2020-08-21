/**
 * 使用Vuex插件来做状态的集中管理 ==》单一状态🌲
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

//挂载vuex
Vue.use(Vuex)

//创建Vuex对象
const store = new Vuex.Store({
    //state 存放状态
    state:{
        shopCarList:[]
    },
    /**
     * mutations唯一的目的就是修改state中的状态
     * *** mutations中的方法尽可能保持事件的单一性
     */
    mutations,
    //异步操作
    actions,
    //加工state对象中的属性
    getters:{

    },
    //模块化状态管理
    module:{

    }
})

export default store