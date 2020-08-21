<template>
  <div class="bettom_bar">
    <div class="servers">
      <i class="icon"></i>
      <span>客服</span>
    </div>
    <div class="shop">
      <i class="icon"></i>
      <span>店铺</span>
    </div>
    <div class="collect">
      <i class="icon"></i>
      <span>收藏</span>
    </div>
    <div class="cart" >
      加入购物车
    </div>
    <div class="buy">
      购买
    </div>
  </div>
    
</template>

<script>
    export default {
        name: "DetailBettomBar"
    }
</script>

<style scoped>
    .bettom_bar{
      position: relative;
      height: 49px;
      bottom: 49px;
      background-color: white;
      align-items: center;
      display: flex;
      text-align: center;
      font-size: 14px;
      color: darkgrey;
      box-shadow: 0 -0.04rem 0.4rem gray;
    }
    .bettom_bar div{
      flex: 1;
      border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
    }
    .icon{
      display: block;
      background: url("~@assets/imgs/detail/detail_bottom.png") 0 0/100%;
      width: 1rem;
      height: 1rem;
      margin: 0.12rem auto;
    }
    .servers .icon {
      background-position: 0 -2.4rem;
    }
    .shop .icon {
      background-position: 0 -4.5rem;
    }
    .collect .icon{
      background-position: 0 -1.3rem;
  }
    .cart {
      line-height: 49px;
      background-color: rgb(255, 174, 0);
    }
    .buy {
      line-height: 49px;
      background-color: var(--color-tint);
      color: white;
    }
</style>
