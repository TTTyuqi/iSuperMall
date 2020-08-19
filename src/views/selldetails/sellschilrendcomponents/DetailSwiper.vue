<template>
    <swiper class="detail_Img">
      <swiper-items v-for="(item,index) in detailbanners" :key="index">
        <img :src="item"/>
      </swiper-items>
    </swiper>
</template>

<script>

  import {Swiper,SwiperItems} from '@components/common/swiper'
    export default {
        name: "DetailSwiper",
        props:{
          detailbanners:{
            type:Array,
            require:true,
            default:() => []
          }
        },
        components:{
          Swiper,SwiperItems
        },
    }
</script>

<style scoped>
  .detail_Img{
    height: 300px;
    overflow: hidden;
  }
</style>
