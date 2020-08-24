export default {
    getCartGoodsLength(state,getters){
        return state.shopCarList.length
    },
    getCartGoodsList(state,getters){
        // console.log('111',state)
        // console.log('22',getters)
        return state.shopCarList
    }
}