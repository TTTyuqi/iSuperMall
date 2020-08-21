<template>
    <div class="goods-list">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item" @imgload="imgload"></goods-list-item>
    </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
        components:{
          GoodsListItem
        },
        props:{
          goods:{
            type:Array,
            require:true,
            default:() => {
              return []
            }
          }
        },
        data(){
          return{
            imgcount:0
          }
        },
        methods:{
          imgload(){
            this.imgcount++
            if (this.imgcount == this.goods.length) {
              this.$emit("finishloadimg")
            }
          }
        }
    }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px 5px;
    /*box-shadow: 0 0.04rem 0.4rem gray;*/
  }


</style>
