<template>
  <div id="app">
    <keep-alive exclude="SellDetails">
      <router-view></router-view>
    </keep-alive>
    <mian-tab-bar v-show="$route.path.indexOf('login') == -1"></mian-tab-bar>
  </div>
</template>

<script>
import MianTabBar from './components/content/mianTabBar/MianTabBar'
export default {
  name: 'App',
  components:{
    MianTabBar
  }

}
</script>

<style>
  @import "assets/css/base.css";
</style>
