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


//封装一个商品对象信息类
export class goodInfo {
  constructor(itemInfo, columns,services) {
    // this关键字则代表实例对象
    this.name = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.service = services
  }

}

//封装店铺对象信息类

export class shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.Sells = shopInfo.cSells
    this.Fans = shopInfo.cFans
    this.Goods =shopInfo.cGoods
    this.score =shopInfo.score
  }
}

//封装商品规格类
 export class GoodsParams {
  constructor(info,rule){
    this.imgs = info.images?info.images[0]:''
    this.infos = info.set
    this.infoskey = info.key
    this.rule = rule.tables
    this.rulekey = rule.key
  }

 }

