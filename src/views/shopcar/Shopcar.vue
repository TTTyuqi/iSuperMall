<template>
    <div id="cart-goods-list">
        <!-- 购物车header -->
        <nav-bar class="cart-bg">
            <div slot='center'>购物车({{getCartGoodsLength}})</div>
        </nav-bar>
        <!-- 加入better-scroll -->
        <scroll-bar
          ref="scroller"
          class="swapper"
          :beforeScroll="true"
        >
            <!-- 购物车商品展示 -->
            <goods-cart-list :goodcarlist='getCartGoodsList' @calcmoney='calcmoney' @isalltochose='isalltochose' ref="goodscartlist" />
        </scroll-bar>
         <!-- 商品结算信息展示 -->
        <cart-goods-info :tobuygoods='tobuygoods' :isallchosed='isallchosed' @allcheosed='allcheosed'/>
    </div>
</template>

<script>
   import NavBar from '@components/common/navbar/NavBar'
   import ScrollBar from '@components/common/scroll/ScrollBar'
   import CartGoodsInfo from '@components/content/cartgoodslist/CartGoodsInfo'

   import { mapGetters } from 'vuex'

   import GoodsCartList from './cartchilrencomponts/GoodsCartList'
    export default {
        name: "Shopcar",
        components: {
            NavBar,
            ScrollBar,
            CartGoodsInfo,

            GoodsCartList
        },
        computed:{
            ...mapGetters([
                'getCartGoodsLength',
                'getCartGoodsList',
            ])
        },
        data () {
            return {
                tobuygoods:[],
                isallchosed:false
            }
        },
        methods:{
            allcheosed(flage){
                if(!flage){
                    this.isallchosed=true
                    this.$refs.goodscartlist.allisactive(true)
                    this.$refs.goodscartlist.chosedgoods.push(...this.getCartGoodsList)
                    this.calcmoney(this.getCartGoodsList)
                }else{
                    this.isallchosed=false
                    this.$refs.goodscartlist.allisactive(false)
                    this.$refs.goodscartlist.chosedgoods=[]
                    this.calcmoney([])
                }
            },
            calcmoney(chosedgoods){
                this.tobuygoods=chosedgoods
            },
            isalltochose(flage){
                if(flage){
                    console.log('===')
                    this.isallchosed=false
                }else{
                    this.isallchosed=true
                }
            }
        }
    }
</script>

<style scoped>
    /* #cart-goods-list{
        position: relative;
    } */
    .cart-bg{
          background-color: silver;
          color: ghostwhite;
        
    }
    .swapper{
        height: calc(100vh - 135px);
        overflow: hidden;
    }
</style>
