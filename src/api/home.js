import { getAction } from "./manage";

/**
 * @author 田宇齐
 * @date 2020/8/17 14:26
 * @FilePath: \vue-cli3-project\src\utils\home.js
 * @Description:
 */
export function getHomeMultiData() {
  return getAction('/home/multidata')
}

export const getHomeGoosList = (parms) => {
  return getAction('/home/data',parms)
}
