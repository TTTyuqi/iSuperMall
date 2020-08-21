<template>
  <router-link tag="div" :to="diffrouter" class="goods-list-item">
    <img :src="showdiffimg" @load="imgload"/>
    <div class="item-info">
      <P>{{goodsitem.title}}</P>
      <div style="display: flex;justify-content: center;align-items: center">
        <div class="price">{{goodsitem.orgPrice}}</div>
        <div class="star"></div>
        <div class="cfav">{{goodsitem.cfav}}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
          goodsitem:{
            type:Object,
            require:true,
            default:() => {
              return {}
            }

          }
        },
        computed:{
            showdiffimg(){
              return  this.goodsitem.image || this.goodsitem.show.img
            },
            diffrouter(){
              return this.goodsitem.iid ?`/selldetails/${this.goodsitem.iid}`:`/selldetails/${this.goodsitem.item_id}`
            }


        },
        methods:{
          //1.第一种跳转路由的方式
          // sellClick(){
          //   this.$router.push('/selldetails/'+this.goodsitem.iid)
          // }

          //图片加载完成的反射$emit机制
          imgload(){
            this.$emit('imgload')
          }
        }
    }
</script>

<style scoped>
  .goods-list-item{
    width: 48%;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .item-info{
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin: 5px 0;

  }
  .item-info p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .item-info .price{
    color: #ff5777;
    margin-right: 6px;
  }
  .item-info .star{
    width: 14px;
    height: 17px;
    background: url("~@assets/imgs/common/collect.svg") 0 0/14px 14px no-repeat;
  }
</style>
