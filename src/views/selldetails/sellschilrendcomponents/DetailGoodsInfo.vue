<template>
  <div v-if="Object.keys(detailgoodsinfo).length !== 0" class="goods-baseinfo">
    <div class="baseinfo-head">
      <div class="headicon-left">
        <div class="point"></div>
        <div class="line"></div>
      </div>
      <div class="decriprion">{{detailgoodsinfo.desc}}</div>
      <div class="headicon-right">
        <div class="line"></div>
        <div class="point"></div>
      </div>
      <div class="info-key">{{detailgoodsinfo.detailImage[0].key}}</div>
    </div>
    <div class="baseinfo-img">
      <img v-for="(item,index) in detailgoodsinfo.detailImage[0].list" :src="item" :key="index"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props:{
          detailgoodsinfo:{
            type:Object,
            require:true,
            default:() => {}
          }
        },
    }
</script>

<style scoped>
  .goods-baseinfo{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .baseinfo-head{
    padding: 0 15px;
  }
  .baseinfo-head .decriprion{
    padding: 15px 0;
    font-size: 14px;
  }

  .headicon-left{
    display: flex;
    justify-content: flex-start;
  }
  .headicon-right{
    display: flex;
    justify-content: flex-end;
  }
  .point{
    background-color: #333;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  .line{
    width: 90px;
    border-bottom: 1px solid #a3a3a5;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .baseinfo-img img{
    width: 100%;
    padding-top: 3px;
  }

</style>
