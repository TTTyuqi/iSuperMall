<template>
    <div>
        <nav-bar class="bagcolor">
            <div slot="center">商城</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
    </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'
import HomeSwiper from './childrenscomponents/HomeSwiper'
import { getHomeMultiData } from "@/api/home";

export default {
      name: "Home",
      components: {
        NavBar,HomeSwiper
      },
      data(){
        return{
          banners:[]
        }
      },
      created(){
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list
          // console.log('====',this.banners)
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
