<template>
    <div>
      <detail-top-bar/>
      <detail-swiper :detailbanners="detailbanimg"></detail-swiper>
    </div>
</template>

<script>
  import DetailTopBar from './sellschilrendcomponents/DetailTopBar'
  import DetailSwiper from './sellschilrendcomponents/DetailSwiper'

  import {getSellDetails} from "@/api/selldetails";

  export default {
        name: "SellDetails",
        props:{
          id:{require:true}
        },
        components:{
          DetailTopBar,DetailSwiper
        },
        data(){
          return{
            detailbanimg:[]
          }
        },
        created(){
          this.getselldetail()
        },
        methods:{
          //请求商品的详情
          getselldetail(){
            getSellDetails({iid:this.id}).then((res) => {
              this.detailbanimg = res.result.itemInfo.topImages
                console.log("=====",this.detailbanimg)
            })
          }
        }
    }
</script>

<style scoped>

</style>
