<template>
    <div id="home">
        <nav-bar class="bagcolor">
            <div slot="center">商城</div>
        </nav-bar>
        <scroll-bar class="swapper" :pullup="true" @scrollToEnd="scrollToEnd">
             <home-swiper :banners="banners"></home-swiper>
              <recommend-view :recommend="recommend"></recommend-view>
              <fartuer-view></fartuer-view>
              <tab-control class="fix-tab-control" :titles="title" @changtabcontrol="changtabcontrol"></tab-control>
              <goods-list :goods="goods[currentype].List"></goods-list>
        </scroll-bar>
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

export default {
      name: "Home",
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
          currentype:'pop'
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
        },
        scrollToEnd(){
          console.log("我已到底")
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
      position: sticky;
      top: 44px;
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
