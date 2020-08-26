/**
 * @author 田宇齐
 * @date 2020/8/26 14:22
 * @FilePath: \vue-cli3-project\src\utils\user.js
 * @Description:
 */
import {userLogin} from '@api/login'
import {SET_TOCKEN,SET_USERNAME,SET_AVATAR} from './uer_mutions_type'
import mutations from "../mutations";
export default {
  state:{
    token: '',
    username: '',
    avatar: '',
  },
  mutations: {
    [SET_TOCKEN](state,tocken){
      state.token = tocken
    },
    [SET_USERNAME]:(state,userName) => {
      state.username = userName
    },
    [SET_AVATAR]: (state,avatar) => {
      state.avatar = avatar
    }

  },
  actions:{
      Login(context,payload){
        return new Promise((resolve, reject) => {
          userLogin(payload).then((res) => {
            if (res.data.success){
              context.commit(SET_TOCKEN,res.data.tocken)
              context.commit(SET_USERNAME,res.data.username)
              context.commit(SET_AVATAR,res.data.imgaddress)
              resolve(res.data.message)
            }else {
              resolve(res.data.message)
            }
          }).catch(error => {
            reject(error)
          })
        })
    }
  }
}
