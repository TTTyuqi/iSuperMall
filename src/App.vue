<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item cruntPath="/home" activecolor="#a9a9a9">
        <img slot="item-icon" src="./assets/imgs/tabbar/shouye.svg"/>
        <img slot="item-icon-active" src="./assets/imgs/tabbar/shouye_hover.svg"/>
        <div slot="item">首页</div>
      </tab-bar-item>
      <tab-bar-item cruntPath="/category" activecolor="#a9a9a9">
        <img slot="item-icon" src="./assets/imgs/tabbar/fenlei.svg"/>
        <img slot="item-icon-active" src="./assets/imgs/tabbar/fenlei_hover.svg"/>
        <div slot="item">分类</div>
      </tab-bar-item>
      <tab-bar-item cruntPath="/shopcar" activecolor="#a9a9a9">
        <img slot="item-icon" src="./assets/imgs/tabbar/baoshuicang.svg"/>
        <img slot="item-icon-active" src="./assets/imgs/tabbar/baoshuicang_hover.svg"/>
        <div slot="item">购物车</div>
      </tab-bar-item>
      <tab-bar-item cruntPath="/profile" activecolor="#a9a9a9">
        <img slot="item-icon" src="./assets/imgs/tabbar/wo.svg"/>
        <img slot="item-icon-active" src="./assets/imgs/tabbar/wo_hover.svg"/>
        <div slot="item">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/TabBar'
import TabBarItem from './components/common/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  },
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
