/**
 * @author 田宇齐
 * @date 2020/8/19 17:08
 * @FilePath: \vue-cli3-project\src\utils\selldetails.js
 * @Description: 商品详情页的请求数据
 */
import {getAction} from "./manage";


export function getSellDetails(param) {
  return getAction('/detail',param)
}


