<template>
    <div id="home">
        <nav-bar class="bagcolor">
            <div slot="center">商城</div>
        </nav-bar>
        <tab-control class="fix-tab-control" :titles="title" @changtabcontrol="changtabcontrol" v-show="fixdtabcontrol" ref="tabcontroloffsetop1"></tab-control>
        <scroll-bar
          ref="scroller"
          class="swapper"
          :pullup="true"
          :listenScroll="true"
          :probe-type="3"
          @scrollToEnd="scrollToEnd"
          @scrolling="scrolling"
          >
             <home-swiper :banners="banners" @imgLoad="imgLoad"></home-swiper>
              <recommend-view :recommend="recommend"></recommend-view>
              <fartuer-view></fartuer-view>
              <tab-control :titles="title" @changtabcontrol="changtabcontrol" ref="tabcontroloffsetop"></tab-control>
              <goods-list :goods="goods[currentype].List"></goods-list>
        </scroll-bar>
        <!--@click.native ==> native属性可以给组件添加原生的点击事件-->
        <back-top v-show="viewbacktop" @click.native="backtop"></back-top>
    </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'
import TabControl from '@components/content/tabcontrol/TabControl'
import GoodsList from '@components/content/goods/GoodsList'
import ScrollBar from '@components/common/scroll/ScrollBar'

import HomeSwiper from './childrenscomponents/HomeSwiper'
import RecommendView from './childrenscomponents/RecommendView'
import FartuerView from './childrenscomponents/FartuerView'

import { getHomeMultiData,getHomeGoosList } from "@/api/home";
import {iMallMixin} from '@common/mallMixin'

export default {
      name: "Home",
      mixins:[iMallMixin],
      components: {
        NavBar,TabControl,GoodsList,ScrollBar,HomeSwiper,RecommendView,FartuerView
      },
      data(){
        return{
          banners:[],
          recommend:[],
          title:['流行','新款','精选'],
          goods:{
            pop:{page:0,List:[]},
            new:{page:0,List:[]},
            sell:{page:0,List:[]}
          },
          currentype:'pop',
          fixdtabcontrol:false
        }
      },
      created(){
        //1.获取轮播如数据
        this.homemultis()

        //2.获取商品列表
        this.homeGoods('pop')
        this.homeGoods('new')
        this.homeGoods('sell')
      },
      //只有被keep-alive保存的路由配置的组件才能使用这个函数
      activated(){
        this.$refs.scroller._refresh()
        this.$refs.scroller._scrollBackTo(0,this.saveY,0)
      },
      deactivated(){
        //路由跳转离开时记录一下scroll的y轴的坐标
        this.saveY = this.$refs.scroller. _getScrollY()
        // console.log("===",this.saveY)
      },
      methods:{
        homemultis(){
          getHomeMultiData().then(res => {
            this.banners = res.data.banner.list
            this.recommend = res.data.recommend.list
            // console.log('====',res.data)
          })
        },
        homeGoods(type){
          let currentPageSize = this.goods[type].page+1
          getHomeGoosList({type:type,page:currentPageSize}).then((res) => {
            this.goods[type].List.push(...res.data.list)
            this.goods[type].page=res.data.page
            // console.log('====',res.data)
          })

        },
        changtabcontrol(index){
          switch (index) {
            case 0:
              this.currentype = 'pop'
              break
            case 1:
              this.currentype = 'new'
              break
            case 2:
              this.currentype = 'sell'
              break
          }
          this.$refs.tabcontroloffsetop.currentIndex = index
          this.$refs.tabcontroloffsetop1.currentIndex = index
          setTimeout(() => {
            this.$refs.scroller._refresh()
          },100)

        },
        scrollToEnd(){
          this.homeGoods(this.currentype)
          this.$refs.scroller._refresh()
        },
        //实时监听滚动的位置
        scrolling(pos){
          this.viewbacktop = pos.y < -1000? true:false
          this.fixdtabcontrol = pos.y <=  -this.tabcontrolSeTop

        },
        imgLoad(){
          setTimeout(() => {
            this.tabcontrolSeTop = this.$refs.tabcontroloffsetop.$el.offsetTop
          },20)
        }
      }

    }
</script>

<style scoped>
    #home{
      padding-top: 44px;
      height: 100vh;
      /* 第二中方式 */
      position: relative;
    }
    .bagcolor{
        background-color: silver;
        color: ghostwhite;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }
    .fix-tab-control{
      /*css最新的特性 可能有些浏览器不识别==》可实现吸顶效果*/
      /*position: sticky;*/
      /*top: 44px;*/
      position: fixed;
      top:44px;
      left: 0;
      right: 0;
      z-index: 2;
    }
    /* scroll 设置滚动的试图的第二种方式 */
    /* .swapper{
      height: calc(100vh - 93px);
      overflow: hidden;
    } */
    .swapper{
      overflow: hidden;
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
    }
</style>
