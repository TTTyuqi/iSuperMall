<template>
  <div class="goods-list-item">
    <div class="cagtegory-item" v-for="(item,index) in categorylist" :key="index">
      <div><img v-lazy="item.image"/></div>
      <div class="item-info">
        <P>{{item.title}}</P>
        <div style="display: flex;justify-content: center;align-items: center">
          <div class="price">{{item.orgPrice}}</div>
          <div class="star"></div>
          <div class="cfav">{{item.cfav}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "CategoryRightContent",
        props:{
          categorylist:{
            type:Array,
            require:true,
            default:() => []
          }
        },
        components:{

        }
    }
</script>

<style scoped>
  .goods-list-item{

    display:flex;
    flex-wrap: wrap;
  }
  .cagtegory-item{
    width: 50%;
    text-align: center;
  }

  .goods-list-item img{
    width: 100%
  }
</style>
