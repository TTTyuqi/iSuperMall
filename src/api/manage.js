import { instance } from "@/network/request";

//get
export const getAction = (url,parameter) => {
  return instance({
    url: url,
    method: 'get',
    params: parameter
  })
}

//post
export const postAction = (url,parameter) => {
  return instance({
    url: url,
    method:'post' ,
    data: parameter
  })
}

//post method= {post | put}
// export function httpAction(url,parameter,method) {
//   return instance({
//     url: url,
//     method:method ,
//     data: parameter
//   })
// }
export const httpAction = (url,parameter,method) => {
  return instance({
    url: url,
    method:method ,
    data: parameter
  })
}

//put
export const putAction = (url,parameter) =>{
  return instance({
    url: url,
    method:'put',
    data: parameter
  })
}
