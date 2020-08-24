import {
    ADD_GOOD_TO_SHOPCAR,
    ADD_GOOD_COUNT
}from './mutations_type'

export default {
    [ADD_GOOD_TO_SHOPCAR](state,payload){
        state.shopCarList.push(payload)
    },

    [ADD_GOOD_COUNT](state,payload){
        payload.count++
    },
}