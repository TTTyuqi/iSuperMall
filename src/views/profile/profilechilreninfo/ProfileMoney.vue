<template>
    <div class="money-info">
      <div class="my-money">
        <span class="money-num">{{moneynum}}</span><span>元</span>
        <div>我的余额</div>
      </div>
      <div class="my-cut">
        <span class="money-num">{{mycut}}</span><span>个</span>
        <div>我的优惠</div>
      </div>
      <div class="my-count">
        <span class="money-num">{{mycount}}</span><span>分</span>
        <div>我的积分</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileMoney",
        data(){
          return{
            moneynum:'0.00',
            mycut:0,
            mycount:0,
          }
        }
    }
</script>

<style scoped>
.money-info{
  display: flex;
  align-items: center;
  color: #666;
  padding: 25px 0;
  font-size: 15px;
  text-align: center;
  line-height: 20px;
  border-bottom: 10px solid silver;
}
  .my-money{
    /*border-right: 1px solid transparent;*/
    border-right: 1px solid rgba(200,200,200,.5);
  }
  .my-cut{
    border-right: 1px solid rgba(200,200,200,.5);
  }
  .money-info div{
    flex-grow: 1;
  }
  .money-num{
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }
</style>
