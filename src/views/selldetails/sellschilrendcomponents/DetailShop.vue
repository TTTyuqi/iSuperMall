<template>
  <div class="detail-shop">
    <div class="shop-head">
      <div class="shop-logo">
        <img :src="shopinfo.logo"/>
      </div>
      <div class="shop-name">
        <span>{{shopinfo.name}}</span>
      </div>
    </div>
    <div class="shop-content">
      <div class="content-number">
        <div class="goods-sells">
          <div class="sells-count">{{shopinfo.Sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods-num">
          <div class="goods-count">{{shopinfo.Goods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="content-info">
        <div v-for="(item,index) in shopinfo.score" :key="index" class="info-item">
          <div class="item">{{item.name}}</div>
          <div class="item" :style="{'color':item.isBetter?'#f13e3a':'#5ea732'}">{{item.score}}</div>
          <div class="item" style="color: #fff">
            <span :style="{'background-color':item.isBetter?'#f13e3a':'#5ea732'}">{{item.isBetter?'高':'低'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-foot">
      <p>进入店铺</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailShop",
        props:{
          shopinfo:{
            type:Object,
            require:true,
            default:() => {}
          }
        },
      filters: {
        sellCountFilter: function (value) {
          if (value < 10000) return value;
          return (value/10000).toFixed(1) + '万'
        }
      }
    }
</script>

<style scoped>
    .detail-shop{
      padding: 25px 8px;
      border-bottom: 5px solid #f2f5f8;

    }
    .shop-head{
      display: flex;
      align-items: center;
    }
    .shop-head .shop-logo img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,.1);
      margin-right: 10px;
    }
    .shop-head .shop-name{
      color: darkgrey;
      /*vertical-align: center;*/
    }
    .shop-content{
      display: flex;
      align-items: center;
      margin-top: 15px;
    }
    .content-number{
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 12px;
      color: #333;
      text-align: center;
      border-right: 1px solid rgba(0,0,0,.1);
    }
   .sells-count,.goods-count{
     font-size: 18px;
   }
    .sells-text, .goods-text {
      margin-top: 10px;
      font-size: 12px;
    }
    .content-info{
      flex: 1;
      font-size: 13px;
      color: #333;
      margin-left: 30px;
    }
    .content-info .info-item{
      display: flex;
      /*justify-content: space-evenly;*/
      align-items: center;
      text-align: center;
    }
    .content-info .info-item .item{
      flex: 1;
      padding: 5px 0;
    }
  .shop-foot{
    margin-top: 10px;
    text-align: center;
  }
  .shop-foot p{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
