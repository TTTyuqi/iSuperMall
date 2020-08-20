<template>
    <div id="goods-dateil">
      <detail-top-bar class="detail-bar"/>
      <scroll-bar
        ref="scroller"
        class="sellswapper"
        :listenScroll="true"
        :probe-type="3"
        @scrolling="scrolling"
      >
        <detail-swiper :detailbanners="detailbanimg"/>
        <detail-goods :goodsdetail="goodsinfo"/>
        <detail-shop :shopinfo="shopinfo"/>
        <detail-goods-info :detailgoodsinfo="baseinfo"/>
        <detail-params :paramesinfo="paramsinfo"/>
      </scroll-bar>
    </div>
</template>

<script>
  import DetailTopBar from './sellschilrendcomponents/DetailTopBar'
  import DetailSwiper from './sellschilrendcomponents/DetailSwiper'
  import DetailGoods from './sellschilrendcomponents/DetailGoods'
  import DetailShop from './sellschilrendcomponents/DetailShop'
  import DetailGoodsInfo from './sellschilrendcomponents/DetailGoodsInfo'
  import DetailParams from './sellschilrendcomponents/DetailParams'

  import ScrollBar from '@components/common/scroll/ScrollBar'

  import {getSellDetails,goodInfo,shop,GoodsParams} from "@/api/selldetails";

  export default {
        name: "SellDetails",
        props:{
          id:{require:true}
        },
        components:{
          DetailTopBar,
          DetailSwiper,
          DetailGoods,
          DetailShop,
          DetailGoodsInfo,
          DetailParams,

          ScrollBar
        },
        data(){
          return{
            detailbanimg:[],
            goodsinfo:{},
            shopinfo:{},
            baseinfo:{},
            paramsinfo:{}
          }
        },
        created(){
          this.getselldetail()
        },
        methods:{
          //请求商品的详情
          getselldetail(){
            getSellDetails({iid:this.id}).then((res) => {
              let data = res.result
              this.detailbanimg = data.itemInfo.topImages
              this.goodsinfo = new goodInfo(data.itemInfo,data.columns,data.shopInfo.services)
              this.shopinfo = new shop(data.shopInfo)
              this.baseinfo = data.detailInfo
              this.paramsinfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
              console.log("goods",data)
            })
          },
          //实时监听滚动的位置
          scrolling(pos){
            // console.log("===",pos)
          },
        }
    }
</script>

<style scoped>
    #goods-dateil{
      position: relative;
      z-index: 9;
      height: 100vh;
      background-color: white;
    }
    /*.detail-bar{*/
      /*position: relative;*/
    /*}*/
    .sellswapper{
      overflow: hidden;
      position: absolute;
      top: 44px;
      bottom: 0px;
      left: 0;
      right: 0;
    }
</style>
