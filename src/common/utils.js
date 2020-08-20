//封装一个日期格式化函数
export const formatData = (date,fmtd) => {
    //1.首先判断fmtd参数传过来的关于year（年份）的日期格式：例如 ==》 yyyy｜yyy｜yy
    //2，使用正则表达式 匹配字符串
    /**
     * y+ 匹配一个或者多个y、
     * y* 匹配0个或者多个y
     * y？匹配0个或者1个
     */

     if(/(y+)/.test(fmtd)){
        //RegExp.$1 这个对象获取当前正则匹配出的字符串 
        fmtd = fmtd.replace(RegExp.$1,date.getFullYear().toString().substr(4 - RegExp.$1.length))
     }

     //2.获取对应的年月日是分秒对应的值
      const everyTime = {
          'M+' : date.getMonth() + 1,
          'd+' : date.getDate(),
          'h+' : date.getHours(),
          'm+' : date.getMinutes(),
          's+' : date.getSeconds()
      }

      Object.keys(everyTime).map((item) => {
          if(new RegExp(`(${item})`).test(fmtd)){
              let orgDate = everyTime[item].toString()
              fmtd = fmtd.replace(RegExp.$1,(RegExp.$1.length === 1)?orgDate:addLeftZero(orgDate))
          }
      })
      return fmtd
}

function addLeftZero(orgdate){
    return ('00'+orgdate).substr(orgdate.length)
}