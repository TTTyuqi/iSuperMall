<template>
    <div class="goods-item">
        <check-buttom @ischecked='ischecked' :isactive='ischosed'/>
        <div class="item-imgs"><img :src="goodsitem.img"/></div>
        <div class="item-info">
            <div class="title">{{goodsitem.title}}</div>
            <div class="desc">{{goodsitem.desc}}</div>
            <div class="item-pric">
                <div class="price">¥{{goodsitem.realPrice}}</div>
                <div class="count">x{{goodsitem.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButtom from '../checkbuttom/CheckButtom'
export default {
    name:"CartGoodsItem",
    props:{
        goodsitem:{
            type:Object,
            require:true,
            default:() => {}
        },

    },
    components:{
        CheckButtom
    },
    data () {
        return {
            ischosed:false
        }
    },
    methods:{
        ischecked(flage){
            if(!flage){
                this.ischosed=true
            }else{
                 this.ischosed=false
            }
            this.$emit('ischecktobuy',this.goodsitem)
        }
    }
}
</script>
<style  scoped>
    .goods-item{
        display: flex;
        align-items: center;
        padding: 5px;
        border-bottom: 1px solid #ccc;

    }
    .item-imgs img{
        width: 80px;
        height: 100px;
        border-radius: 5px;

    }
    .item-info{
         overflow: hidden;
         padding: 5px 10px;
         text-align: left;

    }
    .title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .desc{
        font-size: 14px;
        margin: 15px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color :#666;
    }
    .item-pric{
        display: flex;
        justify-content: space-between;
        margin:13px 0px;
    }
</style>