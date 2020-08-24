<template>
    <div class="goods-list">
        <cart-goods-item v-for="(item, index) in goodcarlist" :goodsitem='item' :key="index" @ischecktobuy="ToBuy" ref="goodsitem"/>
    </div>
</template>

<script>

import CartGoodsItem from '@components/content/cartgoodslist/CartGoodsItem'

export default {
    name:"GoodsCartList",
    props:{
        goodcarlist:{
            type:Array,
            require:true,
            default:() => []
        }
    },
    components: {
        CartGoodsItem,
        
    },
    data(){
        return{
            chosedgoods:[],
        }
        
    },
    computed: {
        checkallistobuy(){
            return this.$refs.goodsitem.find(item => item.ischosed == false)
        }
    },

    methods:{
        ToBuy(goods){
            const ischeckd = this.chosedgoods.indexOf(goods)
            if(ischeckd == -1){
                this.chosedgoods.push(goods)
            }else{
                this.chosedgoods.splice(ischeckd,1)
            }
            if(this.checkallistobuy){
                console.log("111",)
                this.$emit('isalltochose',true)
            }else{
                this.$emit('isalltochose',false)
            }
            this.$emit('calcmoney',this.chosedgoods)
        },
        allisactive(flage){
            this.$refs.goodsitem.map(item => item.ischosed = flage)
        }

    }
}
</script>
<style scoped>

</style>