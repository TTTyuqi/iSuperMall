/**
 * @author 田宇齐
 * @date 2020/8/25 9:30
 * @FilePath: \vue-cli3-project\src\utils\category.js
 * @Description:
 */
import {getAction} from "./manage";

//获取分类title的方法

export const getCategoryTitle = () => {
  return getAction('/category')
}

//获取分类页类容

export function getCategoryContent(param){
  return getAction('/subcategory',param)
}
