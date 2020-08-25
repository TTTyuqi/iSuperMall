<template>
  <Swiper>
    <swiper-items v-for="(item,index) in banners" :key="index">
      <a :href="item.link"><img :src="item.image" @load="imgeloadonce"/></a>
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
        },
        data(){
          return {
            imagecount:0
          }
        },
        methods:{
          imgeloadonce(){
            this.imagecount++
            if (this.imagecount == this.banners.length){
              this.$emit('imgLoad')
            }
          }
        }
    }
</script>

<style scoped>

</style>
