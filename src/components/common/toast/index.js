/**
 * 使用vue.use()方法自定义一个Toast提示框插件
 */
import Toast from './Toast.vue'

 export default {
     install:(Vue) => {
        //  console.log("toast",Toast)
         //这里使用vue.extend() ==> 他是vue子类的构造器
         //1.这里创建Toast组建的构造器
         const toastConstructor = Vue.extend(Toast) 
        //  console.log("toastConstructor",toastConstructor)
         //2.创建这个构造器对象对象 ==>生成VueComponent对象 即vm对象
         const newToast = new toastConstructor()
        //  console.log("newToast",newToast)
         //3.使用$mount() 手动挂载这个vm对象
         const toastEl = newToast.$mount()
        //  console.log("toastEl",toastEl)
         //4.把生成的toastEl Dom插入到body中
         document.body.appendChild(toastEl.$el) // 把生成的提示的dom插入body中
         Vue.prototype.$toast = toastEl
        
     }
 }