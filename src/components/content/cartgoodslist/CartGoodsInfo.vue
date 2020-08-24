<template>
    <div class="cart-info" >
        <div class="staty-info">
            <check-buttom @ischecked='ischecked' :isactive='isallchosed'/>全选
            <div class="total">合计:{{totalMoney}}</div>
        </div>
        <div class="tomoney">去计算({{tobuygoods.length}})</div>
    </div>
</template>

<script>

import CheckButtom from '../checkbuttom/CheckButtom'
export default {
    name:'CartGoodsInfo',
    props:{
        tobuygoods:{
            type:Array,
            default: () => []
        },
        isallchosed:{
            type:Boolean,
            default:false
        }
    },
    components:{
        CheckButtom
    },
    computed: {
        totalMoney(){
             let sunMoney = 0
             this.tobuygoods.map(item => {
                 sunMoney += item.count*item.realPrice
            })
            return sunMoney
        }
    },
    methods:{
        ischecked(flage){
            this.$emit('allcheosed',flage)
            // console.log("------",flage)
        }
    }
}
</script>

<style scoped>
 .cart-info{
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: #666;
    text-align: center;
    background-color: rgba(200, 200, 200,.2);
 }
 .staty-info{
     display: flex;
     align-items: center;
 }
 .staty-info .total{
     margin-left: 20px;
 }
 .tomoney{
   width: 100px;  
   line-height: 42px;
 color: ghostwhite;
   background-color: #333;
 }
</style>