<template>
    <div>
        <nav-bar class="bagcolor">
            <div slot="center">商城</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
    </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'
import HomeSwiper from './childrenscomponents/HomeSwiper'
import RecommendView from './childrenscomponents/RecommendView'
import { getHomeMultiData } from "@/api/home";

export default {
      name: "Home",
      components: {
        NavBar,HomeSwiper,RecommendView
      },
      data(){
        return{
          banners:[],
          recommend:[],
        }
      },
      created(){
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list
          // console.log('====',res.data)
        })
      }

    }
</script>

<style scoped>
    .bagcolor{
        background-color: silver;
        color: ghostwhite;
    }
</style>
