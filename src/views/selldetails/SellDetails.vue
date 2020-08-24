<template>
    <div id="goods-dateil">
      <detail-top-bar class="detail-bar" ref="changecurrentindex" @currenindex="currenindex"/>
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
        <detail-goods-info :detailgoodsinfo="baseinfo" @imgLoad="imgLoad"/>
        <detail-params :paramesinfo="paramsinfo" ref="paramsoffsettop"/>
        <detail-goods-recommed :goodsreate="goodsreates" ref="recommend"/>
        <goods-list :goods="recommends" ref="goodreod" @finishloadimg="finishloadimg"/>
      </scroll-bar>
      <detail-bettom-bar @addtocart="addToCart"/>
      <!--@click.native ==> native属性可以给组件添加原生的点击事件-->
      <back-top v-show="viewbacktop" @click.native="backtop"></back-top>
    </div>
</template>

<script>
  import DetailTopBar from './sellschilrendcomponents/DetailTopBar'
  import DetailSwiper from './sellschilrendcomponents/DetailSwiper'
  import DetailGoods from './sellschilrendcomponents/DetailGoods'
  import DetailShop from './sellschilrendcomponents/DetailShop'
  import DetailGoodsInfo from './sellschilrendcomponents/DetailGoodsInfo'
  import DetailParams from './sellschilrendcomponents/DetailParams'
  import DetailGoodsRecommed from './sellschilrendcomponents/DetailGoodsRecommed'
  import DetailBettomBar from './sellschilrendcomponents/DetailBettomBar'

  import ScrollBar from '@components/common/scroll/ScrollBar'
  import GoodsList from '@components/content/goods/GoodsList'
  import Toast from '@components/common/toast/Toast'

  import {getSellDetails,getReateDatail,goodInfo,shop,GoodsParams} from "@/api/selldetails";
  import {iMallMixin} from '@common/mallMixin'

  export default {
        name: "SellDetails",
        props:{
          id:{require:true}
        },
        mixins:[iMallMixin],
        components:{
          DetailTopBar,
          DetailSwiper,
          DetailGoods,
          DetailShop,
          DetailGoodsInfo,
          DetailParams,
          DetailGoodsRecommed,
          DetailBettomBar,

          ScrollBar,
          GoodsList,
          Toast
        },
        data(){
          return{
            clickflage:false,
            detailbanimg:[],
            goodsinfo:{},
            shopinfo:{},
            baseinfo:{},
            paramsinfo:{},
            goodsreates:[],
            recommends:[],
          }
        },
        created(){
          this.getselldetail()

          this.getRecommendData()
        },
        // watch:{
        //     id(newVale,oldVale){
        //       // console.log("new",newVale)
        //       // console.log("old",oldVale)
        //       this.getselldetail()
        //
        //       this.getRecommendData()
        //     }
        // },
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
              if(data.rate.cRate > 0){
                this.goodsreates = data.rate.list
              }
              console.log("goods",data)
            })
          },
          //获取推荐商品数据
          getRecommendData(){
            getReateDatail().then((res) => {
              let data = res.data
              this.recommends = data.list
              // console.log("getRecommendData",data)
            })
          },
          //实时监听滚动的位置
          scrolling(pos){
            // console.log("====图片以加载完1",this.paramsOffsetTop)
            // console.log("====图片以加载完2",this.recommendSetTop)
            // console.log("====图片以加载完3",this.goodreodsetTop)
            // console.log("====---",-pos.y)
            // console.log("====---",this.clickflage)
            // if (pos.y < -1000) {
            //   this.viewbacktop =true
            // }
            this.viewbacktop = pos.y < -1000? true:false
            if (this.paramsOffsetTop <= -pos.y && -pos.y < this.recommendSetTop && this.$refs.changecurrentindex.currentitleindex != 1) {
              console.log("1")
              this.$refs.changecurrentindex.currentitleindex = 1
            }else if (this.recommendSetTop <= -pos.y && -pos.y < this.goodreodsetTop && this.$refs.changecurrentindex.currentitleindex != 2) {
              console.log("2")
              this.$refs.changecurrentindex.currentitleindex = 2
            }else if(-pos.y >= this.goodreodsetTop && this.$refs.changecurrentindex.currentitleindex != 3){
              console.log("3")
              this.$refs.changecurrentindex.currentitleindex = 3
            }else if(0 < -pos.y && -pos.y < this.paramsOffsetTop && this.$refs.changecurrentindex.currentitleindex != 0){
              console.log("0")
              this.$refs.changecurrentindex.currentitleindex = 0
            }

          },
          //获取头部导航栏的下标
          currenindex(index){

            switch (index) {
              case 0:
                this.$refs.scroller._scrollBackTo(0,0)
                break
              case 1:
                this.$refs.scroller._scrollBackTo(0,-this.paramsOffsetTop)
                break
              case 2:
                this.$refs.scroller._scrollBackTo(0,-this.recommendSetTop)
                break
              case 3:
                this.$refs.scroller._scrollBackTo(0,-this.goodreodsetTop)
                break
            }


          },

          //检测图片是否加载完
          imgLoad(){
            setTimeout(() => {
              this.paramsOffsetTop = this.$refs.paramsoffsettop.$el.offsetTop
              this.recommendSetTop = this.$refs.recommend.$el.offsetTop
              this.finishloadimg()
            },20)
          },
          //检测推荐商品中图片是否加载完成
          finishloadimg(){
            setTimeout(() => {
              this.goodreodsetTop = this.$refs.goodreod.$el.offsetTop
            },20)
          },
          //将商品添加入对应的购物车
          addToCart(){
            const addGood={
              img:this.detailbanimg[0],
              title:this.goodsinfo.name,
              desc:this.goodsinfo.desc,
              realPrice:this.goodsinfo.realprice,
              iid:this.id
            }
            this.$store.dispatch('addGoodToCart', addGood).then((res) => {
              console.log("toastEl",this.$toast)
              this.$toast.showMessage(res,1000)
            })

          }
        }
    }
</script>

<style scoped>
    #goods-dateil{
      position: relative;
      z-index: 9;
      background-color: white;
    }
    /*.detail-bar{*/
      /*position: relative;*/
    /*}*/
    .sellswapper{
      overflow: hidden;
      position: relative;
      height: calc(100vh - 93px);
      bottom: 0px;
      left: 0;
      right: 0;
    }
</style>
