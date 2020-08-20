<template>
    <div class="goods-item-detail" v-if="Object.keys(goodsdetail).length !== 0">
      <div class="goods-title">
        <p>{{goodsdetail.name}}</p>
      </div>
      <div class="goods-price">
        <div class="now-price">
          <span>{{goodsdetail.price}}</span>
        </div>
        <div class="old-price">
          <span>{{goodsdetail.oldPrice}}</span>
        </div>
        <div :style="{'background-color': goodsdetail.discountBgColor}" class="discountDesc" v-if="goodsdetail.discountDesc">
          <span>{{goodsdetail.discountDesc}}</span>
        </div>
      </div>
      <div class="goods-columns">
        <div v-for="(item,index) in goodsdetail.columns" :key="index">{{item}}</div>
      </div>
      <div class="goods-services">
        <div v-for="(item,index) in goodsdetail.service" :key="index" class="services-item">
          <div><img :src="item.icon"/></div>

          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoods",
        props:{
          goodsdetail:{
            type:Object,
            require:true,
            default:() => {}
          }
        }
    }
</script>

<style scoped>
      .goods-item-detail{
        margin-top: 15px;
        border-bottom: 5px solid #f2f5f8;
      }
      .goods-title{
        padding: 0 5px;
        color: #222
      }
      .goods-price{
        display: flex;
        justify-content: left;
        margin-top: 10px;
        padding-left: 5px;
        align-items: flex-end;

      }
      .goods-price .now-price{
        font-size: 24px;
        color: black;
      }
      .goods-price .old-price{
        font-size: 13px;
        margin-left: 5px;
        color: darkgrey;
        text-decoration: line-through;
      }
      .goods-price .discountDesc{
        font-size: 12px;
        padding: 2px 5px;
        color: #fff;
        border-radius: 8px;
        margin-left: 5px;
        align-self: flex-start;
      }
      .goods-columns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: darkgrey;
        padding-bottom: 5px;
        margin: 15px 5px 0 5px;
        border-bottom: 1px solid rgba(100,100,100,.1);
      }
      .goods-services{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        /*color: darkgrey;*/
        color: #333;
        padding: 20px 5px;
      }
      .services-item{
        display: flex;
        align-items: center;
      }
      .goods-services img{
        width: 14px;
        height: 14px;
      }
</style>
