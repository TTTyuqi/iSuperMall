import {
    ADD_GOOD_TO_SHOPCAR,
    ADD_GOOD_COUNT
}from './mutations_type'

export default {
    addGoodToCart(context,payload){
        return new Promise((resolve,reject) => {
            const isHadProdouct = context.state.shopCarList.find(item => item.iid === payload.iid)
            if(isHadProdouct){
                context.commit(ADD_GOOD_COUNT,isHadProdouct)
                resolve('商品数量➕One')
            }else{
                payload.count = 1
                context.commit(ADD_GOOD_TO_SHOPCAR,payload) 
                resolve('商品数量成功加入购物车')
            }
        })
    }
}