/**
 * @author 田宇齐
 * @date 2020/8/24 17:03
 * @FilePath: \vue-cli3-project\src\utils\Vue_dinfine_ractive.js
 * @Description:简易说明vue响应式原理
 */
/**
 * 使用obj对象模拟vue里的data对象
 * @type {{age: number, name: string}}
 */
const obj = {
  age:22,
  name:'kobe'
}
//发布订阅者模式
/**
 * 没有一个Dep对应一个对象的key，同时记录这个key的订阅者
 */
class Dep{
  constructor(){
    //记录订阅者个数
    this.sub =[]
  }
  //加入某个对象属性的订阅者进入列表
  /**
   * Watcher:表示一个订阅者对象
   * @param Watcher
   */
  addWathToSub(Watcher){
    this.sub.push(Watcher)
    // console.log(Watch.wathName+"已订阅该数据的状态")
  }

  //通知订阅者
  /**
   * 当这个Dep对应的这个key的value发生改变的时候，同时通知这个key所有的订阅者
   */
  notify(){
    this.sub.map(watcher => {
      watcher.update()
    })
  }
}

//订阅者
class watcher{
  constructor(name,keyone,objd){
    this.wathName =name
    this.keyone = keyone
    this.objd = objd
    Dep.target = this
    this.update()
    Dep.target = null
  }
  //upadte 被通知数据改变
  update(){
    const titel = this.objd[this.keyone]
    console.log(this.wathName+"被通知数据发生改变，请做修改")
  }

}
//监听对象obj的方法
/**
 * Vuejs响应式系统 原理的核心函数：Object.defineProperty，每当new vue({})传入的data对象里的每一条属性都会被添加到vue的响应式系统，
 * 原理：依据对象属性value值改变的底层方法，vue重写get(),set()方法
 */
Object.keys(obj).map((key) => {
  //每循环出一个key 就对应的new 一个Dep对象
  const dep = new Dep()
  let value = obj[key]
  //vue响应式系统的核心方法
  Object.defineProperty(obj,key,{
    get(){
      if (Dep.target) {
        console.log("watcher",Dep.target)
        //当watcher 通过key被调用（obj）对象value 时就会调用改方法，同时将这个watcher添加到Dep对象里
        dep.addWathToSub(Dep.target)
        console.log("subs",dep.sub)
      }
      return value
    },
    set(newvalue){
      if(value != newvalue){
        //当这个obj对象的属性发生改变时 就会通过dep通知这个key所有的订阅者（wacther）
        dep.notify()
        value = newvalue
      }

    },
  })
})

//添加订阅者
new watcher('张三','age',obj)
new watcher('李四','name',obj)

