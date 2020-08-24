import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
//图片的懒加载
import lazyload from 'vue-lazyload'

Vue.use(lazyload)
//解决移动端300ms的延时 ==> fastclick插件
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.use(toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
