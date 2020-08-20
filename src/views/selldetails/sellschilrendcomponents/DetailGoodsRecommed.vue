<template>
    <div class="goods-reate">
        <div class="reate-key">
            <div class="key-title">用户评价</div>
            <div class="more">更多</div>
        </div>
        <div class="reate-content" v-for="(item,index) in goodsreate" :key="index">
            <div class="content-head">
                <div class="head-img">
                    <img :src="item.user.avatar"/>
                </div>
                <div class="head-name">
                    <span>{{item.user.uname}}</span>
                </div>
            </div>
            <div class="content-main">
                {{item.content}}
            </div>
            <div class="content-flage">
                <span>{{item.created | showData}}</span>
                <span>{{item.style}}</span>
            </div>
            <div class="content-img" v-if="item.images">
              <img v-for="(item,index) in item.images" :src="item" alt="" :key="index">
            </div>
        </div>
    </div>
    
</template>

<script>
import {formatData} from "@common/utils"
export default {
    name:"DetailGoodsRecommed",
    props:{
        goodsreate:{
            type:Array,
            require:true,
            default: () => []
        }
    },
    filters:{
        showData(value){
            const date = new Date(value*1000)
            return formatData(date,'yyyy-MM-dd hh:mm:ss')
        }
    }

}
</script>

<style scoped>
 .goods-reate{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    
 }
 .reate-key{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 20px 0;
    color: #333; 
    border-bottom: 1px solid rgba(0,0,0,.1); 
 }
 .reate-content{
     padding: 15px 0;
 }
 .reate-content .content-head{
     display: flex;
     justify-content: flex-start;
     align-items: center;
 }
 .content-head .head-img img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,.1);
      margin-right: 10px;
 }
.reate-content .content-main{
    padding: 10px 0;
}
.content-flage{
    padding: 10px 0;
    font-size: 12px;
    color: rgba(0,0,0,.5);
}
.content-flage span{
    margin-right: 10px;
}
.content-img{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.content-img img{
    width: 25%;
    margin-right: 8px;
}

</style>