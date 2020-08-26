/**
 * @author 田宇齐
 * @date 2020/8/26 10:35
 * @FilePath: \vue-cli3-project\src\utils\login.js
 * @Description:模拟后台返回用户的登录信息
 */
import { instance2 } from "@/network/request";


export function userLogin(formData){
  return instance2({
    url: '/login',
    method:'post' ,
    data: formData
  })
}
