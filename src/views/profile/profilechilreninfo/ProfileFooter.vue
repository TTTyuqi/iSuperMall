<template>
  <div class="content-item">
    <div class="content-message">
      <img src="~@assets/imgs/profile/shopcar.svg"/>
      <span>购物车</span>
    </div>
    <div class="first-card">
      <img src="~@assets/imgs/profile/app.svg"/>
      <span>下载APP</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProfileFooter"
    }
</script>

<style scoped>
  .content-item{
    padding: 15px 15px;
    font-size: 16px;
    color: #333;
    line-height: 40px;
  }
  .content-message,.first-card{
    display: flex;
    align-items: center;
  }
  span{
    margin-left: 10px;
    flex-grow: 1;
    border-bottom: 1px solid rgba(200,200,200,.5);
  }
  img{
    width: 20px;
    height: 20px;
  }
</style>
