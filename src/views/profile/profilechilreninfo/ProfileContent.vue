<template>
    <div class="content-item">
        <div class="content-message">
          <img src="~@assets/imgs/profile/message.svg"/>
          <span>我的消息</span>
        </div>
        <div class="count-store">
          <img src="~@assets/imgs/profile/countstore.svg"/>
          <span>积分商城</span>
        </div>
        <div class="first-card">
          <img src="~@assets/imgs/profile/firstcard.svg"/>
          <span>会员卡</span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ProfileContent"
    }
</script>

<style scoped>
  .content-item{
    padding: 15px 15px;
    font-size: 16px;
    color: #333;
    border-bottom: 10px solid silver;
    line-height: 40px;
  }
  .content-message,.count-store,.first-card{
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
