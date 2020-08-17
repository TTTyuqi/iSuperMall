<template>
  <Swiper>
    <swiper-items v-for="(item,index) in banners" :key="index">
      <a :href="item.link"><img :src="item.image"/></a>
    </swiper-items>
  </Swiper>
</template>

<script>
    import {Swiper,SwiperItems} from '@components/common/swiper'
    export default {
        name: "HomeSwiper",
        components: {
          Swiper,SwiperItems
        },
        props:{
          banners:{
            type:Array,
            require:true,
            default:() =>{
              return []
            }
          }
        }
    }
</script>

<style scoped>

</style>
